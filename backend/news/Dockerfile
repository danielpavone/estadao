FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install -g pnpm@latest
RUN pnpm install
EXPOSE 3000
CMD [ "pnpm", "start" ]