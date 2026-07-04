# WpiR — Zugriffsschicht für Pipeline 3 und Pipeline 6

WpiR ist ein neutrales Zugriffsmodul.  
Es erzeugt keine eigenen Werte, sondern ruft bestehende Module auf
und leitet deren Ergebnisse weiter.  
WpiR ist vollständig kompatibel mit Pipeline 3 und Pipeline 6.

## Funktion

WpiR führt drei Aufgaben aus:

1. Zugriff entgegennehmen  
2. Zugriff klassifizieren  
3. Zugriff weiterreichen  

WpiR entscheidet nicht selbst und berechnet nichts.
Es ist ein reines Slave-Modul.

## Pipeline-Zuordnung

WpiR nutzt zwei feste Weiterleitungspunkte:

### Pipeline 3
Pipeline 3 ist die Hardware-Ableitungsebene:

- RAM → BLOCK / CACHE / FLOW / STATE
- CPU → LOAD / CYCLE / ENERGY / STATE
- GPU → FRONT / DEPTH / FLOW / CORE
- ROM → READ / WRITE / HOLD / BENCH
- PORT → MA³-Verbindung
- CALL → Ablage

WpiR ruft diese Module auf und leitet Ergebnisse in Pipeline 3 weiter.

### Pipeline 6
Pipeline 6 ist die erweiterte Ableitungsebene:

- externe Aufgaben
- PORT CONNECT Aufgaben
- MA³-Ableitungen
- BENCH-Weiterleitungen
- komplexe Aufgaben

WpiR ruft diese Aufgaben auf und leitet sie in Pipeline 6 weiter.

## Slave-Funktion

WpiR arbeitet als Slave:

WpiR = {
  call: <eingehender Zugriff>,
  pipe: <3 oder 6>,
  state: <weitergeleitet>
}

WpiR erzeugt keine eigenen Werte.
WpiR trifft keine eigenen Entscheidungen.
WpiR leitet nur weiter.

## Sicherheit

WpiR ist sicher, weil:

- keine eigenen Werte erzeugt werden
- keine eigenen Entscheidungen getroffen werden
- keine Rückführung möglich ist
- keine Rekonstruktion möglich ist
- keine Muster entstehen
- keine Zustände gespeichert werden

WpiR ist öffentlich nutzbar, aber nicht angreifbar.

## Ergebnis

WpiR ist stabil.
WpiR ist neutral.
WpiR ist regelkonform.
WpiR kann genutzt werden, aber nicht missbraucht werden.

WpiR leitet alle Zugriffe sauber in Pipeline 3 oder Pipeline 6 weiter.

