#!/bin/sh

# NodeJS
http-server -p ${MOCK_SERVER_PORT} &
SERVER_PID=$!

trap "kill $SERVER_PID" exit INT TERM

wait
