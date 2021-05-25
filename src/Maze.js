import React from "react"

import * as images from "./images"
import "./Maze.css"

function Maze({ maze }) {
  return (
    <div className="Maze">
      {maze.tiles.map((row) => (
        <div className="Maze-row">
          {row.map((cell) => (
            <img src={cell.passable ? images.floor : images.wall} alt="" />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Maze
