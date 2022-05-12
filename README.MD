# Prerequisites

Before diving into the test, you'll have a bit of set-up to do.

In order to run the database, make sure you have `docker-compose` installed on your machine. You can see the doc [here](https://docs.docker.com/compose/install/)

Once you're done you would be able to run `docker-compose up` at the root folder of the project.

Next, using your package manager of choice run the following commands in your terminal:
- `cd backend && yarn`
- `cd ../frontend && yarn`

Finally, you can start both the API and the UI by running `yarn dev` in the corresponding folders.

Head to the following urls to check all is working properly:
- `localhost:8080` should prompt you an adminer interface. Loggin with `{system: PostgreSQL, server: db, user: sacha, pwd: bourgpalet, db: eshard}`
- `localhost:3001/` should display a JSON gathering saying that all is working.
- `localhost:3000` should prompt you a grid of pokemons images and names

Congratulations you're all set-up and ready to go 🚀!

# Test

This little project is based upon Next.js, Express, Typescript, prisma and PostgreSQL.
You have 2hours to complete as many questions as possible.

## Question 1

Every Pokedex should have a search feature don't you think ? Let's build it!

## Question 2

Having a picture and a name of a pokemon isn't enough for a so called Pokedex:
- Add an endpoint to serve the details of a given pokemon 
- Then use this route on the frontend part

## Question 3

Now that we have some features working, let's style the frontend a bit!
Improve the style of the two pages.

## Question 4

Now that everything is in place, it's time to improve our code base. 
- Improve the DB schema
- Depending on what improvments you made to the DB, expose a new endpoint
- Use this new endpoint in the frontend

## Wrap-up

First of all: 🔥 CONGRATULATIONS 🔥 ! Finished or not, thanks for your time and the effort you put into this assessment.
