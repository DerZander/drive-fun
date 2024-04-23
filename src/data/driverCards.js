import {AutobahnZeichen, RastZeichen, Verkehrszeichen} from "./verkehrszeichen.js";

export const DriverCardTypes = {
    Normal: 'normal',
    Autobahn: 'autobahn',
    Rast: "rast",
    Special: 'special',
    All: 'all'
}

export const driverCards = [
    {title: 'Autobahn', text: 'Fahre auf die nächste Autobahn', weight: 1, image: AutobahnZeichen.Autobahn, type: DriverCardTypes.Normal, next: DriverCardTypes.Autobahn},
    {title: 'Autobahn Ausfahrt', text: 'Fahre die nächste raus!', weight: 1, image: AutobahnZeichen.AutobahnAusfahrt, type: DriverCardTypes.Autobahn, next: DriverCardTypes.Normal},
]

export const autobahnDeck = [
    {title: 'Autobahn Ausfahrt', text: 'Fahre die nächste raus!', weight: 0.5, image: AutobahnZeichen.AutobahnStop, type: DriverCardTypes.Normal},
    {title: 'Nächste Autobahn', text: 'Fahre auf die nächste Autobahn', weight: 1, image: AutobahnZeichen.AutobahnNext, type: DriverCardTypes.Autobahn},
    {title: 'Fahr weiter', text: 'Fahre weiter, bis die nächste Karte kommt', weight: 2, image: Verkehrszeichen.Geradeaus, type: DriverCardTypes.Autobahn},
    {title: 'Fahr 2km', text: 'Fahre noch 2km', weight: 3, image: AutobahnZeichen.Autobahn2km, type: DriverCardTypes.Autobahn},
]

export const specialDeck = [
    {title: 'Macht eine Pause', text: 'Fahre zum nächsten Rastplatz o. zur nächsten Rastmöglichkeit', weight: 0.5, image: RastZeichen.Rast, type: DriverCardTypes.Rast},
]

export const rastDeck = [
    {title: 'Kaffee Pause', text: 'Macht eine Kaffeepause', weight: 1, image: Verkehrszeichen.Cafepause, type: DriverCardTypes.Rast},
    {title: 'Kirche', text: 'Besuche die nächste Kirche', weight: 1, image: Verkehrszeichen.Kirche, type: DriverCardTypes.Rast},
    {title: 'Mittagspause', text: 'Macht eine Mittagspause', weight: 1, image: Verkehrszeichen.Mittagspause, type: DriverCardTypes.Rast},
    {title: 'Park and Walk', text: 'Gehe für min. 5 min Spazieren', weight: 1, image: Verkehrszeichen.ParkWalk},
    {title: 'Macht eine Pause', text: 'Fahre zum nächsten Rastplatz o. zur nächsten Rastmöglichkeit', weight: 1, image: RastZeichen.RastEnde, type: DriverCardTypes.Normal},
]

export const normalDeck = [
    {title: 'Fahr weiter', text: 'Fahre weiter, bis die nächste Karte kommt', weight: 5, image: Verkehrszeichen.Geradeaus, type: DriverCardTypes.Normal},
    {title: 'Nach Rechts', text: 'Biege an der nächsten Kreuzung, wenn möglich, rechts ab!', weight: 4, image: Verkehrszeichen.Rechts, type: DriverCardTypes.Normal},
    {title: 'Nach Links', text: 'Biege an der nächsten Kreuzung, wenn möglich, links ab!', weight: 4, image: Verkehrszeichen.Links, type: DriverCardTypes.Normal},
    {title: 'Kreisel die 1.', text: 'Fahre beim nächsten Kreisel die 1. Ausfahrt raus', weight: 3, image: Verkehrszeichen.Kreisel1, type: DriverCardTypes.Normal},
    {title: 'Kreisel die 2.', text: 'Fahre beim nächsten Kreisel die 2. Ausfahrt raus', weight: 3, image: Verkehrszeichen.Kreisel2, type: DriverCardTypes.Normal},
    {title: 'Kreisel die 3.', text: 'Fahre beim nächsten Kreisel die 3. Ausfahrt raus', weight: 3, image: Verkehrszeichen.Kreisel3, type: DriverCardTypes.Normal},
    {title: 'Spin me!!!', text: 'Am nächsten Kreisel eine komplette Runde fahren', weight: 2, image: Verkehrszeichen.Kreisel, type: DriverCardTypes.Normal},
    {title: 'Dreh dich', text: 'Mach an geeigneter Stelle einen U-Turn', weight: 2, image: Verkehrszeichen.UTurn, type: DriverCardTypes.Normal},
    {title: 'Auf die Autobahn', text: 'Fahre auf die nächste Autobahn', weight: 2, image: AutobahnZeichen.Autobahn, type: DriverCardTypes.Autobahn},
]


