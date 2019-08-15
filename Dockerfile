FROM node:8.9.4

COPY . /app/
WORKDIR /app

RUN npm install

EXPOSE 7001
CMD ["npm", "run", "dev"]
