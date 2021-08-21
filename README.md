# Namoz vaqtlari dasturlash interfeysi (API)

Namoz vaqtlarini olish uchun islom.uz taqvimi bilan aynan mos keladigan API topa olmadim shuning uchun. Islom.uz saytidagi taqvimni olib sizga json korinishida jo'natib beradigan API yasadim.
Ayni paytda API ga json murojaat bilan murojaat qilishingiz mumkin.


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

## masalan:
oylik ma'lumot uchun

```JSON
{ "region": "toshkent", "month": 9 }
```

kunlik ma'lumot uchun:
```JSON
{ "region": "toshkent", "month": 9, "day": 12 }
```
