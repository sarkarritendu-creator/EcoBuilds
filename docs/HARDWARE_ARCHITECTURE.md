# Hardware architecture (deployment path)

Software-first prototype for the hackathon demo; physical sensing supports future pilot sites.

## Three tiers

1. **Field sensing** — occupancy (PIR / mmWave), temperature, optional CO₂ and lux; circuit current via CTs / Class 0.5S submeters  
2. **Floor gateways** — ESP32-class nodes for filtering and local hold  
3. **Building edge** — industrial PC or Raspberry Pi hosting MQTT, optional BACnet client, and the API service  

## Example bill of materials
- Presence: PIR and/or 24 GHz mmWave modules  
- Environment: temperature / humidity / CO₂ (e.g. SCD41-class)  
- Light: BH1750-class lux sensors  
- Energy: split-core CTs + commercial submeters  
- Actuation: smart relays for non-critical plug loads; HVAC via existing BMS/gateway interfaces  

Prefer retrofit on existing boards and plant — no full rebuild required for a pilot.
