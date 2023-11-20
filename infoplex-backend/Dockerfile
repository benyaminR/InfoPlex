FROM gradle:7.2.0-jdk17 AS builder

# Create a directory for your project
WORKDIR /home/gradle/src

# Copy the project source code to the container
COPY . /home/gradle/src

# Build the Spring Boot application
RUN ./gradlew bootJar


# Create a new stage for the final Docker image
FROM openjdk:17-alpine

# Copy the JAR file built in the previous stage to this image
COPY --from=builder /home/gradle/src/build/libs/info-plex.jar /app/app.jar

EXPOSE 8080

# Define the command to run your Spring Boot application
CMD ["java", "-jar", "/app/app.jar"]
