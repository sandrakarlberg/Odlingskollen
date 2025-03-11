# Projektplan

## Introduktion och bakgrund
- **Kortfattad beskrivning av projektets syfte och mål**
- Projektets mål är att utveckla ett IoT-baserat sensorsystem som hjälper bönder och storskaliga växtodlare att optimera vården av sina grödor genom att mäta fuktighet, vattenmängd, solljus och näringsnivåer i jorden. 
Systemet kommunicerar med en databas som analyserar sensordata och ger rekommendationer till användaren via en mobil- och webbapplikation.

- **Beskrivning av problemet som lösningen ska adressera**
- Effektiv växtodling kräver noggrann bevattning och näringshantering, men många bönder saknar tillgång till detaljerad realtidsdata om markförhållandena. 
Manuell övervakning är tidskrävande och kan leda till ineffektiv resursanvändning, vilket påverkar skördens kvalitet och avkastning. Genom att automatisera insamling och analys av fukt-, ljus- och näringsnivåer kan detta system ge bönder insikter för att optimera vattenförbrukning och gödsling, minska onödigt svinn och förbättra skördeutfallet.

- **Eventuella intressenter och målgrupp för produkten**
- Primära användare: Bönder och storskaliga växtodlare inom jordbruk, växthusodling och kommersiell växtproduktion.
- Sekundära intressenter: Jordbruksorganisationer, rådgivare inom agronomi, lantbruksföretag och leverantörer av bevattningssystem.
- Projektteamet: Utvecklare inom frontend, backend och IoT.
Utbildare och mentorer: Ansvariga för att godkänna projektets genomförande.


## Val av teknologi och arkitektur
- **Val av teknologier för frontend, backend och IoT**
- Frontend: React Native, Visual Studio Code, Tailwind, CSS, JavaScript

- Backend: Node.js, Express.js, JavaScript, Visual Studio Code

- IoT: C++, Arduino mikrokontroller, Arduino IDE, Visual studio Code

- **Översikt över systemarkitekturen**

- **Beslut kring databas- och API-struktur**
 - SQL (MongoDB, om det går)

## Teamstruktur och ansvarsområden
- **Gruppens sammansättning – vilka ingår i varje team?**

-Frontend: Amanda Lindström och Sandra Karlberg

-Backend: Jonatan Jarl, Filip Wretner, Andreas, David, Gaston

-IoT: Jonathan Rubin, Dennis Holm, Seref Özbodur, Erik Eriksson, Jessica Sjösten

- **Beskrivning av huvudansvar och arbetsuppgifter för varje team**

-Frontend: Frontend-teamet ansvarar för användargränssnittet och mobilapplikationen. Data hämtas från API och visas upp i appen vilket ger användaren information om växternas status. Inloggningsfunktion, lägga till/ta bort växter, namnge växter.

-Backend: Backend-teamet ansvarar för databashantering, autentisering och API-struktur. Databasen ska kunna ta emot och lagra data från hårdvara och sedan skicka begärd data till frontend med hjälp av API. 

-IoT: IoT gruppen ansvarar för all hårdvara, samt dess programmering och testning. De ansvarar även för att, tillsammans med Backendgruppen, sammanlänka så att databas kan kommunicera med hårdvaran.

- **Hur teamen ska arbeta tillsammans och säkerställa kunskapsöverföring**

## Arbetsmetodik och verktyg
- **Val av agil metodik (Scrum, Kanban eller liknande)**

- **Vilka verktyg som ska användas för:**
  - Kodhantering (Git, GitHub/GitLab)
All kodhantering kommer ske med hjälp av git och github
  - Kommunikation (Slack, Discord, Teams etc.)
Alla kommunikation sker via Discord
  - Sprintplanering och uppgiftshantering (Jira, Trello, Notion etc.)
  - Hur teamet hanterar standups, sprintplanering, retros och demos
  - Plan för code reviews och pull requests

## Tidsplan och milstolpar
- **Övergripande tidsplan**
- **Första fungerande prototypen (MVP)**
- **Implementering av kärnfunktioner**
- **Testning & optimering**
- **Hur teamet hanterar förändringar i tidsplanen om något tar längre tid än förväntat**

## Riskanalys och Plan för Problemhantering
- **Vilka risker kan uppstå?**
- **Hur ska ni hantera problem som blockerar utvecklingen?**
- **Vilka steg tar ni om en teammedlem inte levererar enligt plan?**

## Leveranser och dokumentation
- **Slutproduktens minimikrav**
- **Vad varje team (frontend, backend, IoT) måste leverera**
Alla team måste leverera en fungerande och testad produkt, i enlighet med respektive teams ansvarsområde
- **Vilken dokumentation som ska finnas och vem som ansvarar för den**
- **Plan för att hålla README och API-dokumentation uppdaterad**

## Slutlig checklista för projektplanen
- **Dokumenteras som PROJEKTPLAN.md i Git-repot**
- **Ska innehålla alla ovanstående punkter innan inlämning vecka 12**
- **Projektplanen skickas till respektive utbildare senast den 21/3 klockan 15.00**
- **Godkännas av utbildare innan utvecklingsarbetet startar**
