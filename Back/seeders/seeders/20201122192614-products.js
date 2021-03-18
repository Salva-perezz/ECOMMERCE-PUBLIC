"use strict";

//PRODUCTS
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "Berry Bros. & Rudd Good Ordinary Claret",
        brand: "Dourthe, Bordeaux",
        region: "Bordeaux",
        country: "France",
        type: "Red",
        description:
          "Our best-selling wine for many years, “GOC” continues to set the benchmark for dependably delicious Claret. The 2018 vintage produced glorious wines of real depth and body, as shown by this classic Bordeaux blend of Merlot and Cabernet Sauvignon. The nose is rich with pure cassis and bramble fruit, mingled with warm, smoky oak aromas from barrel ageing. On the palate, the succulent blackcurrant fruit is framed by a fine, complex structure, while the finish is rounded, juicy and very moreish. Made for early drinking, it’s suitable for almost any occasion.",
        year: 2018,
        price: 1.95,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20188004165-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Berry Bros. & Rudd Good Ordinary White",
        brand: "Dourthe",
        region: "Bordeaux",
        country: "France",
        type: "White",
        description:
          "This wine is a bin-end, discounted by 10%. Excludes BBX stock. The latest vintage of our best-selling white, “GOW”, is a benchmark Bordeaux Sauvignon Blanc. Fermented at low temperatures to preserve the crystalline purity of this popular variety, the nose displays classic cut-grass and gooseberry aromas. The palate follows up with fresh, crunchy white current and citrus fruit. With its elegant, bone-dry finish, this is perfect on its own or with lighter fish and chicken dishes.",
        year: 2018,
        price: 9.86,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20188006417-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Berry Bros. & Rudd Provence Rosé",
        brand: "Château la Mascaronne",
        region: "Provence, Cotes de Provence",
        country: "usa",
        type: "Rosé",
        description:
          "Smart, organic, Provençal pink from Berry Bros and Tom Bove, who owned Miraval before Brangelina bought it. From rocky soil and the usual Provençal mix of grenache, cinsault and rolle, this bold, very pale salmon-pink rosé is a thyme-and-bitter-celery gem, and best enjoyed with food.",
        year: 2019,
        price: 150,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20198004240-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Gavi di Gavi, Bric Sassi",
        brand: "Roberto Sarotto",
        region: "Piedmont, Gavi",
        country: "Italy",
        type: "White",
        description:
          "This wine has remained a stalwart of our Italian range for two decades and for good reason: its pure, lifted Cortese fruit wine is a thing of beauty, especially in the context of many other Gavi. Undoubtedly a notch above most of its peers, it’s very versatile and is at home on its own as well as alongside fish, pasta and chicken dishes.",
        year: 2019,
        price: 13.95,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20191474888-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Vermut Blanco",
        brand: "Bodegas Emilio Lustau, Jerez",
        region: "califorasdnia",
        country: "Spain",
        type: "White",
        description:
          "A blend based around two classic Jerez wines: a dry, mineral and crisp Fino Sherry, and a sweet and floral Moscatel. These wines are infused with word wood, marjoram, rosemary, gentian, orange peel and camomile to give the whole an incredibly complex bouquet. Bright yellow in colour, on the nose it shows floral, citrus and herbaceous notes over a yeasty and mineral background. The finish culminates in a bitterness perfectly in balance with the rich nutty notes. This works beautifully in many cocktails but is more commonly drunk over ice as an apéritif.",
        year: 2018,
        price: 18.95,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/10001512382-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Knox Alexander",
        brand: "Au Bon Climat",
        region: "California, Santa Barbara County, Santa Maria Valley",
        country: "USA",
        type: "Red",
        description:
          "The 2016 “Knox Alexander” is well structured, with a delightfully rounded texture and vibrant, fresh acidity. Relatively full-bodied and concentrated, with nuances of red cherry, dried raspberries, a lick of oak, mint leaf and a savoury sprinkle of sage that lingers on the finish. This is a wine that prides itself on its grace and balance rather than pure power alone. Extremely appealing presently but will benefit from a further two years in bottle.",
        year: 2016,
        price: 58,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20161135668-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Berry Bros. & Rudd Côtes du Rhône Rouge ",
        brand: "Rémi Pouizin",
        region: "Rhône, Côtes du Rhône",
        country: "France",
        type: "Red",
        description:
          "The value for money is staggering and when you taste the depth of fruit and breathe in the heavenly perfume of this wild, red-fruited wine your senses will be in orbit. The texture is mesmerising because it is silky smooth and the finish is prickles with refreshing spice and earth notes.",
        year: 2019,
        price: 11.95,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20198006299-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Berry Bros. & Rudd Pouilly-Fuissé by Olivier Merlin",
        brand: "Olivier Merlin",
        region: "Burgundy, The Maconnais, Pouilly Fuisse",
        country: "France",
        type: "White",
        description:
          "Our 2019 Pouilly-Fuissé has once again been made for us by the talented Olivier Merlin. From several vineyards across the villages of Vergisson, Chaintré and Fuissé, the wine offers notes of ripe, succulent stone-fruit, white flowers and a cleansing, saline finish. A wine which is at once generous and fresh, it is the perfect partner for fish and seafood dishes, but would also work well with cheese and white meats.   ",
        year: 2019,
        price: 24.95,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20198004237-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Penfolds",
        brand: "Penfolds",
        region: " South Australia, Adelaide Hills",
        country: "Australia",
        type: "White",
        description:
          "Beautifully subtle oak and buttery stone fruit on the nose. The palate offers an abundance of creamy peaches and the barrel fermentation is evident with hints of savoury notes dancing in the background. The acidity is bright and will no doubt find itself exquisitely interwoven into the lovely stone fruit melange after a couple of years. Medium-full bodied with a strong and lasting finish. This is a fine and vivid example of the Bin A single region Chardonnay and will appeal to those who like medium bodied whites which are creamy in texture with lots of minerality. It will drink well on release, but will gain complexity and be more enjoyable after three or four years in the cellar.",
        year: 2019,
        price: 54.28,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20198016281-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Nicolas-Jay",
        brand: "Domaine Nicolas Jay",
        region: "Oregon, Willamette Valley",
        country: "USA",
        type: "Red",
        description:
          "A suave pinot noir from a favourite producer and a top Oregon spot that the cognoscenti agree can be every bit as awesome as much of the Côte d’Or. What you get is oodles of soft, silky yet tangy red plum and raspberry fruit. This wine is sourced from various vineyards across the Willamette Valley AVA, with the majority of the grapes coming from biodynamic and organically certified sites. The 2017 vintage was cool and the wine therefore displays floral, jasmine tea and red berry fruit notes, combined with a spiciness on the palate, refreshing acidity and fine-grained tannins. There’s a mineral core that is typical of Old World Pinot Noir. This wine will pair well with hard cheeses and red meat dishes. Drink now to 2027.",
        year: 2017,
        price: 70,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20171462094-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Horsepower Vineyards Syrah The Tribe Vineyard",
        brand: "Horsepower Vineyards",
        region: "Washington State, Walla Walla Valley - Washington",
        country: "USA",
        type: "Red",
        description:
          "More gamy, bloody and meaty than the Sur Echalas Vineyard Syrah, the 2012 Syrah The Tribe Vineyard is a full-bodied, elegant, concentrated and structured effort that gives up complex notes of savory dark fruits, beef blood, dried herbs, pepper and olives. It's another incredible Syrah that needs short-term cellaring, but will have two decades of evolution.",
        year: 2012,
        price: 142,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20128012052-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Brunello di Montalcino",
        brand: "Scopetone, Tuscany",
        region: "Brunello di Montalcino",
        country: "Italy",
        type: "Red",
        description:
          "The 2013 Brunello di Montalcino from Podere Scopetone opens to evolved notes of dried cherry, cured meat and grilled herb. This mid-weight wine presents a smooth and silky texture that covers the palate from start to finish. There is some primary fruit still on display that is reinforced by the wine's bright acidity and the tonic freshness it imparts to the palate. This is a perfect pairing partner to grilled veal or pork. This Brunello ages in Slavonian oak casks for two years. Only 5,600 bottles were made.",
        year: 2013,
        price: 60,
        size: 75,
        stock: 10,
        discount: 10,
        urlPicture: "https://media.bbr.com/s/bbr/20131105139-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },
      {
        name: "Berry Bros. & Rudd Gavi di Gavi",
        brand: "Roberto Sarotto",
        region: "Piedmont",
        country: "Italy",
        type: "Cortese",
        description:
          "Our own-label Gavi is made by Roberto Sarotto. Produced from Cortese grapes, Gavi is the quintessential Northern Italian white, famed for its delicacy and finesse. This textbook example offers elegant aromas of white flowers and green pear. The palate is focused and energetic, with generous layers of fresh apple and lemon peel, while the white tufo soils of the vineyards impart a beautiful, refreshing minerality to the finish. Perfect with shellfish, white fish or delicate green vegetable dishes.",
        year: 2019,
        price: 25,
        size: 75,
        stock: 10,
        discount: 20,
        urlPicture: "https://media.bbr.com/s/bbr/20198117656-ms",
        createdAt: "2021-03-11 10:37:30.391-03",
        updatedAt: "2021-03-11 10:37:30.391-03"
      },

      


    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
