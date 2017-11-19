FROM node:8.9.1
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY . .
RUN yarn
ENV NODE_ENV=docker

#RUN npm run migrate

CMD [ "npm", "start" ]
