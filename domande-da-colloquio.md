# Domande da colloquio

## 1: Differenza tra for of for in
`for in` itera tra le chiavi di un oggetto (gli indici degli elementi se è un array), mentre `for of` itera tra gli elementi di una collezione.

## 2: Cos'è una Map (la struttura dati)?
E' una collezione di coppie (chiave, valore), ha definite funzioni di set e get e serve per accedere ad un elemento data una chiave.

## 3: A cosa serve il `this`?
Serve a accedere ad una proprietà di un oggetto dall'interno sè stesso.
Solitamente si usa all'interno di funzioni per richiamare proprietà dell'oggetto.

## 4: Differenza tra una funzione anonima (una function senza nome) e una funzione arrow
La funzione arrow non può accedere a this quando viene usata come metodo in un oggetto, può accedere soltanto allo scope globale e al suo.

## 5: Differenza tra scope locale e globale
Lo scope è il contesto di esecuzione in cui i valori e le espressioni sono visibili e accessibili.

## 6: Le stringhe possono essere considerate degli Array?
A parte per tipo, si comportano nello stesso modo: possiamo accedere agli elementi indicizzati ed è presente la proprietà length. Però la stringa può contentere soltanto caratteri e non dati qualsiasi.

## 7: Cosa è una Closure

Un meccanismo per rendere disponibili funzioni o variabili con scope locale ad uno scope globale che le richiama. (e poi guarda esempio)

## 8: Cosa è il currying
E' un metodo per scomporre funzioni. Si definisce un generatore di funzioni che restituisce funzioni dove il primo argomento è già definito, alla funzione restituita si inserirà ad esempio il secondo argomento per ottenere il risultato finale.

