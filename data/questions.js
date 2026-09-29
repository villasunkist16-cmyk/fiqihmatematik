const questions = [
  {
    id: "001",
    media: "text",
    image: "",
    question: "Hukum mengumandangkan azan adalah.........",
    answers: ["Wajib", "Sunah", "Makruh"],
    correct: 0,
    score: 500
  },
  {
    id: "002",
    media: "text",
    image: "",
    question: "Orang yang mengumandangkan azan disebut.........",
    answers: ["Makmum", "Imam", "Muazin"],
    correct: 2,
    score: 500
  },
  {
    id: "003",
    media: "text",
    image: "",
    question: "Ketika mendengar azan sebaiknya kita.........",
    answers: ["Menjawab", "Bermain", "Diam saja"],
    correct: 0,
    score: 500
  },
  {
    id: "004",
    media: "text",
    image: "",
    question: "Iqamah adalah tanda salat akan.........",
    answers: ["Ditunda", "Dimulai", "Diakhiri"],
    correct: 1,
    score: 500
  },
  {
    id: "005",
    media: "text",
    image: "",
    question: "Setelah mendengar iqamah, sebaiknya orang yang salat segera.........",
    answers: ["Tidur", "Makan", "Merapikan shaf"],
    correct: 2,
    score: 500
  },
  {
    id: "006",
    media: "text",
    image: "",
    question: "Iqamah dilakukan pada posisi.........",
    answers: ["Duduk", "Berdiri", "Rukuk"],
    correct: 1,
    score: 500
  },
  {
    id: "007",
    media: "text",
    image: "",
    question: "Lafal assholatu khoirun minannaum dikumandangkan pada azan salat.........",
    answers: ["Zuhur", "Magrib", "Subuh"],
    correct: 2,
    score: 500
  },
  {
    id: "008",
    media: "text",
    image: "",
    question: "Lafaz qod qomatissholah artinya.........",
    answers: [
      "Allah Maha Besar",
      "Mari salat",
      "Sungguh salat akan didirikan"
    ],
    correct: 2,
    score: 500
  },
  {
    id: "009",
    media: "text",
    image: "",
    question: "Salat fardu sehari semalam ada.........",
    answers: ["3", "4", "5"],
    correct: 2,
    score: 500
  },
  {
    id: "010",
    media: "text",
    image: "",
    question: "Salat fardu wajib dilaksanakan bagi umat Islam yang sudah.........",
    answers: ["Kaya", "Baligh", "Pandai"],
    correct: 1,
    score: 500
  },
  {
    id: "011",
    media: "text",
    image: "",
    question: "Sebelum salat kita diwajibkan untuk.........",
    answers: ["Mandi", "Berwudhu", "Tidur"],
    correct: 1,
    score: 500
  },
  {
    id: "012",
    media: "text",
    image: "",
    question: "Kiblat umat Islam saat salat menghadap ke.........",
    answers: ["Timur", "Barat", "Kakbah"],
    correct: 2,
    score: 500
  },
  {
    id: "013",
    media: "text",
    image: "",
    question: "Gerakan salat yang pertama adalah.........",
    answers: ["Rukuk", "Takbiratul ihram", "Sujud"],
    correct: 1,
    score: 500
  },
  {
    id: "014",
    media: "text",
    image: "",
    question: "Membaca surat Al-Fatihah hukumnya.........",
    answers: ["Wajib", "Sunah", "Makruh"],
    correct: 0,
    score: 500
  },
  {
    id: "015",
    media: "text",
    image: "",
    question: "Pahala salat berjamaah adalah......... derajat",
    answers: ["25", "26", "27"],
    correct: 2,
    score: 500
  },
  {
    id: "016",
    media: "text",
    image: "",
    question: "Azan disyariatkan pada tahun ke......... Hijriyah",
    answers: ["1", "2", "3"],
    correct: 0,
    score: 500
  },
  {
    id: "017",
    media: "text",
    image: "",
    question: "Orang yang pertama kali mengumandangkan azan adalah.........",
    answers: ["Bilal bin Rabah", "Zaid bin Harits", "Abu Bakar"],
    correct: 0,
    score: 500
  },
  {
    id: "018",
    media: "text",
    image: "",
    question: "Jumlah rakaat salat Magrib ada.........",
    answers: ["3 rakaat", "4 rakaat", "2 rakaat"],
    correct: 0,
    score: 500
  },
  {
    id: "019",
    media: "text",
    image: "",
    question: "Rukun salat ada.........",
    answers: ["17", "10", "5"],
    correct: 0,
    score: 500
  },
  {
    id: "020",
    media: "text",
    image: "",
    question: "Salat adalah rukun Islam yang ke.........",
    answers: ["1", "2", "3"],
    correct: 1,
    score: 500
  },
  
  {
    id: "021",
    media: "text",
    image: "",
    question: "Bilangan dengan nilai satuan 5 adalah...",
    answers: ["35", "34", "36"],
    correct: 0,
    score: 500
},
{
    id: "022",
    media: "text",
    image: "",
    question: "Bilangan yang kurang dari 29 adalah...",
    answers: ["30", "40", "28"],
    correct: 2,
    score: 500
},
{
    id: "023",
    media: "text",
    image: "",
    question: "35, ..., 37, 38. Bilangan yang sesuai adalah...",
    answers: ["31", "34", "36"],
    correct: 2,
    score: 500
},
{
    id: "024",
    media: "text",
    image: "",
    question: "Pasangan bilangan yang jumlahnya 28 adalah...",
    answers: ["12 dan 14", "13 dan 14", "15 dan 13"],
    correct: 2,
    score: 500
},
{
    id: "025",
    media: "text",
    image: "",
    question: "Bilangan 43. Nilai tempat puluhan pada bilangan tersebut adalah...",
    answers: ["3", "4", "5"],
    correct: 1,
    score: 500
},
{
    id: "026",
    media: "text",
    image: "",
    question: "Bilangan dengan nilai tempat 2 puluhan dan 5 satuan adalah...",
    answers: ["24", "25", "26"],
    correct: 1,
    score: 500
},
{
    id: "027",
    media: "text",
    image: "",
    question: "17, 25, 47. Urutan bilangan dari yang terbesar adalah...",
    answers: ["17, 47, 25", "25, 47, 17", "47, 25, 17"],
    correct: 2,
    score: 500
},
{
    id: "028",
    media: "text",
    image: "",
    question: "24 ... 30. Tanda perbandingan yang sesuai adalah...",
    answers: ["<", ">", "="],
    correct: 0,
    score: 500
},
{
    id: "029",
    media: "text",
    image: "",
    question: "Bilangan dua puluh enam dapat ditulis...",
    answers: ["27", "26", "28"],
    correct: 1,
    score: 500
},
{
    id: "030",
    media: "text",
    image: "",
    question: "Ibu memiliki 32 telur ayam. Bibi memiliki 23 telur ayam. Siapa yang memiliki telur paling banyak?",
    answers: ["Ibu", "Bibi", "Paman"],
    correct: 0,
    score: 500
},
{
    id: "031",
    media: "text",
    image: "",
    question: "Hasil penjumlahan dari 15 ditambah 3 adalah...",
    answers: ["15", "16", "18"],
    correct: 2,
    score: 500
},
{
    id: "032",
    media: "text",
    image: "",
    question: "Nisa memiliki 13 wortel. Rara memiliki 6 wortel. Jumlah wortel Nisa dan Rara adalah...",
    answers: ["15", "18", "19"],
    correct: 2,
    score: 500
},
{
    id: "033",
    media: "text",
    image: "",
    question: "40 ditambah 5 sama dengan...",
    answers: ["35", "45", "55"],
    correct: 1,
    score: 500
},
{
    id: "034",
    media: "text",
    image: "",
    question: "Hasil dari 10 ditambah 5 adalah...",
    answers: ["14", "15", "16"],
    correct: 1,
    score: 500
},
{
    id: "035",
    media: "text",
    image: "",
    question: "Putra memiliki 16 pensil. Putra membeli lagi 10 pensil. Banyak pensil Putra sekarang adalah...",
    answers: ["26", "25", "24"],
    correct: 0,
    score: 500
},
{
    id: "036",
    media: "text",
    image: "",
    question: "Hasil dari 19 dikurangi 13 adalah...",
    answers: ["6", "7", "8"],
    correct: 0,
    score: 500
},
{
    id: "037",
    media: "text",
    image: "",
    question: "Reza memiliki 18 bola. Ali memiliki 12 bola. Selisih bola Reza dan Ali adalah...",
    answers: ["4", "5", "6"],
    correct: 2,
    score: 500
},
{
    id: "038",
    media: "text",
    image: "",
    question: "Hasil pengurangan 17 dikurangi 4 adalah...",
    answers: ["11", "13", "12"],
    correct: 1,
    score: 500
},
{
    id: "039",
    media: "text",
    image: "",
    question: "Hasil dari 57 dikurangi 32 adalah...",
    answers: ["25", "26", "27"],
    correct: 0,
    score: 500
},
{
    id: "040",
    media: "text",
    image: "",
    question: "Farah membeli 20 pensil. Ara membeli 17 pensil. Selisih pensil Farah dan Ara adalah...",
    answers: ["2", "3", "4"],
    correct: 1,
    score: 500
}
];