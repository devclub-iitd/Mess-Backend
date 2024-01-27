FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 8080

CMD ["node", "dist/main"]

