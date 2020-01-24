# eShard Frontend Developer Technical Test

This repository holds the base source code for eShard's technical test for
frontend developers.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
which you can find the original README from in the [README.CRA.md](/README.CRA.md) file.

## Goals

The purpose of this test is twofold:

- Test your knowledge of React and your ability to build apps with it
- Challenge your creativity and your proactiveness

The application that you will find in this repository is a basic maze generator
and viewer. It has no parameters and no interactivity.

Our goal is to transform this simple app into a little game where the player
has to find the exit of the maze.

## Exercises

### E1 - Allow the user to change the maze size

The maze is currently limited to a 20 by 20 tiles area. Add a way for the user
to choose the width and height of the maze and redraw it.

### E2 - Entrance and exit

In order to have a start and an end point, we want to transform two tiles of
the maze into an entrance and an exit.

Observe how the map is generated and find 2 suitable locations for these
special points. You can display them using the `stairs-down` and `stairs-up`
images.

### E3 - Add a player!

Now that our maze has a purpose, it's time to add a little adventurer!

Unsurprisingly, he should start on the entrance tile. The player should be able
to move him using the arrow keys of his keyboard (you're free to implement any
other way to move him).

When the adventurer reaches the exit tile, a message should appear indicating
that the player found the way out.

### E4 - Scoring and ranks

Our last task is to implement scoring in the game. We will define the score as follows:

    tile_count / ((path_length × tile_count) / shortest_path_length)

Where:

- `tile_count` is the total amount of tiles the adventurer can walk on (_i.e;_
  they are `passable`).
- `path_length` is the amount of tiles the player crossed to get to the exit.
  Walking on the same tile multiple tiles counts only as one.
- `shortest_path_length` is the length of the shortest path between the
  entrance and the exit.

Depending on the score we want to assign a rank to the player:

- _Perfect_ if the score is 1
- _Good_ if the score is greater or equal to 0.9
- _Average_ if the score is greater or equal to 0.5
- _Poor_ if the score is lower than 0.5

### Be creative!

Congratulations if you've made it here! We have one last assignment to you, but
for this one it will be up to you!

Add something to the game to make it more interesting, it could be anything.
The most important thing here is to have fun! :)

If you want to use more images than the ones we supply, you can have a look at
the [full tileset at OpenGameArt](https://opengameart.org/sites/default/files/DungeonCrawl_ProjectUtumnoTileset_0.png)

## Time limit

You have no specific time limit for this project, although it probably
shouldn't exceed a couple of hours to finish the basic exercises.

## How to submit your test?

Send this whole folder (you can omit `node_modules`) either by sharing a Git
repository or by packing it into an archive.
