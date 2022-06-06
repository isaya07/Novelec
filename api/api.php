<?php
header("Access-Control-Allow-Origin: *");

class Email {
  
  private $sujet = 'Formulaire de Contact';
  
  private $contenu = "";
  
  private $headers = "";

    public function __construct ($nom, $sender, $message, $tel = null, $sujet = null) {
    if (!isset($sender, $nom, $message)) return;
    
    if (isset($sujet)) $this->sujet = $this->sujet.' : '.$sujet;

    // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
    $this->headers .= 'MIME-Version: 1.0'."\n";
    $this->headers .= 'Content-type: text/html; charset=UTF-8'."\n";
    $this->headers .= 'Content-Transfer-Encoding: 8bit'."\n";
    $this->headers .= 'Date: ' . date('r', $_SERVER['REQUEST_TIME'])."\n";
    $this->headers .= 'From: '.$sender."\n";
    $this->headers .= 'Reply-To: '.$sender."\n";
    $this->headers .= 'X-Mailer: PHP/'.phpversion()."\n";
    
    $this->contenu .= '<html><head><title>Formulaire de Contact</title></head><body>';
        $this->contenu .= '<p>Bonjour, vous avez reçu un message à partir de votre site web.</p>';
        $this->contenu .= '<p><strong>Nom : </strong>' . $nom . '</p>';
        $this->contenu .= '<p><strong>Email : </strong>' . $sender . '</p>';
        if (isset($tel))
            $this->contenu .= '<p><strong>Téléphone : </strong>' . $tel . '</p>';
    if (isset($sujet))
          $this->contenu .= '<p><strong>Sujet : </strong>' . $sujet . '</p>';
        $this->contenu .= '<p><strong>Message : </strong>' . $message . '</p>';
        $this->contenu .= '</body></html>';
    }

    public function envoi ($dest) {
    if (!isset($dest)) return;
    
        return mail($dest, $this->sujet, $this->contenu, $this->headers);
    }

}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (isset($_POST['nom'], $_POST['email'], $_POST['message'])) {
    $nom = htmlentities($_POST['nom']); // htmlentities() convertit des caractères "spéciaux" en équivalent HTML
    $email = htmlentities($_POST['email']);
    isset($_POST['tel']) ? $tel = htmlentities($_POST['tel']) : $tel = null;
    isset($_POST['sujet']) ? $sujet = htmlentities($_POST['sujet']) : $sujet = null;
    $message = htmlentities($_POST['message']);
        $envoi = new Email($nom, $email, $message, $tel, $sujet);
        if (!$envoi->envoi('contact@novelec.info')) {
            echo 'Erreur, Erreur lors de l\'envoie du courriel veuillez nous contacté directement a l\'adresse en bas de page.';
        } else {
            echo 'OK';
        }
    } else {
    echo 'Erreur, Paramètres manquants.';
  }
}
?>
