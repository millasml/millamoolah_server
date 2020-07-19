FROM node:12-alpine

WORKDIR /server
# copy package.json into the container at /api
COPY package.json /server/
COPY yarn.lock /server/

# install dependencies
RUN yarn install
# Copy the current directory contents into the container at /api
COPY . /server/
# Make port 9000 available to the world outside this container
EXPOSE 9000
# Run the app when the container launches
CMD ["yarn", "start"]