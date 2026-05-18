KULLANIM

1) index.html ve veri.js dosyasını aynı klasörde tutun.
2) Telefonda index.html dosyasını açın.
3) Personel TC girip "Sorgula" butonuna bassın.
4) Kayıt varsa uçuş bilgileri görünür.

LOGO EKLEME

1) Logo dosyanızı "logo.png" adıyla aynı klasöre koyun.
2) index.html içinde şu satırı bulun:
   const LOGO_KULLAN = false;
3) Şu şekilde değiştirin:
   const LOGO_KULLAN = true;

PERSONEL EKLEME

veri.js içinde PERSONELLER bölümüne şu formatta ekleme yapın:

{
  tc: "11111111111",
  adSoyad: "Ad Soyad",
  sirket: "Şirket Personeli"
}

GÜVENLİK NOTU

Bu sistem offline ve basit kullanım içindir. TC verileri veri.js dosyasında görünür durumdadır.
Sadece yetkili kişilerle paylaşılmalıdır.
