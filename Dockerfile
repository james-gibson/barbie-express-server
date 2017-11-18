FROM node:8.9.1
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json .
COPY knexfile.js .
RUN npm i knex -g
RUN yarn

# Bundle app source
COPY . .

ENV DATABASE_URL="postgres/postgres"

RUN npm run migrate

CMD [ "npm", "start" ]
