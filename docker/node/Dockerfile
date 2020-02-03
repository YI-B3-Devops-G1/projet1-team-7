FROM node:lts-alpine

ENV NODE_ENV development
ENV API_PORT 3000

WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node

CMD [ "npm", "run", "start" ]

