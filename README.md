# Rocksmith

Based on the [Rocksmith](https://rocksmith.ubisoft.com/rocksmith/en-us/home/) 
game 

[Youtude Video](https://www.youtube.com/watch?v=XHM9uB2kNkU)

## Scripts

Installing dependencies:

### `npm install`

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To start the json server:

### `npm run json:server`

```json
{
  "json:server": "json-server --watch db.json --port 3100"
}
```
Json-server is running on port 3100 to advoid conflict 

Open [http://localhost:3100/songs](http://localhost:3100/songs) to view it in the browser.

## Data Model
```json
"songs": [
    {
      "id": 100,
      "songName": "Even Flow",
      "artistName": "Pearl Jam",
      "difficulty": "100",
      "speed": "85",
      "imageUrl": "./src/images/PearlJamCard.jpg"
    }
```
## Dependencies
```json
"dependencies": {
    "axios": "^0.18.0",
    "bootstrap": "^4.0.0",
    "json-server": "^0.12.1",
    "react": "^16.0.0",
    "react-bootstrap": "^0.32.1",
    "react-dom": "^16.0.0",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.1",
    "reactstrap": "^5.0.0-beta.3"
  }
"devDependencies": {
    "eslint-config-google": "^0.9.1"
  }
```
## Components
![component](https://user-images.githubusercontent.com/25591390/38022554-b9cb1432-3277-11e8-9d3f-2515d556f861.png)

* NavigationBar
* Songs
* SongsList 
* Song
* Footer
* Home
* About
* AddSong