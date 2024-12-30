<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use App\Models\products;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'unycos - Tavolo Pieghevole PC Portatile, Supporto con Altezza Regolabile, Leggio e Slot per Tazza 56x33x23cm, Vassoio Letto per Colazione, Lavorare, Leggere, Scrivere, Guardare Film (Walnut)',
                'description' => ' 💻 {Design ergonomico} Il tavolo pieghevole per laptop incorpora opzioni di regolazione con 5 livelli di inclinazione, che ti consentono di mantenere il computer allineato con la tua visione, il che aiuta a ridurre lo sforzo del collo e delle spalle durante le lunghe sessioni.',
                'price' => 24.70,
                'quantity' => 10,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'ECURS Tastiera Wireless Gaming Tastiera Italiana Pc Silenziosa Con Controllo Multimediale Retroilluminato, Ricaricabile Tastiera USB Ergonomica, Anti-ghosting da 2,4 GHz per Windows, Mac, PC',
                'description' => 'TASTIERA SENZA FILI: Questa tastiera per pc utilizza la tecnologia wireless avanzata a 2,4 GHz, plug and play. Trasmissione dati rapida e stabile, senza ritardi o interruzioni, con un raggio di lavoro fino a 33 piedi.',
                'price' => 35.99,
                'quantity' => 5,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Xiaomi Redmi Note 11S Smartphone, 6GB RAM 128GB ROM, display AMOLED da 6,43 pollici, processore MediaTek Helio G96, fotocamera quadrupla AI da 108 MP (Grigio).',
                'description' => '【Incredibile MediaTek Helio G96 octa-core】 MediaTek Helio G96 abilita una incredibile fotocamera da 108 MP e una frequenza di aggiornamento fluida come il burro di 90 Hz, offrendoti scatti nitidi e potenti esperienze di gioco.',
                'price' => 129.80,
                'quantity' => 30,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Motorola Moto e14 (2/64GB, batteria 5000 mAh, display 6.56 pollici HD+ 90Hz, fotocamera 13MP, processore UNISOC T606, Dual SIM, Android 14(Go edition), Charcoal Grey.',
                'description' => 'Svincolati dalla necessità di una presa di corrente grazie alla potente batteria da 5000mAh che ti consente di lavorare e divertirti più a lungo. Dai vita ai tuoi contenuti con un ampio display da 6.56 pollici HD+. Cattura momenti indimenticabili con la fotocamera da 13MP.',
                'price' => 69.00,
                'quantity' => 0,
                'status' => 'inactive',
                'user_id' => '1',
            ],
            [
                'name' => 'Soundcore Cuffie Bluetooth by Anker P20i, Auricolari Bluetooth 5.3, Cuffie Wireless In-ear Driver 10mm con Bassi Potenti, 30 Ore di Riproduzione, Resistenza acqua IPX5, EQ, 2 microfoni chiamate AI.',
                'description' => 'BASSI POTENTI: gli auricolari bluetooth wireless soundcore P20i sono dotati di driver da 10 mm sovradimensionati che offrono un suono dettagliato con bassi potenziati.',
                'price' => 19.99,
                'quantity' => 0,
                'status' => 'inactive',
                'user_id' => '1',
            ],
            [
                'name' => 'Top Gun: Maverick (Blu-ray)',
                'description' => 'Dopo più di trent\'anni di servizio il Tenente Pete “Maverick” Mitchell, tra i migliori aviatori della Marina, è ancora nell’unico posto in cui vorrebbe essere. Evita la promozione che non gli permetterebbe più di volare, e si spinge ancora una volta oltre i limiti, collaudando coraggiosamente nuovi aerei. Chiamato ad addestrare una squadra speciale di allievi della accademia Top Gun per una missione segreta, Maverick incontrerà il Tenente Bradley Bradshaw, nome di battaglia "Rooster”, figlio del suo vecchio compagno di volo Nick Bradshaw “Goose”. Alle prese con un futuro incerto e con i fantasmi del suo passato, Maverick dovrà affrontare le sue paure più profonde per portare a termine una missione difficilissima, che richiederà grande sacrificio da parte di tutti coloro che sceglieranno di parteciparvi. Edizione Blu-ray',
                'price' => 17.69,
                'quantity' => 15,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'The Batman (2022) (DS) ( DVD)',
                'description' => 'Quando l\'Enigmista, un sadico serial killer, comincia ad assassinare importanti figure politiche a Gotham, Batman è costretto ad investigare sulla corruzione nascosta della città e sul coinvolgimento della sua famiglia.',
                'price' => 8.28,
                'quantity' => 25,
                'status' => 'inactive',
                'user_id' => '1',
            ],
            [
                'name' => 'Signs - 4K (Bd 4K + Bd Hd)',
                'description' => 'Dallo sceneggiatore e regista de «Il sesto senso» e «Unbreakable» M. Night Shyamalan, la storia della famiglia Hess che , un giorno, vede comparire inspiegabili cerchi larghi fino a cento metri sul proprio campo di grano. Graham Hess e la sua famiglia vengono a sapere che la causa di quelle strane forme sono delle misteriose creature aliene. La notizia si sparge e i cerchi si moltiplicano in tutto il mondo. Sign è l’incredibile storia di una famiglia che deve affrontare, nella propria fattoria, quelli che sembrano essere gli ultimi terribili istanti di vita di un mondo invaso da temibili creature aliene.',
                'price' => 29.99,
                'quantity' => 10,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'RaiPlay',
                'description' => 'Film, serie tv, fiction, programmi, documentari, cartoni animati e tanti altri contenuti disponibili gratuitamente On Demand e in streaming.
                                L’offerta è gratuita e comprende l’accesso ad un vasto catalogo ON DEMAND, organizzato per tipologie e generi, alle DIRETTE streaming di 14 canali Rai e al servizio di GUIDA TV/REPLAY per rivedere on demand i programmi andati in onda negli ultimi 7 giorni e scoprire cosa offre la programmazione futura delle reti Rai.
                                -----
                                Per fruire dei contenuti on demand e utilizzare i servizi di personalizzazione effettua la login con un account RaiPlay o utilizza la nuova funzionalità di pairing “Associa Tv” inserendo il codice numerico apparso sul tuo schermo TV.
                                Per registrarti gratuitamente, vai sul sito www.raiplay.it o sull’app RaiPlay disponibile per smarphone e tablet Android.
                                La registrazione a RaiPlay è gratuita, sicura e Rai proteggerà i tuoi dati senza cederli a nessuno.',
                'price' => 0.00,
                'quantity' => 100,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Mediaset Infinity',
                'description' => 'Un’app gratuita con tanti contenuti esclusivi, dove puoi trovare tutto il meglio del mondo Mediaset: intrattenimento, fiction, film, serie TV, informazione, sport, documentari e molto ancora, per accompagnarti in ogni tuo momento. E se attivi Infinity+ potrai avere ancora più film e serie TV da vedere dove e quando vuoi.',
                'price' => 0.00,
                'quantity' => 100,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Braun Series 5 Regolabarba Uomo, Rasoio Elettrico Barba, EasyClean, Wet&Dry, Ricaricabile, Rasoio A Lamina Senza Fili, Idea Regalo, 51-B1000s Blu',
                'description' => 'Il rasoio elettrico barba Braun Series 5 rende facile la rasatura grazie alle 3 lame flessibili che si adattano ai contorni del viso. Il sistema EasyClean consente una pulizia rapida e semplice senza rimuovere la testina del rasoio uomo. La batteria Li-Ion fornisce fino a 3 settimane di rasatura e una ricarica rapida di 5 minuti. Questo rasoio barba elettrico è impermeabile al 100% per un utilizzo Wet&Dry. Compatibile con EasyClick per personalizzare il tuo rasoio. La confezione comprende: 1 Rasoio uomo Series 5 1 Cappuccio di protezione 1 Alimentatore intelligente con regolazione automatica del voltaggio 100-240 V 1 Spazzolina di pulizia',
                'price' => 64.99,
                'quantity' => 50,
                'status' => 'inactive',
                'user_id' => '1',
            ],
            [
                'name' => '60ml. Bio Siero Vitamina C e Vit. E. Siero Viso Acido Ialuronico Antirughe, Antimacchie Illuminante, e Antietà. Ideale Come Crema Contorno Occhi e per Dermaroller. Biologico,Vegano',
                'description' => 'SIERO PER VISO, COLLO, DÉCOLLETÉ E CONTORNO OCCHI, ANTIRUGHE - SKIN CARE ANTI-ETÀ DONNA E UOMO: Siero illuminante viso per una pelle fresca e nutrita. Il nostro siero viso è arricchito con ingredienti antirughe e antimacchie. Si assorbe subito per un’azione SUPER idratante e rimpolpante immediata. La vitamina C, E, + niacinamide, acido ialuronico a basso/medio peso molecolare, olio di jojoba e aloe vera stimola la produzione di collagene migliorando la texture della pelle dall’interno.',
                'price' => 11.99,
                'quantity' => 35,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Dowinx Sedia da gioco, sedia da ufficio, in tessuto, per primavera, cuscino da gioco, in tessuto con poggiatesta, ergonomica, con poggiapiedi',
                'description' => '[Comfort di seduta simile al divano] Il cuscino di questa sedia da gioco è realizzato con molle insacchettate e schiuma sagomata, che offre lo stesso comfort elastico e confortevole di un divano. Le molle distribuiscono la pressione in modo ottimale sul cuscino per una migliore esperienza di guida e una maggiore ergonomia. [Tessuto altamente traspirante] La superficie della sedia da gioco è realizzata in tessuto a rete altamente traspirante che permette un\'efficace dissipazione del calore. Anche nelle calde giornate estive, la seduta rimane piacevolmente ariosa. La capacità di carico di questo materiale aiuta il corpo quando si è seduti e contribuisce ad aumentare le prestazioni di lavoro. [Appositamente progettato per persone delicate] La posizione di seduta ideale assicura che i piedi tocchino naturalmente il pavimento. Ciò significa che l\'altezza del sedile ≈ 25% dell\'altezza dell\'utente. Questo porta la parte bassa della schiena in una posizione corretta e riduce notevolmente il carico. Questa sedia da gioco è stata appositamente progettata per le persone più piccole, sia adulti che giovani. [Garanzia di alta qualità] Il fissaggio dello schienale di questa sedia da scrivania da gioco è stato migliorato. Lo schienale rinforzato con piastra in acciaio può sopportare facilmente più di 200 libbre. Le viti di fissaggio sono disposte in un motivo triangolare, che aumenta significativamente la stabilità dello schienale. Le nostre sedie offrono una garanzia di restituzione di 30 giorni e un anno di sostituzione gratuita per gli accessori. [Funzioni semplici ma versatili] Questa sedia da gioco offre una funzione reclinabile da 90° a 135° ed è dotata di un poggiapiedi integrato. È adatto anche per giocare, lavorare e rilassarsi. Il cuscino massaggiante in vita e il poggiatesta accelerano il recupero dalla stanchezza e alleviano la colonna lombare durante le lunghe stagioni di seduta. Scopri il perfetto mix di semplicità e versatilità con la nostra sedia da gioco.',
                'price' => 118.71,
                'quantity' => 25,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Yankee Candle Candela profumata | Giara grande Notte di Mezza Estate | Candele a lunga combustione: fino a 150 ore | Candele Profumate - il regalo perfetto per le donne',
                'description' => 'NOTTE DI MEZZA ESTATE: Inebriante e virile, una miscela profumata di muschio, patchouli, salvia e mogano
                                AROMA CHE INONDA L’AMBIENTE: Gli ingredienti autentici e la cera di prima qualità garantiscono una fragranza costante e di lunga durata
                                CANDELE PROFUMATE A COMBUSTIONE LUNGA: Fino a 150 ore; 17 cm altezza x 10 cm larghezza (623 g)
                                DESIGN SENZA TEMPO: Contenuta nella classica giara in vetro con coperchio per preservare la fragranza; etichetta rimovibile per un look personalizzato
                                UNA COMBUSTIONE PULITA E UNIFORME: Lo stoppino in fibra naturale di cotone al 100% della candela profumata è dritto e centrato',
                'price' => 23.99,
                'quantity' => 0,
                'status' => 'inactive',
                'user_id' => '1',
            ],
            [
                'name' => 'Airwick Active Fresh Deodorante per Ambienti, Confezione con 1 Diffusore Automatico senza gas, 1 Ricarica alla Fragranza Vaniglia e Caprifoglio 228ml, 2 Pile AA, Neutralizza Odori 24/7',
                'description' => 'IL NOSTRO PRIMO SPRAY AUTOMATICO SENZA GAS: la sua formula a base d\'acqua è il risultato di un\'accurata selezione diingredienti.
                                CONFEZIONE: Contiene 1 diffusore automatico senza gas, 1 ricarica Air Wick Active Fresh alla fragranza Vaniglia e Caprifoglio e batterie.
                                FRAGRANZA: Infusa con oli essenziali naturali. La tua casa avrà un profumo incredibilmente fresco e accogliente.
                                CONTROLLO DELL’INTENSITA’: scegli e controlla l\'intensità della fragranza come preferisci.
                                NEUTRALIZZA GLI ODORI 24/7: Realizzato con potenti molecole che neutralizzano gli odori per combattere i cattivi odori.
                                95% FORMULA DI ORIGINALE NATURALE: senza ftalati, propellenti e coloranti.',
                'price' => 6.99,
                'quantity' => 26,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Tommy Hilfiger Women TH SOFT UTILITY LRG CROSSOVER PU, Black, One Size',
                'description' => 'L\'apice dell\'offerta di prodotti Tommy Hilfiger è sofisticata ed elevata, fondendo l\'eredità americana del marchio con influenze contemporanee e un tocco di moda giocoso. I classici storici sono reinventati per oggi, e la selezione curata di pezzi iconici è unicamente mescolata e abbinata per uno stile senza sforzo moderno, sicuro e rilassato.',
                'price' => 137.89,
                'quantity' => 28,
                'status' => 'active',
                'user_id' => '1',
            ],
            [
                'name' => 'Ward, Scarpe da Ginnastica Unisex-Bambini e Ragazzi',
                'description' => 'Che si tratti di escursioni, giochi o arrampicate: con il VOJO VENT VC diventa tutto il mondo un parco giochi d\'avventura per i tuoi bambini. Soprattutto nelle calde giornate estive, le scarpe leggere sono molto comode da indossare. Il materiale in rete traspirante nell\'albero offre un clima confortevole anche durante i movimenti intensi. Grazie alla suola antiscivolo, i piedi dei bambini non si stancano così rapidamente anche dopo molte ore di fuori. Con il suo design alla moda, il VOJO VENT VC ha la roba per diventare la nuova scarpa preferita dei tuoi bambini.',
                'price' => 42.00,
                'quantity' => 0,
                'status' => 'inactive',
                'user_id' => '1',
            ],
            [
                'name' => 'Rain Overalls Tuta Impermeabile Unisex-Bambini e Ragazzi',
                'description' => 'Per divertirsi in caso di pioggia piovoso: i pantaloncini unisex sono antivento e impermeabili grazie alle cuciture saldate.
                                Sotto i pratici vestiti da pioggia c\'è abbastanza spazio per pantaloni o biancheria intima calda. Il materiale leggero dei pantaloni garantisce il massimo comfort, poiché rimane morbido anche al freddo.
                                I pantaloni antipioggia sono regolabili in lunghezza grazie alle bretelle larghe ed elastiche con chiusura a scatto e agli elastici all\'estremità del piede. I riflettori attaccati al salopette garantiscono una maggiore sicurezza al buio.
                                Grazie ai bottoni a pressione montati lateralmente e alle bretelle regolabili in altezza, i pantaloni sono regolabili in larghezza. La barra elastica dei pantaloni che può essere rimossa se necessario per una perfetta vestibilità degli stivali di gomma.
                                I pantaloni funzionali possono essere lavati comodamente in lavatrice fino a 40 °C.
                                Fiducia tessile – Oeko-Tex Standard 100 classe 1 testato dall\'Istituto Hohenstein per la presenza di sostanze nocive (n. 12.0.05235).',
                                                'price' => 42.00,
                'quantity' => 0,
                'status' => 'inactive',
                'user_id' => '1',
            ],
            [
                'name' => 'Baogaier Impermeabile da Pioggia Bambini Bambine con Cappuccio Modello Cartone Animato 3D Antipioggia Giacca Tuta Portatile Sportivo Jogging Impermeabili Ragazzi Ragazze Unisex Bimbo Bimba 1-8 Anni',
                'description' => '💦 【Materiale】 Questo impermeabile dinosauro per bambini è realizzato in PVC di alta qualità, poliestere ecologico, resistente alla corrosione, la sua consistenza è delicata e morbida, non fa male alla pelle, leggero e traspirante ma resistente alla pioggia, un pezzo di tigre / gufo / L\'impermeabile con stampa animalier è adatto per primavera, estate, autunno e inverno. Abbigliamento ideale per il tempo umido per bambini, ragazzi e ragazze.',
                'price' => 25.99,
                'quantity' => 0,
                'status' => 'inactive',
                'user_id' => '1',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
