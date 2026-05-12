// Muokkaa tästä palvelut
export const services = [
  {
    id: 'vesi-ilmalampopumppu',
    title: 'Vesi-ilmalämpöpumppu',
    shortTitle: 'Vesi-ilmalämpö',
    slug: '/palvelut/vesi-ilmalampopumppu',
    icon: 'Droplets',
    color: 'blue',
    tagline: 'Tehokkain ratkaisu lämmitykseen',
    description:
      'Vesi-ilmalämpöpumppu on nykyaikainen ja energiatehokas ratkaisu kodin lämmitykseen. Se ottaa lämpöenergian ulkoilmasta ja siirtää sen vesikiertoiseen lämmitysjärjestelmään.',
    benefits: [
      'Säästö jopa 60% lämmityskuluissa',
      'Toimii jopa -25°C pakkasella',
      'Sopii vanhaan vesikiertoiseen järjestelmään',
      'Nopeasti asennettava',
    ],
    priceFrom: '5 900',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
  },
  {
    id: 'maalampopumppu',
    title: 'Maalämpöpumppu',
    shortTitle: 'Maalämpö',
    slug: '/palvelut/maalampopumppu',
    icon: 'Mountain',
    color: 'green',
    tagline: 'Paras hyötysuhde, ympärivuotinen teho',
    description:
      'Maalämpöpumppu hyödyntää maahan tai veteen varastoitunutta aurinkoenergiaa. Se on pitkäikäisin ja energiatehokkain lämmitysratkaisu omakotitalolle.',
    benefits: [
      'Hyötysuhde jopa 400%',
      'Toimii ympäri vuoden',
      'Korkea jälleenmyyntiarvo',
      'Voidaan käyttää myös viilennykseen',
    ],
    priceFrom: '12 900',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop',
  },
  {
    id: 'ilmalampopumppu',
    title: 'Ilmalämpöpumppu',
    shortTitle: 'Ilmalämpö',
    slug: '/palvelut/ilmalampopumppu',
    icon: 'Wind',
    color: 'sky',
    tagline: 'Edullinen ja nopea asennus',
    description:
      'Ilmalämpöpumppu on kustannustehokkain tapa lisälämmitykseen ja viilennykseen. Asennus käy nopeasti yhdessä päivässä.',
    benefits: [
      'Asennus yhdessä päivässä',
      'Toimii myös jäähdyttimenä',
      'Edullisin vaihtoehto',
      'Tukikelpoinen hanke',
    ],
    priceFrom: '1 200',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop',
  },
  {
    id: 'lvi-huollot',
    title: 'LVI-huollot',
    shortTitle: 'Huolto',
    slug: '/palvelut/lvi-huollot',
    icon: 'Wrench',
    color: 'orange',
    tagline: 'Ammattitaitoinen huoltopalvelu',
    description:
      'Säännöllinen huolto pidentää laitteiden käyttöikää ja pitää energiatehokkuuden huipussaan. Teemme huoltosopimukset ja kertaluonteiset huollot.',
    benefits: [
      'Huoltosopimukset yrityksille',
      'Nopea vasteaika',
      'Kaikki LVI-laitteet',
      'Läpinäkyvä hinnoittelu',
    ],
    priceFrom: '89',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop',
  },
  {
    id: 'putkiremontit',
    title: 'Putkiremontit',
    shortTitle: 'Putkiremontti',
    slug: '/palvelut/putkiremontit',
    icon: 'PipelineIcon',
    color: 'slate',
    tagline: 'Laadukas putkiremontti kerralla oikein',
    description:
      'Toteutamme putkiremontit omakoti- ja rivitaloihin sekä kerrostaloihin. Suunnittelusta toteutukseen – ammattitaidolla ja aikataulussa.',
    benefits: [
      'Kokonaistoteutus avaimet käteen',
      'Minimaaliset asumishaitat',
      'Kirjallinen takuu',
      'Kilpailukykyinen hinta',
    ],
    priceFrom: 'Pyydä tarjous',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596d3?w=800&auto=format&fit=crop',
  },
  {
    id: 'lvi-urakointi',
    title: 'LVI-urakointi',
    shortTitle: 'Urakointi',
    slug: '/palvelut/lvi-urakointi',
    icon: 'Building2',
    color: 'brand',
    tagline: 'Uudisrakentaminen ja isot projektit',
    description:
      'Otamme vastaan LVI-urakat uudisrakentamiseen, saneerauksiin ja teollisuuteen. Meillä on kaikki tarvittavat pätevyydet ja referenssit.',
    benefits: [
      'Uudisrakentaminen',
      'Teollisuuskohteet',
      'Kaikki tarvittavat pätevyydet',
      'Joustavat toimitusajat',
    ],
    priceFrom: 'Pyydä tarjous',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop',
  },
]

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === `/palvelut/${slug}`)
