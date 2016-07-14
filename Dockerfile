#-----------------------------------
# Python
#  https://hub.docker.com/_/python/
#-----------------------------------
# FROM python:2.7-alpine

#-----------------------------------
# Java
#  https://hub.docker.com/_/java/
#-----------------------------------
# FROM java:jre

#-----------------------------------
# NodeJS
#  https://hub.docker.com/_/node/
#-----------------------------------
FROM node:6-slim
RUN npm install http-server -g

#----------#
#- Common -#
#----------#
RUN mkdir /var/log/cont

ADD bin/* /usr/local/bin/
ADD site /site

WORKDIR /site
ENV MOCK_SERVER_PORT=8080

EXPOSE ${MOCK_SERVER_PORT}
CMD ["/usr/local/bin/entry-nodejs.sh"]
