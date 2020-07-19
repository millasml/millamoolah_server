FROM node:12-alpine

WORKDIR /server
# copy package.json into the container at /api
COPY package.json ./
COPY yarn.lock ./

# install dependencies
RUN yarn install

COPY . ./

# Make port 9000 available to the world outside this container
EXPOSE 9000
# Run the app when the container launches
CMD ["yarn", "start"]