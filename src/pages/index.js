import React from "react"
import tw from "twin.macro"

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`

export default function Home() {
  return (
    <div>
      <h1>Hi people</h1>
      <Button>Activate</Button>
    </div>
  )
}
