FROM golang:latest

WORKDIR /
COPY . .
RUN go get -d github.com/gorilla/mux

CMD ["go","run","main.go"]
EXPOSE 8080/tcp