# Namoz vaqtlari dasturlash interfeysi (API)

Namoz vaqtlarini olish uchun islom.uz taqvimi bilan aynan mos keladigan API topa olmadim shuning uchun. Islom.uz saytidagi taqvimni olib sizga json korinishida jo'natib beradigan API yasadim.
Ayni paytda API ga json murojaat bilan murojaat qilishingiz mumkin.
so'rov parametri|ta'rif
----------------|------
region          |hudud nomi `type: String` masalan: "Toshkent", "Qo'qon"
month           |Oy raqami. `type: Number` masalan: 9, "09"
day             |Kun raqami. `typr: Number` masalan: 15, "04"

## API endpoints:
Oylik ma'lumot uchun
`https://namoztime.herokuapp.com/api/monthly/`
Kunlik ma'lumot uchun
`https://namoztime.herokuapp.com/api/daily/`

## masalan:
oylik ma'lumot uchun
`{ "region": "toshkent", "month": 9 }`
kunlik ma'lumot uchun:
`{ "region": "toshkent", "month": 9, "day": 12 }`
