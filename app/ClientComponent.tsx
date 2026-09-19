"use client"
import { useState } from "react"

export default function ClientComponent({ name }: {name:string}) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="my-5">
      <h1 className="font-bold text-2xl">Client Component</h1>
      <div>{name}</div>
      <p>Counter: {counter}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
}