# Bolafy Card Collection Marketplace

Bolafy Card Collection Marketplace is a a web application to be able to sell card collections.

## Features

- Display all collection available to buy
- Buy a collection and get 2 random cards from the collection
- Display all the cards you have purchased

## Project Structure

This repository contains 2 application:

- `backend`
  `backend` is folder contains `node` application that built using `express` framework. The application provides an API from frontend to get data collection and make purchase.
- `frontend`
  `frontend` is folder contains `reactjs` application that built using `nextjs` framework. Users can use the features through this application.

### Backend

- `src/index.ts` is the main file to run server
- `src/data/` contains exported variable to store data
- `src/interfaces/` contains application interfaces
- `src/routes/` contains web routes in application
- `src/utils/` contains utility function

### Frontend

- `components/` contains react components to be reused
- `interfaces/` contains application interfaces
- `pages/` contains next page to render page, filename used as route
- `settings/` contains setting for library
- `styles/` contains css styling

## Tech

Bolafy Card Collection Marketplace uses a number of frameworks and libraries:

- `Express` - Nodejs network app framework to build API that provide collections data, user's collection data, and make purchase.
- `NextJS` - React framework to enhance web application through pre-rendered strategy (SSR, ISR). Page showing user's collection use SSR (Server Side Rendering) because data is updated regularly. Home page use ISR (Incremental Static Regeneration) because we can pre-rendered to make it fast and updated regularly to show updated data.
- `cors` - Express middleware that can be used to enable CORS.
- `react-modal` - React library to display modal
- `react-modal-hook` - React hook to use `react-model`
- `slick-carousel` - Library to display carousel
- `react-slick` - React library to use `slick-carousel`

## How to run

1. Install backend dependencies and start the server.

```sh
cd backend
npm i
npm run start
```

2. Install frontend dependencies, build and start

```sh
cd frontend
npm i
npm run build
npm run start
```

3. Web app should already be running on port 3001 and API on port 3000
