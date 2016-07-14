# Zalando UK Mock
Mock of https://www.zalando.co.uk/ for testing

## Contributing

### Build

    docker build -t elgalu/zalando_uk_mock .

### Run
One liner and exposing the port

    docker run --rm -ti --name=uk_mock -p 8080:8080 elgalu/zalando_uk_mock

Multi-line without exposing the port (you will need to docker inspect the IP)

    docker run --rm -ti --name=uk_mock -P elgalu/zalando_uk_mock

Find out IP and Port

    IP=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' uk_mock)
    PORT=$(docker inspect -f='{{(index (index .NetworkSettings.Ports "8080/tcp") 0).HostPort}}' uk_mock)

### Push

    docker push elgalu/zalando_uk_mock

### Tests
Test example

    export MOCK_SERVER_PORT=80 MOCK_SERVER_HOST=www.google.com SELENIUM_HUB_HOST=d.host.loc.dev
    ./test/python_test.py chrome

Test mock for example

    export MOCK_SERVER_PORT=8080 MOCK_SERVER_HOST=d.host.loc.dev SELENIUM_HUB_HOST=d.host.loc.dev
    ./test/python_test.py firefox

### Cleanup

    docker rm -vf uk_mock

## Capture
How to generate the Mock using `wget`

    WGETCMD="wget -m -k -K -E -w 1 --random-wait -p"
    ${WGETCMD} "https://www.zalando.co.uk/"
    ${WGETCMD} "https://www.zalando.co.uk/q=Nike&qf=1&_sourcePage"
    ${WGETCMD} "https://www.zalando.co.uk/nike/?sc=false&_q=Nike&qf=1"
