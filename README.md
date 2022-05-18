# dummyDB

An easy-to-use tool to generate dummy data for application testing.

## Tech Stack

| Frontend     | Backend      |
|:-------------|:-------------|
| React        | Node.js      |
| React Router | Express.js   |
| Redux        |              |
| Axios        |              |

## Usage

### Clone the Project

```bash
$ git clone https://github.com/skittlesaur/dummydb
```

### Client Side

```bash
$ cd client   # go to the client folder
$ npm i       # install packages
$ npm run dev # run the client locally

# deployment for client
$ npm build   # compile react code using webpack
$ npm start   # run the client side statically with react-scripts
```

### Server Side

Create a `.env` file in the server directory and insert the following code. Replace the values with your credentials.

```dotenv
# default port value
PORT=5000
```

Start the server

```bash
$ cd server   # go to the server folder
$ npm i       # install packages
$ npm run dev # run the server locally
$ npm build   # builds the server
```
