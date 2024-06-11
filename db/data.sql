INSERT INTO user (firstName, lastName, email, phone, password)
VALUES (
    'shaquella',
    'jones',
    'sm.jones424@icloud.com',
    '2293291520',
    'Code123!'
);

INSERT INTO color (color)
VALUES 
    ("red"),
    ("multi pink"),
    ("gray"),
    ("pink"),
    ("lavender"),
    ("blue"),
    ("gold"),
    ("moss"),
    ("black"),
    ("white");

INSERT INTO style (style)
VALUES
    ("layered"),
    ("multilay"),
    ("adtutu"),
    ("childtutu"),
    ("bow"),
    ("brouche"),
    ("belt"),
    ("bracelet"),
    ("fabric");

INSERT INTO product (product, size, category, price, color_id, imgUrl, item_number, style_id)
VALUES (
    "tulle skirt",
    "medium",
    "clothing",
    100,
    1,
    "redskirt.jpg",
    "188",
    1
),
(
    "multi color tulle",
    "large",
    "clothing",
    150,
    2,
    "multiskirt.jpg",
    "198",
    2
),
(
    "adult tutu",
    "small",
    "clothing",
    90,
    3,
    "graytutu.jpg",
    "199",
    3
),
(
    "child tutu",
    "medium",
    "clothing",
    75,
    4,
    "pinkchild.jpg",
    "200",
    4
),
(
   "multi color child tutu",
   "medium",
   "clothing",
   85,
   2,
   "multichild.jpg",
   "205",
   4
),
(
    "hair bow",
    "one size",
    "accessories",
    25,
    4,
    "bow.jpeg",
    "111",
    5
),
(
    "brouche",
    "one size",
    "accessories",
    50,
    7,
    "brouche.jpeg",
    "123",
    6
),
(
   "belt",
   "medium",
   "accessories",
   35,
   5,
   "belt.jpg",
   "133",
   7
),
(
    "bracelet",
    "one size",
    "accessories",
    20,
    6,
    "bracelet.jpg",
    "134",
    8
),
(
    "fabric",
    "one size",
    "accessories",
    30,
    8,
    "fabric.jpg",
    "144",
    9
);

