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