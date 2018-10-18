export default [
    { 
      question: "Geslacht ", 
      id: 0,
      options: [
        {label: "Vrouw", value: 2},
        {label: "Man", value: 1}
      ] 
    }, 
    {
      question: "Herkomst ouders",
      id: 1,
      options: [
        {label: "Beide ouders Nederlands", value: 1},
        {label: "Beide ouders niet Nederlands", value: 2},
        {label: "Een van de ouders Nederlands en de andere niet Nederlands", value: 2}
      ]
    },
    {
      question: "Type huishouden",
      id: 2,
      options: [
        {label: "Gehuwd paar met kinderen", value: 1},
        {label: "Eenouderhuishouden", value: 1},
        {label: "Eenpersoonshuishouden", value: 1},
        {label: "Gehuwd paar zonder kinderen", value: 1},
        {label: "Institutioneel huishouden", value: 1},
        {label: "Niet-gehuwd paar met kinderen", value: 1},
        {label: "Niet-gehuwd paar zonder kinderen", value: 1},
        {label: "Overig huishouden", value: 1},
        {label: "Onbekend huishouden", value: 1}
      ]
    },
    { question: "Gescheiden ouders", 
    id: 3,
    options: [
      {label: "Nee", value: 2},
      {label: "Ja", value: 2}
    ] 
  },
    {
      question: "Voortijdig schoolverlaten",
      id: 4,
      options: [
        {label: "Door in onderwijs", value: 1},
        {label: "Onbekend", value: 1},
        {label: "Niet van toepassing", value: 1},
        {label: "Uit onderwijs met startkwalificatie", value: 1},
        {label: "Voortijdig schoolverlaten", value: 1}
      ]
    },
    {
      question: "Soort onderwijs",
      id: 5,
      options: [
        {label: "Regulier onderwijs",  value: 1},
        {label: "Onbekend",  value: 1},
        {label: "Niet-regulier onderwijs", value: 1}
      ]
    },
    {
      question: "Soort woning",
      id: 6,
      options: [
        {label: "Eigen woning", value: 1},
        {label: "Huurwoning met huurtoeslag", value: 1},
        {label: "Huurwoning zonder huurtoeslag", value: 1},
        {label: "Onbekend", value: 1}
      ]
    },
    {
      question: "Werk vader",
      id: 7,
      options: [
        {label: "Werkend of overig actief", value: 2},
        {label: "Geen werk en niet actief", value: 2},
        {label: "Onbekend", value: 2}
      ]
    },
    {
      question: "Werk moeder",
      id: 8,
      options: [
        {label: "Werkend of overig actief", value: 1},
        {label: "Geen werk en niet actief", value: 1},
        {label: "Onbekend", value: 1}
      ]
    },
    { question: "Slachtoffer", 
    id: 9,
    options: [
      {label: "Nee", value: 1},
      {label: "Ja", value: 1}
    ] 
  },
    {
      question: "Traject vooraf",
      id: 10,
      options: [
        {label: "Geen jeugdhulp zonder verblijf gehad", value: 1},
        {label: "Jeugdhulp zonder verblijf gehad", value: 1}
      ]
    },
    {
      question: "Leeftijd moeder bij geboorte",
      id: 11,
      options: [
        {label: "Jonger dan 20 jaar", value: 1},
        {label: "20 tot 25 jaar", value: 1},
        {label: "25 tot 30 jaar", value: 1},
        {label: "30 tot 35 jaar", value: 1},
        {label: "35 tot 40 jaar", value: 1},
        {label: "40 jaar en ouder", value: 1}
      ]
    },
    {
      question: "Leeftijd vader bij geboorte",
      id: 12,
      options: [
        {label: "Jonger dan 25 jaar", value: 2},
        {label: "25 tot 30 jaar", value: 2},
        {label: "30 tot 35 jaar", value: 2},
        {label: "35 tot 40 jaar", value: 2},
        {label: "40 jaar en ouder", value: 2}
      ]
    },
    { question: "Vader of moeder verdacht", 
    id: 13,
    options: [
      {label: "Nee",  value: 2},
      {label: "Ja", value: 2}
    ] 
  },
    { question: "Kind verdacht", 
    id: 14,
    options: [
      {label: "Nee", value: 2},
      {label: "Ja", value: 2}
    ] 
  },
    { question: "Halt delict", 
    id: 15,
    options: [
      {label: "Nee", value: 2},
      {label: "Ja", value: 2}
    ] 
  },
    {
      question: "Verandering onderwijs niveau",
      id: 16,
      options: [
        {label: "Opschalen of gelijk blijvend", value: 1.1},
        {label: "Afschalen", value: 1.1},
        {label: "Onbekend", value: 1.1}
      ]
    },
    {
      question: "Leeftijdsverschil ouders",
      id: 17,
      options: [
      {label: "Minder dan 5 jaar", value: 2},
      {label: "Meer dan 5 jaar", value: 2}
    ]
    },
    {
      question: "Actueel onderwijs niveau",
      id: 18,
      options: [
        {label: "Basisonderwijs", value: 1},
        {label: "Onderwijs onbekend", value: 1},
        {label: "Vmbo b/k, mbo 1 of mbo 2", value: 1},
        {label: "Vmbo g/t, mbo 3 of mbo 4", value: 1},
        {label: "Havo onderbouw, Havo bovenbouw of Hbo bachelor", value: 1},
        {label: "Vwo of Wo bachelor", value: 1}
      ]
    },
    {
      question: "Hoogst behaalde diploma vader",
      id: 19,
      options: [
        {label: "Onderwijs onbekend", value: 1},
        {label: "Vmbo b/k, mbo 1 of mbo 2", value: 1},
        {label: "Vmbo g/t, mbo 3 of mbo 4", value: 1},
        {label: "Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master", value: 1},
        {label: "Vwo, Wo bachelor of Wo master", value: 1}
      ]
    },
    {
      question: "Hoogst behaalde diploma moeder",
      id: 20,
      options: [
        {label: "Onderwijs onbekend", value: 1},
        {label: "Vmbo b/k, mbo 1 of mbo 2", value: 1},
        {label: "Vmbo g/t, mbo 3 of mbo 4", value: 1},
        {label: "Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master", value: 1},
        {label: "Vwo, Wo bachelor of Wo master", value: 1}
      ]
    },
    { question: "Zwaar traject", 
    id: 21,
    options: [
      {label: "Nee", value: 2.5},
      {label: "Ja", value: 2.5}
    ] 
  }
  ];
