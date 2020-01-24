import { Amazer, AmazerBuilder, RandomizedPrim, Emmure } from "amazer"

export default function generateMaze() {
  const config = new AmazerBuilder()
    .withSize({ width: 20, height: 20 })
    .using(RandomizedPrim)
    .build()

  return new Amazer(config).generate()
}
