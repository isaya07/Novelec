export default function (imgUrl) {
  console.log(imgUrl)
  let imgLoad = null
  const img = new Image()
  img.onload = function () {
    imgLoad = { src: imgUrl, width: this.naturalWidth, height: this.naturalHeight }
    return imgLoad
  }
  img.src = imgUrl
}
