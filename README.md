# Guaradata backend

This repository contains the backend of the Guaradata project. It is responsible for managing the business logic and communication with the database using NestJS, Prisma, and Mongoose. The backend can be configured for both development and production, with Docker support to facilitate dependency management and deployment.

## Setup Development Server

### Access backend folder

```bash
cd backend
```

### Installation

```bash
npm install
```

### Database

To perform data migrations with Prisma, run the following command in the backend folder:

```bash
npx prisma migrate dev --name init
```

### Docker container

Run the following command to build the Docker project on your local machine from the root folder:

```bash
cd..
```

Add the .env file to the root directory. The directory contains an example .env file (env.example). Build and run:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Running the app

```bash
npm run start:dev
```

## Setup Production Server

Run the following command to build the project in Docker for production:

```bash
docker-compose up --build
```
