# React Research and Development Application (Dockerized)

This React application is a research and development project created to facilitate learning and experimentation with frontend development using React. The app has been Dockerized for easier deployment and environment management.

## Project Overview

This project is a **Dockerized React application** for personal development, enabling experimentation with React components, hooks, state management, and other frontend development essentials.

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Docker** - Containerization tool for deploying and running the application in isolated environments
- **JavaScript (ES6+)** - Core language for frontend interactivity
- **CSS** - Styling for layout and design
- **HTML** - For structuring content

### Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/) to run the application in a container.

### Clone the Repository

```bash
git clone git@github.com:shawonNirob/react-render-app.git
cd react-render-app
```

## Docker Setup

The project includes a `Dockerfile` to build and run the React application in a container.

### Building the Docker Image

To create a Docker image of the app, use the following command:
```bash
docker build -t react-render-app .
```

### Running the Docker Container

To run the application in a Docker container:
```bash
docker run -p 3001:80 react-render-app
```

This maps port `80` of the container to port `3001` on your machine. You should now be able to view the app in your browser at `http://localhost:3001`.

### Stopping the Container

To stop the container, you can list running containers and stop it by container ID:
```bash
docker ps
docker stop <container-id>
```

## Goals

- Develop a solid foundation in React for building UI components.
- Understand state and data flow in component-driven architecture.
- Gain experience with Docker for containerized development and deployment.


## Acknowledgements

This project is part of a self-directed learning journey to understand React and Docker.