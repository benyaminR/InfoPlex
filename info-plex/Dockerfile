# Step 1: Build the Angular project
FROM node:18 as build-step

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN npm run build --prod

# Step 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=build-step /app/dist/info-plex /usr/share/nginx/html

# Optional: Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/browser/assets/env.template.js > /usr/share/nginx/html/browser/assets/env.js && exec nginx -g 'daemon off;'"]