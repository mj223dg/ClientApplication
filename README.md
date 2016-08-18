# Klientapplikation i 1dv450

https://mj223dg.github.io

## Installation
Om du vill köra lokalt. Kräver npm och node.js
* Klona ner repot
* npm install http-server -g
* cd ClientApplication
* http-server
Nu finns applikationen på localhost:8080

Ändringar i api:
* Var tvungen att lägga till Rack-Cors gem för CORS för alla http-metoder.
* Knock och Active Model Serialzers gems hade breaking changes i updates så
var tvungen att göra ändringar för att API:t skulle funka igen.
