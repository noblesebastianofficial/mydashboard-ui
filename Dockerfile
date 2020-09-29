# Stage 1

FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2
FROM nginx:latest
COPY --from=build /usr/src/app/dist/mydashboard-ui /usr/share/nginx/html