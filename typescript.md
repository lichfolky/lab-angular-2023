## Planning

https://www.figma.com/file/RwZl4Xxw2NVF9SPmnAq0yp/Angular-planning?node-id=0%3A1&t=Ok1rVVJBYRuB2hoF-1

Figma for devs:
https://www.figma.com/best-practices/tips-on-developer-handoff/an-overview-of-figma-for-developers/


## Typescript

Possiamo fare type checking con vscode in JavaScript inserendo `// @ts-check` nella prima riga del nostro programma.

### Compililare Typescript

Convertiamo ts in js usando 
https://github.com/tsconfig/bases

**tsconfig-json** 
File con le indicazioni per il compilatore

Qui trovi varie versioni:
https://github.com/tsconfig/bases

Qui la documentazione:
https://www.typescriptlang.org/tsconfig

```
npm init -y
npm install typescript
npx tsc <nomefile.ts>
```

Un alternativa a `tsc` è [babeljs]( https://babeljs.io/).

### Bundlers
Per gestire la compilazione di vari formati (js -> ts, scss -> css), i moduli node e i file compilati usiamo script node chiamati **bundlers**.
Hanno molte funzionalità in più, tipo il minify di js e css. Possiamo installare moduli aggiuntivi che verranno gestiti dal bundler, come [postcss](https://postcss.org/) (con [autoprefixer](https://github.com/postcss/autoprefixer)).

Alcuni tra i più famosi:
- [Vite](https://vitejs.dev/)
- [Parcel](https://parceljs.org/)
- [Webpack](https://webpack.js.org/)

## Esercitazione typescript
https://github.com/lichfolky/ts-ducks

Tipi primitivi JavaScript: `boolean`, `bigint`, `null`, `number`, `string`, `symbol`, and `undefined`.  
Nuovi di typescript:`any` e `void`.

Dichiarazioni di tipo in varibili, funzioni

Funzione `map` (che prende come input una funzione da applicare su ogni elemento di una collezione) come funzione di secondo livello  
`Array<Papero> -> Array<string>`

La differenza tra `foreach` e `map`, è che `map` restituisce un array ma è il concetto di cambio di tipo della collezione la cosa fondamentale.

**Duck typing**
Se è fatto come una papera (proprietà), e si comporta come una papera (metodi) allora è una papera.

Interfacce, Classi che le implementano, costruttori.

Composizione con spread oggetto

Creare i propri tipi
`type mioTipo = () => string;`

Unione per comporre tipi `type verso = "Bao" | "Miao" | "Qua";`  

parametri funzione opzionali con `?`
parametri oggetto opzionali con `| undefined`

`typeof` (function, undefined, number)
e
`Array.isArray(a)`

## Risorse extra

https://github.com/emmabostian/developer-portfolios

Libreria introduttiva al modno animazione web:
https://p5js.org/

Per la prossima volta:
https://it.wikipedia.org/wiki/Famiglia_Duck

Cheatsheets strafighe di ts:  
https://www.typescriptlang.org/cheatsheets

Metaframework Next.js:
https://nextjs.org/
