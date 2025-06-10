# CHANGELOG

Denna changelog dokumenterar viktiga händelser och tekniska beslut i utvecklingen av IoT-delen av projektet **Odlingskollen**.  
Projektstart: 2025-03-31

---

## [0.3.0] – 2025-06-02
### Added
- Fullständig integration mellan IoT och backend via JSON-struktur
- Stabil överföring av sensorvärden till backend (jordfuktighet, temperatur, regn, ljus)
- Verifierad kommunikationstest mellan sensorer och server

---

## [0.2.0] – 2025-05-19
### Added
- Ny sensoruppsättning vald och implementerad samma dag:
  - Soil moisture sensor module
  - Rain sensor module
  - Temperaturgivare (Electrokit)
  - Ljussensor
- Färdigställd och kalibrerad kod för samtliga nya sensorer

### Changed
- Skrotade NPK-sensor efter 2 veckors felsökning
- Omarbetade sensorhantering för att passa ny uppsättning

---

## [0.1.1] – 2025-05-12
### Fixed
- Temperaturgivare (Electrokit) fungerade vid test – verifierad mätdata
- Småjusteringar i signalhantering

### Removed
- Beslut att ta bort stöd för NPK-sensor (modell: Aliexpress) pga svårigheter att få datautläsning att fungera

---

## [0.1.0] – 2025-04-07
### Added
- Val av initiala sensorer:
  - [NPK-sensor – Aliexpress](https://www.aliexpress.com/item/1005005684119688.html)
  - [Temperatursensor – Electrokit](https://www.electrokit.com/temperatursensor-analogdigital)
- Beställning av hårdvara (försenad leverans med ~3 veckor)

---

## [0.0.1] – 2025-03-31
### Added
- Projektstart och idéval: Jordnäringsövervakning med sensorer
- Första tekniska planering inom IoT-teamet
****
