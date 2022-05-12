import express, { Request, Response } from "express"
import { prisma } from "../prisma"

export const pokemonRouter = express.Router()

pokemonRouter.get("/", async (req: Request, res: Response) => {``

const pokemons = await prisma.pokemon.findMany({ select: { id: true, name: true, image:true}})
res.status(200).json(pokemons)
})