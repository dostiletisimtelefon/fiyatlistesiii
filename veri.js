// veri.js
// Personel listesini buradan düzenleyebilirsiniz.
// Yeni kişi eklemek için PERSONELLER içine aynı formatta yeni satır ekleyin.

window.PERSONELLER = [
  {
    tc: "28904290846",
    adSoyad: "İbrahim Altıntaş",
    sirket: "Şirket Personeli"
  },
  {
    tc: "28049319310",
    adSoyad: "Hakkı Korkmaz",
    sirket: "Şirket Personeli"
  }
];

window.UCUS_BILGISI = {
  sirket: "Şirket Personeli",

  gidis: {
    tarih: "19 Mayıs 2026, Salı",
    firma: "AJet",
    ucusNo: "VF577",
    sure: "2sa 15dk",
    paket: "Basic",
    kalkisKod: "ESB",
    kalkisSaat: "12:15",
    kalkisSehir: "Ankara",
    kalkisTerminal: "",
    varisKod: "GYD",
    varisSaat: "15:30",
    varisSehir: "Bakü",
    varisTerminal: "",
    ucak: "Boeing 737"
  },

  donus: {
    tarih: "22 Mayıs 2026, Cuma",
    firma: "AJet",
    ucusNo: "VF578",
    sure: "2sa 35dk",
    paket: "Basic",
    kalkisKod: "GYD",
    kalkisSaat: "16:30",
    kalkisSehir: "Bakü",
    kalkisTerminal: "Terminal 1",
    varisKod: "ESB",
    varisSaat: "18:05",
    varisSehir: "Ankara",
    varisTerminal: "",
    ucak: "Boeing 737"
  },

  bagaj: [
    "Basic paket seçilidir.",
    "1 parça x 4 kg koltuk altına sığabilen çanta hakkı vardır. Ölçü: 40x30x15 cm.",
    "Kabin bagajı ve uçak altı bagaj dahil değildir.",
    "Ek bagaj ihtiyacı varsa şirket yetkilisiyle iletişime geçiniz."
  ],

  notlar: [
    "Dış hat uçuşu olduğu için havalimanında en az 2 saat önce hazır olunuz.",
    "Kimlik / pasaport ve gerekli seyahat belgelerinizi yanınızda bulundurunuz.",
    "Uçuş saatleri havayolu tarafından değiştirilebilir.",
    "Bu ekran bilgilendirme amaçlıdır; resmi bilet yerine geçmez."
  ]
};
