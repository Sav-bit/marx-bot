# marx-bot
Bot di Telgram scritto in Node.js che sostisuice gli agettivi possessivi sbagliati (dalla prima alla terza persona signolare) a quelli giusti da vero compagno (prima persona plurale)

eg. abbiamo sempre i miei soldi -> abbiamo sempre i NOSTRI soldi*

Per il funzionamento è necessario che sia installato Telegraf.js e che al bot venga assegnato il permesso di di leggere i messaggi.


## Come installare
Ez con docker
```bash
docker run -it -e "token=YOUR_TELEGRAM_API_KEY" albertoxamin/marx-bot:latest
```
