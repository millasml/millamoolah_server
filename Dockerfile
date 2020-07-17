# Use a lighter version of Node as a parent image
FROM node:10
# Set the working directory to /api
WORKDIR /server
# copy package.json into the container at /api
COPY package.json /server/
COPY yarn.lock /server/

# install dependencies
RUN yarn
# Copy the current directory contents into the container at /api
COPY . /server/
# Make port 9000 available to the world outside this container
EXPOSE 9000
# Run the app when the container launches
CMD "yarn start"