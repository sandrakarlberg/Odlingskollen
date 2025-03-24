# Component List – Smart Crop Monitoring System

This document lists all components used in the prototype of our smart crop monitoring system.
The system monitors soil nutrients (NPK), temperature, humidity, soil moisture, and transmits data for further analysis.

---

## Microcontroller & Core Logic

| Component                         | Qty | Description |
|-----------------------------------|:---:|-------------|
| Arduino UNO R4 WiFi               | 1   | Main microcontroller – reads sensor data, handles communication via WiFi, and runs all system logic |
| RS485 to TTL Converter Module     | 1   | Allows communication between the Arduino and the NPK sensor using Modbus protocol |

---

## Sensors

| Component                                | Qty | Description |
|------------------------------------------|:---:|-------------|
| Soil NPK Sensor (RS485, budget version)  | 1   | Prototype sensor measuring Nitrogen (N), Phosphorus (P), and Potassium (K) levels in soil |
| BME280 Sensor (GY-BME280 breakout module)| 1   | Measures ambient temperature, humidity, and atmospheric pressure (5V-compatible version recommended) |
| Capacitive Soil Moisture Sensor          | 1   | Measures soil moisture levels without corrosion issues – preferred over resistive types |

---

## Power Supply

| Component                                 | Qty | Description |
|-------------------------------------------|:---:|-------------|
| 12V Battery Holder with Leads (8x AA)     | 1   | Powers the full system with standard AA batteries for easy field testing |
| AA Batteries (1.5V)                       | 8   | Supplies 12V to the system via battery holder |
| DC–DC Buck Converter (12V to 5V)          | 1   | Steps down voltage from battery pack to safely power the Arduino |
| On/Off Power Switch (2-pin)               | 1   | Simple toggle switch to prevent battery drain when the system is not in use |

---

## Display (Optional)

| Component                        | Qty | Description |
|----------------------------------|:---:|-------------|
| OLED Display (128x64, I2C)       | 1   | Displays sensor readings in real time directly on the unit |

---

## Wiring & Assembly

| Component                                         | Qty | Description |
|---------------------------------------------------|:---:|-------------|
| Hook-up Wire (22 AWG solid core, red/black/green) | 1 roll per color | For clean and reliable connections; color-coded for power, ground, and signal |
| Solder Wire (Lead-free preferred)                 | 1 spool | For soldering components onto perfboard |
| Plastic Enclosure Box (medium)                    | 1   | Protects the electronics for outdoor use |
| 2.54mm Perfboard (prototype board)                | 1   | For mounting and soldering components |

---

## Optional Extras / Nice-to-Haves

| Component                          | Qty | Description |
|-----------------------------------|:---:|-------------|
| Heat Shrink Tubing or Electrical Tape | - | For insulating exposed connections |
| Mounting Screws, Tape, or Glue    | - | For securing components inside the enclosure |
| Terminal Blocks or Screw Terminals | - | For modular wiring and easy replacements (optional) |

---
