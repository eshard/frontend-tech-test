import express, { Request, Response } from "express";
import { prisma } from "./prisma";
import { pokemonRouter } from "./routes/pokemons";
import { setUpFirst100Pokemon } from "./utils";

async function start() {
  const server = express();

  const hasPokemons = await prisma.pokemon.count()
  if(hasPokemons < 1) {
    await setUpFirst100Pokemon();
  }

  server.use("/pokemons", pokemonRouter)
  
  server.get("/", (req: Request, res: Response) => {
    res.status(200).json("Everything's working properly!")
  })

  server.listen(3001, () => console.info("Server listenning on port 3001"));
}

try{
  start();
} catch(err) {
  console.error(err);
}
