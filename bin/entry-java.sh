#!/bin/sh

# Note: When using alpine, tryint to use #!/bin/bash will trigger
#  standard_init_linux.go:175: exec user process caused "no such file"

# Java

# https://github.com/NanoHttpd/nanohttpd
# https://github.com/NanoHttpd/nanohttpd/wiki/5-minute-Tutorial
exec java -cp \
  nanohttpd-webserver-2.3.1-014d9f515-jar-with-dependencies.jar \
  fi.iki.elonen.SimpleWebServer
