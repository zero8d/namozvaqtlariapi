# Namoz vaqtlari dasturlash interfeysi (API)

Namoz vaqtlarini olish uchun islom.uz taqvimi bilan aynan mos keladigan API topa olmadim shuning uchun. Islom.uz saytidagi taqvimni olib sizga json korinishida jo'natib beradigan API yasadim.
Bu dastur islom.uz saytidagi namoz vaqtlari jadvalini olib sizga obyekt qilib qaytarib beradi. Agar sizga API tezligi muhim bo'lsa ma'lumotni malumotlar bazasidan oladigan [NamozVaqtiAPI](https://github.com/zero8d/namozvaqtiapi) dan foydalanishingizni maslaxat beraman.
Ayni paytda API ga json murojaat bilan murojaat qilishingiz mumkin.

```https://namoztime.herokuapp.com/```

## API endpoints:
Endpoint|Vazifasi
--------|--------
/api/monthly|Oylik ma'lumot qaytaradi
/api/daily|Kunlik ma'lumot qaytaradi

## So'rov parapertlari

so'rov parametri|ta'rif
----------------|------
region          |hudud nomi `type: String` masalan: "Toshkent", "Qo'qon"
month           |Oy raqami. `type: Number` masalan: 9, "09"
day             |Kun raqami. `typr: Number` masalan: 15, "04"

### masalan:
oylik ma'lumot uchun

```JSON
{ "region": "toshkent", "month": 9 }
```

kunlik ma'lumot uchun:
```JSON
{ "region": "toshkent", "month": 9, "day": 12 }
```

## Author: [Zero8D](https://t.me/Zero_8D)
