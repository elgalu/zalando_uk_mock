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

### Test
Supported test case:

1. Navigate to `localhost:8080`
1. Search for "Nike"
1. Click on the 1st article
1. Add to basket
1. Go to basket
1. Assert article name and price

### Cleanup

    docker rm -vf uk_mock

## Capture
How to generate the Mock using `wget`

    WGETCMD="wget -m -k -K -E -w 1 --random-wait -p"
    ${WGETCMD} "https://www.zalando.co.uk/"
    ${WGETCMD} "https://www.zalando.co.uk/q=Nike&qf=1&_sourcePage"
    ${WGETCMD} "https://www.zalando.co.uk/nike/?sc=false&_q=Nike&qf=1"
