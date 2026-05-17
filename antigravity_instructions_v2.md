# Antigravity Web Redesign: Lorenzo & Marzia Ministries (Storytelling Edition)

## 1. Obiettivo del Progetto e Direttiva Iniziale
L'obiettivo è trasformare il sito `https://lorenzoandmarziaministries.com/` in un'esperienza digitale premium da $10.000, focalizzata sullo **storytelling narrativo**.
**Azione Richiesta:** Come prima cosa, analizza l'URL fornito, estrai tutto il testo, i messaggi chiave e le immagini attuali. Il contenuto deve rimanere intatto, ma l'imballaggio visivo deve cambiare radicalmente per raccontare la storia di questi due ministri di Dio in modo immersivo.

## 2. Direttiva Operativa Assoluta (CRITICAL)
Da ora in poi, non fornire snippet di codice nella chat. Agisci direttamente sul file system per creare e aggiornare il codice. Usa la chat solo per domande di chiarimento.

## 3. Direzione Artistica: Dark Mode & Blue Accents
* **Sfondo Principale:** Sfondo scuro e profondo, non nero puro (es. `#0B0C10` o `#050511`) per dare un senso di eleganza cinematografica.
* **Colori d'Accento:** Tonalità di blu vibranti ma eleganti (es. Royal Blue `#1D4ED8` o Neon Sapphire `#2563EB`) usati con parsimonia per bottoni, bordi di separazione e hover states.
* **Testo principale:** Bianco panna o grigio chiaro (es. `#E0E6ED`) per garantire un'alta leggibilità senza affaticare gli occhi sullo sfondo scuro.

## 4. Tipografia "Editoriale"
* **Titoli (Headings):** Font Serif di classe (es. *Playfair Display* o *Lora*), per dare un tono solenne, spirituale e autorevole.
* **Corpo del Testo / Didascalie:** Font Sans-Serif minimale (es. *Inter* o *Geist*), spaziato adeguatamente (line-height 1.7) per facilitare la lettura della loro storia.

## 5. Disposizione delle Immagini e Storytelling (Il Cuore del Design)
Le immagini non devono essere semplici "quadrati sulla pagina", ma i veri driver della narrazione. **Implementa le seguenti logiche di layout:**

1.  **Immagini Parallasse a Schermo Intero (Chapter Breaks):**
    * Usa le immagini più belle e ad alta risoluzione come separatori di sezione a schermo intero (100vh).
    * Applicaci un leggero overlay scuro (gradient) in modo che il testo in sovrimpressione (le dichiarazioni chiave del loro ministero) sia perfettamente leggibile.
    * Effetto: `background-attachment: fixed` o Framer Motion scroll parallax.

2.  **Split-Screen Scrolling (La Storia Passo-Passo):**
    * Crea una sezione in cui il lato sinistro (o destro) mostra un'immagine fissa (sticky) della coppia o di un evento, mentre sul lato opposto il testo (la loro biografia, le loro missioni) scorre verticalmente.
    * Man mano che l'utente legge i vari paragrafi, l'immagine sticky cambia con una transizione in dissolvenza (cross-fade).

3.  **Griglia Masonry Asimmetrica per la Galleria/Didascalie:**
    * Per le foto secondarie, non usare una griglia rigida. Usa un layout "Masonry" (stile Pinterest ma più pulito) dove immagini di proporzioni diverse si incastrano in modo naturale.
    * **Focus sulle didascalie:** Le didascalie non devono essere nascoste! Posizionale sotto ogni immagine con un font in corsivo molto elegante, oppure mostrale al passaggio del mouse (hover) con un overlay sfocato (backdrop-blur) e accenti blu.

## 6. Stack Tecnologico & Animazioni (Framer Motion)
* **Stack:** Next.js (App Router), Tailwind CSS, Framer Motion.
* **Motion Rules:**
    * *Fade-Up Reveal:* Nessun blocco di testo deve apparire di scatto. Tutti gli elementi testuali devono entrare dolcemente dal basso man mano che si scrolla.
    * *Image Reveal:* Usa l'effetto "Reveal with mask" o un leggerissimo zoom-out dell'immagine all'interno del suo contenitore per dare un effetto cinematografico.

## 7. Piano di Esecuzione
1.  **Fase 1 (Estrazione):** Visita l'URL fornito e mappa tutti i testi e le immagini.
2.  **Fase 2 (Setup):** Inizializza Next.js con Tailwind e configura il tema scuro (variabili CSS) e la palette di blu.
3.  **Fase 3 (Layout Strutturale):** Costruisci lo scaffolding delle sezioni (Hero, Sticky Timeline per la storia, Masonry Gallery).
4.  **Fase 4 (Integrazione & Motion):** Applica i testi e le immagini estratti usando i componenti Framer Motion per lo scrolling e le transizioni.