// https://www.bast.de/DE/Verkehrstechnik/Fachthemen/v1-verkehrszeichen/vz-download.html?nn=1817946

const ZeichenTypen = {
    "Gefahrzeichen": "100-199 Gefahrenzeichen",
    "Vorschriftzeichen": "200-299 Vorschriftszeichen",
    "Richtzeichen": "300-499 Richtzeichen",
    "Zusatzzeichen": "1000-1099 Zusatzzeichen"
}

export const AutobahnZeichen = {
    Autobahn: ZeichenTypen.Richtzeichen + "/330.1.jpg",
    AutobahnStop: ZeichenTypen.Richtzeichen + "/330.2.jpg",
    AutobahnNext: ZeichenTypen.Richtzeichen + "/333.jpg",
    Autobahn2km: ZeichenTypen.Zusatzzeichen + "/1001-33.jpg",
}

export const RastZeichen = {
    Rast: ZeichenTypen.Richtzeichen + "/314.jpg",
    RastEnde: ZeichenTypen.Richtzeichen + "/314.2.jpg",
}


export const SpecialZeichen = {
    Stop: ZeichenTypen.Vorschriftzeichen + "/206.jpg",
    Verbot: ZeichenTypen.Vorschriftzeichen + "/267.jpg",
}

export const Verkehrszeichen = {
    Kreisel: ZeichenTypen.Vorschriftzeichen + "/215.jpg",
    Geradeaus: ZeichenTypen.Vorschriftzeichen + "/209-30.jpg",
    Links: ZeichenTypen.Vorschriftzeichen + "/209-10.jpg",
    Rechts: ZeichenTypen.Vorschriftzeichen + "/209.jpg",
    UTurn: ZeichenTypen.Vorschriftzeichen + "/209-40.jpg",

    Mittagspause: ZeichenTypen.Richtzeichen + "/365-56.jpg",
    Cafepause: ZeichenTypen.Richtzeichen + "/365-57.jpg",
    Kirche: ZeichenTypen.Richtzeichen + "/365-59.jpg",

    Kreisel1: ZeichenTypen.Zusatzzeichen + "/1000-23.jpg",
    Kreisel2: ZeichenTypen.Zusatzzeichen + "/1000-34.jpg",
    Kreisel3: ZeichenTypen.Zusatzzeichen + "/1000-13.jpg",

    ParkWalk: ZeichenTypen.Richtzeichen + "/317.jpg",
    Normal: ZeichenTypen.Vorschriftzeichen + "/290.2.jpg",
}


export const ZonenZeichen = {
    Rast: ZeichenTypen.Richtzeichen + "/314.1.jpg",
    Autobahn: ZeichenTypen.Richtzeichen + "/331.1.jpg",
    Normal: ZeichenTypen.Vorschriftzeichen + "/282.jpg",
}