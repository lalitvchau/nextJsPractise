'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>Next JS practise</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prev=>prev+1)}>Click me</button>
    </div>
  )
}