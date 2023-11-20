
# InfoPlex: A Wikipedia Clone 🌐

InfoPlex is an open-source, full-stack application designed to function like Wikipedia, allowing users to add, delete, and update blog posts. This project was created with the motivation to deploy a full-stack application to AWS using Elastic Kubernetes Service (EKS), Relational Database Service (RDS), and EC2 instances.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Preview Video](#preview-video)
- [Contributing](#contributing)

## Technologies Used

- ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) for the frontend.
- ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) for the backend, utilizing JPA and Hibernate.
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) as the database.
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) for containerization.
- ![Kubernetes](https://img.shields.io/badge/kubernetes-326CE5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white) for orchestration and deployment.

## Getting Started

To get started with InfoPlex, clone this repository to your local machine:

```bash
git clone [repository URL]
cd Special Project
```

## Environment Variables

Before running the application, set the following environment variables:

- `JDBC_DATABASE_URL`: URL for the PostgreSQL database.
- `JDBC_DATABASE_USERNAME`: Database username.
- `JDBC_DATABASE_PASSWORD`: Database password.
- `CORS_ALLOWED_ORIGINS`: Allowed origins for CORS.
- `BACKEND_ENDPOINT`: URL of the backend service.

## Running the Application

To run the application locally:

### Frontend

```bash
cd info-plex
```
# Install dependencies
```bash
npm install
```
# Start the Angular app
```bash
ng serve
```

### Backend

```bash
cd infoplex-backend
```
# Build the application
```bash
./gradlew build
```
# Run the application
```bash
./gradlew bootRun
```

## Deployment

InfoPlex is configured for deployment on Kubernetes. To deploy the application:

```bash
cd infoplex-cluster
kubectl apply -f .
```

## Preview Video
📺 A preview video demonstrating the functionality of InfoPlex:

https://github.com/benyaminR/InfoPlex/assets/41753600/9b2fc7f5-af35-45ff-8258-1451872c3c83

## Contributing

Contributions to InfoPlex are welcome!
