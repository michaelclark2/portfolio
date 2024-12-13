FROM node:lts-alpine as builder
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx as runner
COPY --from=builder /out /usr/share/nginx/html
