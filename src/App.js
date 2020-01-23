import React from "react"

import Maze from "./Maze"
import generateMaze from "./generateMaze"

import "./App.css"

const maze = generateMaze()

function App() {
  console.log(maze)

  return (
    <div className="App">
      <Maze maze={maze} />
    </div>
  )
}

export default App
