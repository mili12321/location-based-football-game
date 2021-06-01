# location-based-football-game ⚽

Web app that display two markers on a map.
One marker is a ball marker which represents the user current location,
The second marker is a goal, its location is decided from the server.

Once the user starts moving the ball, The marker will show his movement.
When the ball (user) reaches the goal marker, then the game will end and we will see a goal alert


## Quick Start
* You will need a [**Node.js**](https://nodejs.org/en/download/) installed in your environement.
### Clone
* Clone this repo to your local machine using ```git clone https://github.com/mili12321/location-based-football-game.git```

### Setup
> Install the project dependencies and packages

```bash
$ npm install
```
> Get and set API key

* You will need to get an API key from here: `https://developers.google.com/maps/documentation/javascript/get-api-key`

* To set up your API key go to \src\cmps\GoogleMap.jsx. 

> Run the app in a development mode

```bash
$ npm start
```
> Navigate to

```bash
$ http://localhost:3000/
```

## Tech
* React Hooks
* Redux 
* SCSS
* Javascript 
* html  
