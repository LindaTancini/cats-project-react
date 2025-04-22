# Tema gatto con React: useState e useEffect

Questo repository contiene 10 esercizi pensati per aiutarmi a fare pratica con **useState** e **useEffect** in React.  
Ogni esercizio è a tema gatto e si concentra esclusivamente su questi hook.  
Non sono fornite soluzioni—il tuo obiettivo è implementare la funzionalità come descritto.

---

## Esercizi

### 1. Componente Contatore di Gatti

- **Obiettivo:** Crea un semplice componente che visualizza il numero di gatti in un rifugio.
- **Requisiti:**
  - Usa **useState** per inizializzare il numero di gatti (es. partendo da 3).
  - Mostra un contatore sullo schermo.
  - Includi un pulsante che, al clic, incrementa il numero di gatti di 1.
  - Facoltativo: aggiungi un pulsante per azzerare il contatore.

---

### 2. Recupero Immagine di Gatto

- **Obiettivo:** Costruisci un componente che recupera e mostra un'immagine casuale di un gatto da un'API gratuita.
- **Requisiti:**
  - Usa **useEffect** con un array di dipendenze vuoto per recuperare un'immagine casuale all'avvio del componente da: `https://api.thecatapi.com/v1/images/search`.
  - Usa **useState** per salvare l'URL dell’immagine.
  - Mostra l'immagine sulla pagina.
  - Facoltativo: aggiungi un pulsante per recuperare una nuova immagine casuale.
  - Implementa una gestione di base degli errori nella chiamata API.

---

### 3. Recupero di un Fattarello su Gatti

- **Obiettivo:** Crea un componente che recupera un fatto casuale sui gatti al montaggio del componente.
- **Requisiti:**
  - Usa l'API gratuita `https://catfact.ninja/fact` per ottenere un fatto casuale.
  - Usa **useEffect** con array vuoto per far partire il fetch una sola volta (puoi anche simulare la chiamata con un JSON statico).
  - Usa **useState** per salvare e mostrare il fatto ottenuto.
  - Facoltativo: aggiungi un pulsante per recuperare un nuovo fatto.

---

### 4. Selettore di Colore del Gatto

- **Obiettivo:** Sviluppa un componente che permette all'utente di scegliere un colore di gatto preferito.
- **Requisiti:**
  - Usa **useState** per salvare il colore selezionato (tra una lista: es. "nero", "bianco", "rosso").
  - Mostra la lista dei colori come pulsanti selezionabili.
  - Usa **useEffect** per scrivere sulla console ogni volta che cambia il colore selezionato.

---

### 5. Form di Adozione Gatto

- **Obiettivo:** Costruisci un modulo per adottare un gatto.
- **Requisiti:**
  - Usa **useState** per gestire gli input del form, come nome e razza del gatto.
  - Mostra un'anteprima dei dati inseriti sotto il form in tempo reale.
  - Usa **useEffect** per validare o loggare i dati ogni volta che cambia un input.
  - Facoltativo: simula l’invio del form con un messaggio di alert.

---

### 6. Simulatore di Arrivo Gatti

- **Obiettivo:** Crea un componente che simula l’arrivo di gatti in un rifugio.
- **Requisiti:**
  - Usa **useState** per salvare il numero attuale di gatti.
  - Usa **useEffect** per impostare un timer (es. ogni 5 secondi) che aumenta casualmente il numero di gatti.
  - Implementa la pulizia del timer per evitare perdite di memoria.

---

### 7. Generatore di Umore del Gatto

- **Obiettivo:** Crea un componente che mostra un'immagine di gatto con un’etichetta di umore casuale, usando l’API CATAAS.
- **Requisiti:**
  - Usa **useState** per salvare il tag dell’umore corrente (es. "felice", "scontroso", "sonnolento", ecc.).
  - Usa un altro **useState** per salvare l’URL dell’immagine generata.
  - All'avvio, usa **useEffect** per scegliere casualmente un umore da un array e costruisci l’URL con questo formato: `https://cataas.com/cat/{umore}` (es. `https://cataas.com/cat/grumpy`).
  - Mostra l'immagine e l’etichetta dell’umore.
  - Facoltativo: aggiungi un pulsante per generare un nuovo umore casuale e aggiornare l’immagine.

---

### 8. Popup Modale del Gatto

- **Obiettivo:** Sviluppa un popup modale che mostra un fatto sui gatti quando si clicca un pulsante.
- **Requisiti:**
  - Usa **useState** per gestire la visibilità del modale.
  - Quando il modale si apre, usa **useEffect** per loggare un messaggio (es. "Modale del gatto aperto!") e gestire effetti collaterali (es. aggiornare il titolo del documento).
  - Includi un pulsante di chiusura per nascondere il modale.

---

### 9. Countdown di Gatti con Pulizia

- **Obiettivo:** Crea un timer che fa diminuire il numero di gatti ogni secondo.
- **Requisiti:**
  - Usa **useState** per inizializzare il numero di gatti e ridurlo nel tempo.
  - Usa **useEffect** per impostare un timer che decrementa il contatore ogni secondo.
  - Quando il conteggio arriva a 0 o il componente viene smontato, assicurati di pulire il timer.

---

### 10. Commutatore Tema del Rifugio Gatti

- **Obiettivo:** Crea un componente che alterna il tema (chiaro/scuro) della pagina del rifugio.
- **Requisiti:**
  - Usa **useState** per tenere traccia del tema attuale.
  - Includi un pulsante per passare da tema chiaro a scuro e viceversa.
  - Usa **useEffect** per aggiornare il titolo del documento o la classe del body in base al tema.
  - Assicurati che il cambio tema sia persistente per tutta la vita del componente.

---

Ogni esercizio dovrebbe essere implementato nel suo **componente** all’interno del repository.  
Considera di organizzarli in una cartella `components` o in pagine separate per mantenere la struttura ordinata.

### **Buon coding e goditi il tuo viaggio React a tema gatto!**
