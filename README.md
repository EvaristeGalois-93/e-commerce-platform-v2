1. Istruzioni per la compilazione del codice:

- Frontend: E' necessario installare Angular tramite il comando
  npm install -g @angular/cli

ed avviare il server tramite il comando

                                   ng serve

- Backend: E' necessaria l'installazione di composer e della libreria Laratrust, ed avviare il server tramite il comando

                               php artisan serve

2. Breve descrizione del progetto:

Il suddetto progetto è stato sviluppato utilizzando Angular come tecnologia front-end e Laravel come tecnologia
back-end.

Il sottoscritto si è posto l'obiettivo di elaborare un esempio di e-commerce che potesse garantire un'esperienza
fruibile all'utente. A tale scopo si è creata:

1. una pagina iniziale (homepage) dal carattere e design semplici con una navbar che permette la navigazione tra le varie rotte. Inoltre, solo se si è effettuato l'accesso come venditore è possibile visualizzare un bottone di reindirizzamento alla propria dashboard[1];
2. una pagina dei prodotti nella quale è possibile visionare tutti i prodotti disponibili (e non), navigare nella pagina di dettaglio, filtrare per nome e categoria ed aggiungerli al carrello (quest'ultima operazione solamente se si son effettuati registrazione e login);
3. una pagina di carrello in cui è possibile visionare i prodotti aggiunti dal cliente, sceglierne la quantità, eliminarlo o procedere all'acquisto[2];
4. una pagina di login in cui è possibile effettuare la registrazione (da utente o da venditore) e di conseguenza accedere all'area clienti autenticandosi.

[1] la dashboard è in fase di sviluppo;
[2] la pagina di acquisto dev'essere ancora implementata;
