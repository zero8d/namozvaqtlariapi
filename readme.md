# Assalomu alaykum

Namoz vaqtlarini olish uchun islom.uz taqvimi bilan aynan mos keladigan API topa olmadim shuning uchun. Islom.uz taqvimini API ga o'zim konvertatsiya qilishga qaror qildim.
Ayni paytda API ga json murojaat qilishingiz mumkin.
region kalitiga oz kerakli hududingiz nomini qiymat qilib kiriting. month kalitiga kerakli oy raqimini kiriting. day kalatiga kun raqamini kiriting.
API endpoints:
Oylik ma'lumot uchun
`https://namoztime.herokuapp.com/api/monthly/`

Kunlik ma'lumot uchun
`https://namoztime.herokuapp.com/api/daily/`

masalan:
oylik ma'lumot uchun
`{ "region": "toshkent", "month": 9 }`

kunlik ma'lumot uchun:

`{ "region": "toshkent", "month": 9, "day": 12 }`
