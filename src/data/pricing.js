// Muokkaa tästä hinnasto
export const pricingCategories = [
  {
    id: 'ilmalampopumppu',
    title: 'Ilmalämpöpumppu',
    icon: 'Wind',
    note: 'Hinnat sisältävät asennuksen ja arvonlisäveron. Tarkka hinta pyydettäessä.',
    items: [
      {
        name: 'Perusmalli (2,5 kW)',
        price: 'alk. 1 200 €',
        description: 'Sopii 1–2 huoneen lämmitykseen',
      },
      {
        name: 'Standardimalli (3,5 kW)',
        price: 'alk. 1 600 €',
        description: 'Yleisin ratkaisu omakotitaloon',
      },
      {
        name: 'Tehomalli (5,0 kW)',
        price: 'alk. 2 100 €',
        description: 'Isot tilat ja viilennys',
      },
      {
        name: 'Multi-split (2–4 sisäyksikköä)',
        price: 'alk. 3 200 €',
        description: 'Useampi huone yhdellä ulkoyksiköllä',
      },
    ],
  },
  {
    id: 'vesi-ilmalampopumppu',
    title: 'Vesi-ilmalämpöpumppu',
    icon: 'Droplets',
    note: 'Korvaa öljy-, sähkö- tai kaukolämmön. Hinnat ilman mahdollisia tukia.',
    items: [
      {
        name: 'Pientalo (alle 150 m²)',
        price: 'alk. 5 900 €',
        description: 'Kompakti yksikkö pieneen taloon',
      },
      {
        name: 'Omakotitalo (150–250 m²)',
        price: 'alk. 7 500 €',
        description: 'Yleisin ratkaisu',
      },
      {
        name: 'Suuri talo / vapaa-ajan asunto',
        price: 'alk. 9 500 €',
        description: 'Isot tehot suuriin kohteisiin',
      },
    ],
  },
  {
    id: 'maalampopumppu',
    title: 'Maalämpöpumppu',
    icon: 'Mountain',
    note: 'Sisältää porauksen tai maakeräilyn. Energiatuki hakeminen mahdollista.',
    items: [
      {
        name: 'Porauskaivo, pientalo',
        price: 'alk. 12 900 €',
        description: 'Sisältää porauksen ja pumpun',
      },
      {
        name: 'Maakeräily, pientalo',
        price: 'alk. 10 900 €',
        description: 'Vaihtoehtona porauskaivo',
      },
      {
        name: 'Isompi kohde / rivitalo',
        price: 'Pyydä tarjous',
        description: 'Kartoitetaan tarpeet yhdessä',
      },
    ],
  },
  {
    id: 'huolto',
    title: 'LVI-huollot',
    icon: 'Wrench',
    note: 'Huoltosopimuksella edullisempi tuntihinta. Kysy lisää.',
    items: [
      {
        name: 'Tuntityö',
        price: '89 €/h + alv',
        description: 'Normaali työaika ma–pe 7–17',
      },
      {
        name: 'Päivystystuntityö',
        price: '140 €/h + alv',
        description: 'Ilta-, yö- ja viikonlopputyöt',
      },
      {
        name: 'Lämpöpumpun vuosihuolto',
        price: 'alk. 149 €',
        description: 'Kattava tarkistus ja puhdistus',
      },
      {
        name: 'Huoltosopimus (vuosimaksu)',
        price: 'alk. 99 €/v',
        description: 'Yrityksille ja taloyhtiöille',
      },
    ],
  },
]
