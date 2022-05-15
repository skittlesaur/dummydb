const data = [
    "ADB Unit of Account",
    "Afghani",
    "Algerian Dinar",
    "Andorran Peseta",
    "Argentine Peso",
    "Armenian Dram",
    "Aruban Florin",
    "Austral",
    "Australian Dollar",
    "Azerbaijan Manat",
    "Azerbaijanian Manat",
    "Bahamian Dollar",
    "Bahraini Dinar",
    "Baht",
    "Balboa",
    "Barbados Dollar",
    "Belarusian Ruble",
    "Belgian Franc",
    "Belize Dollar",
    "Bermudian Dollar",
    "Bolivar",
    "Bolivar Fuerte",
    "Boliviano",
    "Bolívar",
    "Bolívar Soberano",
    "Bond Markets Unit European Composite Unit (EURCO)",
    "Bond Markets Unit European Monetary Unit (E.M.U.-6)",
    "Bond Markets Unit European Unit of Account 17 (E.U.A.-17)",
    "Bond Markets Unit European Unit of Account 9 (E.U.A.-9)",
    "Brazilian Real",
    "Brunei Dollar",
    "Bulgarian Lev",
    "Burundi Franc",
    "CFA Franc BCEAO",
    "CFA Franc BEAC",
    "CFP Franc",
    "Cabo Verde Escudo",
    "Canadian Dollar",
    "Cayman Islands Dollar",
    "Cedi",
    "Chilean Peso",
    "Codes specifically reserved for testing purposes",
    "Colombian Peso",
    "Comorian Franc",
    "Congolese Franc",
    "Convertible Franc",
    "Convertible Mark",
    "Cordoba",
    "Cordoba Oro",
    "Costa Rican Colon",
    "Croatian Dinar",
    "Croatian Kuna",
    "Cruzado",
    "Cruzeiro",
    "Cruzeiro Real",
    "Cuban Peso",
    "Cyprus Pound",
    "Czech Koruna",
    "Dalasi",
    "Danish Krone",
    "Denar",
    "Deutsche Mark",
    "Dinar",
    "Djibouti Franc",
    "Dobra",
    "Dominican Peso",
    "Dong",
    "Drachma",
    "East Caribbean Dollar",
    "Egyptian Pound",
    "Ekwele",
    "El Salvador Colon",
    "Ethiopian Birr",
    "Euro",
    "European Currency Unit (E.C.U)",
    "Falkland Islands Pound",
    "Fiji Dollar",
    "Financial Franc",
    "Financial Rand",
    "Forint",
    "French Franc",
    "Georgian Coupon",
    "Ghana Cedi",
    "Gibraltar Pound",
    "Gold",
    "Gold-Franc",
    "Gourde",
    "Guarani",
    "Guinea Escudo",
    "Guinea-Bissau Peso",
    "Guinean Franc",
    "Guyana Dollar",
    "Hong Kong Dollar",
    "Hryvnia",
    "Iceland Krona",
    "Indian Rupee",
    "Inti",
    "Iranian Rial",
    "Iraqi Dinar",
    "Irish Pound",
    "Italian Lira",
    "Jamaican Dollar",
    "Jordanian Dinar",
    "Karbovanet",
    "Kenyan Shilling",
    "Kina",
    "Koruna",
    "Krona A/53",
    "Kroon",
    "Kuna",
    "Kuwaiti Dinar",
    "Kwacha",
    "Kwanza",
    "Kwanza Reajustado",
    "Kyat",
    "Lao Kip",
    "Lari",
    "Latvian Lats",
    "Latvian Ruble",
    "Lebanese Pound",
    "Lek",
    "Lempira",
    "Leone",
    "Leu A/52",
    "Lev",
    "Lev A/52",
    "Lev A/62",
    "Liberian Dollar",
    "Libyan Dinar",
    "Lilangeni",
    "Lithuanian Litas",
    "Loti",
    "Luxembourg Convertible Franc",
    "Luxembourg Financial Franc",
    "Luxembourg Franc",
    "Malagasy Ariary",
    "Malagasy Franc",
    "Malawi Kwacha",
    "Malaysian Ringgit",
    "Maldive Rupee",
    "Mali Franc",
    "Maltese Lira",
    "Maltese Pound",
    "Mark der DDR",
    "Markka",
    "Mauritius Rupee",
    "Mexican Peso",
    "Mexican Unidad de Inversion (UDI)",
    "Moldovan Leu",
    "Moroccan Dirham",
    "Mozambique Escudo",
    "Mozambique Metical",
    "Mvdol",
    "Naira",
    "Nakfa",
    "Namibia Dollar",
    "Nepalese Rupee",
    "Netherlands Antillean Guilder",
    "Netherlands Guilder",
    "New Cruzado",
    "New Dinar",
    "New Israeli Sheqel",
    "New Kwanza",
    "New Romanian Leu",
    "New Taiwan Dollar",
    "New Turkish Lira",
    "New Yugoslavian Dinar",
    "New Zaire",
    "New Zealand Dollar",
    "Ngultrum",
    "No universal currency",
    "North Korean Won",
    "Norwegian Krone",
    "Nuevo Sol",
    "Old Dong",
    "Old Krona",
    "Old Lek",
    "Old Leu",
    "Old Shekel",
    "Old Shilling",
    "Old Turkish Lira",
    "Old Uruguay Peso",
    "Ouguiya",
    "Pa'anga",
    "Pakistan Rupee",
    "Palladium",
    "Pataca",
    "Pathet Lao Kip",
    "Peso",
    "Peso Argentino",
    "Peso Convertible",
    "Peso Uruguayo",
    "Peso boliviano",
    "Philippine Peso",
    "Platinum",
    "Portuguese Escudo",
    "Pound",
    "Pound Sterling",
    "Pula",
    "Qatari Rial",
    "Quetzal",
    "RINET Funds Code",
    "Rand",
    "Rhodesian Dollar",
    "Rial Omani",
    "Riel",
    "Romanian Leu",
    "Rouble",
    "Rufiyaa",
    "Rupiah",
    "Russian Ruble",
    "Rwanda Franc",
    "SDR (Special Drawing Right)",
    "Saint Helena Pound",
    "Saudi Riyal",
    "Schilling",
    "Serbian Dinar",
    "Seychelles Rupee",
    "Silver",
    "Singapore Dollar",
    "Slovak Koruna",
    "Sol",
    "Solomon Islands Dollar",
    "Som",
    "Somali Shilling",
    "Somoni",
    "South Sudanese Pound",
    "Spanish Peseta",
    "Sri Lanka Rupee",
    "Sucre",
    "Sudanese Dinar",
    "Sudanese Pound",
    "Surinam Dollar",
    "Surinam Guilder",
    "Swedish Krona",
    "Swiss Franc",
    "Syli",
    "Syrian Pound",
    "Tajik Ruble",
    "Taka",
    "Tala",
    "Talonas",
    "Tanzanian Shilling",
    "Tenge",
    "Timor Escudo",
    "Tolar",
    "Trinidad and Tobago Dollar",
    "Tugrik",
    "Tunisian Dinar",
    "Turkish Lira",
    "Turkmenistan Manat",
    "UAE Dirham",
    "UIC-Franc",
    "US Dollar",
    "Uganda Shilling",
    "Unidad Previsional",
    "Unidad de Fomento",
    "Unidad de Valor Constante (UVC)",
    "Unidad de Valor Real",
    "Uruguay Peso en Unidades Indexadas (UI)",
    "Uruguayan Peso",
    "Uzbekistan Sum",
    "Vatu",
    "WIR Euro",
    "WIR Franc",
    "WIR Franc (for electronic)",
    "Won",
    "Yemeni Dinar",
    "Yemeni Rial",
    "Yen",
    "Yuan Renminbi",
    "Yugoslavian Dinar",
    "Zaire",
    "Zambian Kwacha",
    "Zloty"
]

export default data;