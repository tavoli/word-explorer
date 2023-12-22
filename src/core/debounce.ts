import {useState} from "react"

let timer: number[] = []

export default function useDebounceValue(value: any, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value)

  timer.forEach(clearTimeout)
  timer.push(setTimeout(() => {
    setDebounceValue(value)
  }, delay))

  return debounceValue
}
  
