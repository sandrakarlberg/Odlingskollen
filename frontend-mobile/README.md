# App Arts – Frontend

## Projektbeskrivning

Detta är den mobila frontend-delen av **App Arts** projekt utvecklat för Chas Challenge. Applikationen är byggd med React Native och syftar till att erbjuda en smidig användarupplevelse för mobilanvändare.

## Teknikstack

- **React Native** – för mobilapplikationsutveckling  
- **Expo** – för snabb utveckling och testning  
- **React Navigation** – för hantering av navigering  
- **Fetch** – för API-anrop  
- **JavaScript (ES6+)** – Logik och funktionalitet 

## Mappstruktur

```text
frontend-mobile/
├── assets/         # Bilder och ikoner
├── components/     # Återanvändbara UI-komponenter
├── context/        # Hantering av användare
├── navigation/     # Navigeringslogik
├── screens/        # Applikationens olika skärmar
├── services/       # API-anrop och andra tjänster
├── theme/          # Färgtema för applikationen
├── App.js          # Applikationens startpunkt
├── app.json        # Konfigurationsfil för Expo
├── index.js        # Startpunkt för applikationen
└── package.json    # Projektets beroenden och scripts
```

## Komma igång

### 1. Klona repot

```bash
git clone https://github.com/RubinAtChas/App-Arts-Chas-Challenge.git
cd frontend-mobile
```

### 2. Installera beroenden

```bash
npm install
```

### 3. Starta utvecklingsservern

```bash
npx expo start
```

Detta startar Expo, och du kan sedan testa appen i en webbläsare, en simulator/emulator eller en fysisk enhet via Expo Go. För att testa på en fysisk enhet laddar du ner appen Expo Go och skannar QR-koden.

## Funktioner

- Logga in och registrera användare
- Utforska och visa växter
- Lägg till och ta bort växter
- Visa detaljerad växtinformation
- Få indikationer på växternas status

## Team

- Sandra Karlberg: API-anrop, kontext, Dashboard, Plant Details, layout
- Amanda Lindström: Inloggningssidan, Plants-sidan, Tidslinje, layout
