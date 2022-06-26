import { ref } from "vue"
const bus = ref(new Map())

export default function useEventsBus() {
  function emit(event, ...args) {
    bus.value.set(event, args)
    console.log(event, args)
  }

  return {
    emit,
    bus,
  }
}
