#!/bin/sh

# Python 3:
#  python -m http.server
# Python 2:
#  python -m SimpleHTTPServer
# python -m SimpleHTTPServer ${MOCK_SERVER_PORT} &

python -m SimpleHTTPServer ${MOCK_SERVER_PORT} &
SERVER_PID=$!

trap "kill $SERVER_PID" exit INT TERM

wait
