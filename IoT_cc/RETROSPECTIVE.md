# RETROSPECTIVE.md

## Projekt: Odlingskollen – Chas Challenge 2025

Det här dokumentet sammanfattar våra reflektioner kring arbetsprocessen, samarbetet och vad vi har lärt oss under projektets gång.

---

### Vad gick bra?

- Samarbetet mellan frontend, backend och IoT fungerade över förväntan trots olika fokusområden.
- Vi lyckades skapa ett fungerande system från sensor till mobilapp inom utsatt tid.
- Testningen i verkliga miljöer gav bra insikter och bidrog till högre kvalitet.
- Designbesluten i mobilappen, t.ex. färgval och layout, föll väl ut.

---

### Vad var utmanande?

- Största utmaningen var närvaron inom subgruppen.
- Möjligheten att dela upp arbetet var svår, då det bara fanns 1 hårdvara.
- Koordinering mellan tre team med olika deadlines och arbetsmetoder krävde extra kommunikation, men gick ändå bra.
- Vår NPK-sensor visade sig vara svår att kommunicera med, vilket ledde till att vi fick överge den funktionaliteten. Vi fick inte korrekt datasheet, vilket gjorde det mycket utmanande att skriva fungerande mjukvara.
- Vi underskattade hur mycket tid som krävs för felsökning av hårdvara.
- Det var svårt att få till ett enhetligt versionsflöde när frontend, backend och IoT utvecklades parallellt, och vi i IoT-gruppen hamnade efter ganska tidigt i projektet.

---

### Vad lärde vi oss?

- Att kontinuerlig kommunikation och tydlig rollfördelning är avgörande i tvärfunktionella projekt.
- Att göra en fungerande produkt kräver kompromisser – det är bättre att ha en stabil MVP än att försöka få med allt från början.
- Vi fick bättre förståelse för hur REST-API:er, databaser och realtidsdata fungerar tillsammans.
- Vi lärde oss mycket om sensorhantering, signalstörningar och praktisk användning av mikrokontrollers.

---

### Vad skulle vi gjort annorlunda?

- Prioriterat integrationstester tidigare i processen.
- Planerat för alternativa komponenter om hårdvara strular.
- Fokuserat mer på tillgänglighetsanpassning från början av designfasen.
- Hittat arbetssätt som skulle gjort det enklare att dela upp arbetet inom subgruppen.

---

### Röster från teamet

> *"Jag lärde mig mer om API:er på två veckor än jag gjort på hela terminen."*  
> *"Det var riktigt kul att se sensordata dyka upp i mobilen i realtid!"*  
> *"Att samarbeta mellan team var nytt – men det gav mig en tydligare bild av hur riktig utveckling går till."*
