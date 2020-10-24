# marx-bot
Bot di Telegram scritto in Node.js che sostisuice gli agettivi possessivi sbagliati (dalla prima alla terza persona signolare) a quelli giusti da vero compagno (prima persona plurale)

eg. abbiamo sempre i miei soldi -> abbiamo sempre i NOSTRI soldi*

Per il funzionamento è necessario che sia installato Telegraf.js e che al bot venga assegnato il permesso di di leggere i messaggi.


## Come installare
### Development
> Attenzione: necessario `node >= 10`

1. Installare le dipendenze
```bash
npm i
```

2. Avviare il bot
```bash
export token="IL_TUO_TOKEN_TELEGRAM"
node bot.js
```

3. Fai modifiche al bot 🛠

4. Testa che le modifiche funzionino
```
npm test
```


### Production
Per il deployment potete utilizzare tool come `pm2`, però consiglio di utilizzare docker, in quanto potete avviare il bot senza ulteriori configurazioni eseguendo questo comando:
```bash
docker run -it --restart=always -e "token=YOUR_TELEGRAM_API_KEY" albertoxamin/marx-bot:latest
```
