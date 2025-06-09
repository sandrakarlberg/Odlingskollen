# TESTING.md

## Teststrategi

Projektet har testats genom en kombination av manuell testning, integrationstester, kodgranskning och användartester i designfasen.

Syftet med testningen har varit att:

- Säkerställa att sensordata samlas in korrekt  
- Verifiera att backend sparar och returnerar data som förväntat  
- Säkerställa en bra användarupplevelse genom tidiga prototyper  

---

## Testtyper och metoder

### 1. Manuell testning

#### IoT (Arduino)

- Testat i verkliga miljöer med olika ljus-, fukt- och temperaturförhållanden  
- Verifierat att sensordata kan läsas stabilt under längre perioder  
- Felsökt anslutning till backend med hjälp av Serial Monitor  

#### Backend

- Testat API-endpoints med Postman  
- Verifierat databasoperationer (GET, POST) med olika payloads  
- Testat validering och felmeddelanden för felaktig data  

---

### 2. Integrationstester

- Verifierat hela kedjan:  
  `Sensor → Arduino → Backend → Databas → Frontend`  
- Säkerställt att ny data dyker upp i appen utan manuell uppdatering  
- Kontrollerat att varje användare endast ser sina egna växter  

---

### 3. Kodgranskning

- Använt pull requests i GitHub för att granska ny kod innan merge  
- Fokuserat på läsbarhet, struktur och potentiella buggar  
- Delat ansvar inom teamen (frontend, backend, IoT) för intern granskning  

---

## Kända begränsningar

- Inga automatiserade tester implementerade (ex. enhetstester i Jest eller vitest)  
  – På grund av projektets omfattning och tidspress prioriterades manuell och integrationsbaserad testning.

---

## Slutsats

Projektet har genomgått omfattande manuell testning i alla lager. Integrationstester har bekräftat att dataflödet fungerar från sensor till användargränssnitt. Användartester har hjälpt till att förbättra gränssnitt och funktionalitet. Trots avsaknad av automatiserade tester anser vi att systemet är robust och redo för fortsatt utveckling.
