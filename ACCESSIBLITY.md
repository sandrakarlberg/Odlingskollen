# Accessibility.md

## Tillgänglighet i Odlingskollen

Vi har strävat efter att göra **Odlingskollen** tillgänglig och användbar för en så bred målgrupp som möjligt, inklusive personer med olika funktionsvariationer. Denna fil beskriver tillgänglighetsarbetet i samtliga delar av systemet – **frontend**, **backend** och **IoT** – och hur de samverkar för att skapa en inkluderande användarupplevelse.

---

## Frontend – Mobilgränssnitt

Vi har fokuserat på att bygga ett användarvänligt gränssnitt som är tillgängligt för så många som möjligt.

### Funktioner

- **Responsivt gränssnitt**  
  Anpassar sig till olika skärmstorlekar och enheter via React Native.

- **Stöd för skärmläsare**  
  Vi använder `accessibilityLabel` och `accessibilityRole` i gränssnittskomponenter.

- **Färgkontraster**  
  Vi har valt färgpaletter med god kontrast för att hjälpa personer med nedsatt syn.

- **Touchmål och ikoner**  
  Stora, tydliga touchytor med text + ikon där det är möjligt för kognitiv tydlighet.

---

## Backend – Datatillgänglighet och API-design

Backendens struktur är också viktig för tillgänglighet, särskilt för att säkerställa att frontend får rätt och begriplig information.

### Funktioner

- **Meningsfulla felmeddelanden**  
  API-svar innehåller förklarande felmeddelanden istället för generella koder som `500`.

- **Stabil sessionhantering**  
  Sessioner hanteras med tolerans för längre pauser, vilket hjälper användare med långsammare interaktion.

- **Tillgängliga dataformat**  
  API:er returnerar konsekventa JSON-strukturer för enkel parsing och presentation i användargränssnittet.

---

## IoT – Tillgänglighet i fält och miljö

Sensorlösningen påverkar användarens tillförlitlighet och insikter, särskilt i miljöer där fysisk åtkomst är begränsad.

### Funktioner

- **Noggranna mätningar i olika miljöer**  
  Sensorerna har testats i varierande miljöer för att minimera feltolkning av data (t.ex. torr jord i skugga).

- **Stabil datainsamling**  
  Pålitlig kommunikation mellan sensorer och backend säkerställer att appen visar rätt data.

- **Notifiering av felvärden**  
  Fel på sensorer (t.ex. onormala värden) hanteras och signaleras till användaren via appen.

- **Fysisk placering & användarvänlighet**  
  Sensorerna är designade för att enkelt kunna placeras utan teknisk kunskap.

---

## Testning av tillgänglighet

- **Frontend**
  - Figma-prototyp testad med användare
  - Expo Accessibility Tools användes

- **Backend**
  - Testfall för felhantering och användarfeedback vid API-anrop

- **IoT**
  - Sensorer testade i både torra och fuktiga miljöer
  - Manuell övervakning av dataprecision
  - Integrationstest mot backend

---

##  Planerade förbättringar

- Alternativa textbeskrivningar för grafer och bilder
- Röststyrning i framtida versioner
- Bättre keyboard-navigering vid eventuell webbklient
- Komprimera sensornera så dem inte tar så mycket plats
- Testning med användare med olika funktionsvariationer

---

##  Kontakt

Vi välkomnar all feedback kring tillgänglighet.  
Skicka dina synpunkter via GitHub Issues eller kontakta projektgruppen direkt.
