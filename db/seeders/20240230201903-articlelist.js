"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      {
        title: "1-к квартира",
        price: 500000,
        image:
          "https://n1s1.hsmedia.ru/b6/26/a9/b626a92fc0a2a81850ecd76d527719df/728x486_1_f52ffaab10e25b4751edaea57814dae0@2500x1669_0xIDV0gE76_6349648908486921708.jpg",
        categoryID: 1,
      },
      {
        title: "4-к квартира",
        price: 4500000,
        image:
          "https://dk-nn.ru/800/600/http/ic.pics.livejournal.com/100komnat/76879316/5251322/5251322_original.jpg",
        categoryID: 1,
      },
      {
        title: "2-к квартира",
        price: 2500000,
        image:
          "https://gidotdelki.ru/wp-content/uploads/2021/12/dizajn-kvartiry-38-kv.-m-10.jpg",
        categoryID: 1,
      },
      {
        title: "1-к квартира",
        price: 860000,
        image: "https://usadba.guru/upload/medialibrary/000/room-33-kv-m-7.jpg",
        categoryID: 1,
      },
      {
        title: "3-к квартира",
        price: 6500000,
        image:
          "https://ibogatyr.ru/upload/medialibrary/739/a52ab9eb469ea9d8ddc709b640104fa2.jpg",
        categoryID: 1,
      },
      {
        title: "BMW",
        price: 6500000,
        image:
          "https://fdm.dk/sites/default/files/styles/hero_xsmall/public/2023-10/08-FP-BMWi5-001_1900.jpg?h=0caf3701&itok=95Atwv-c",
        categoryID: 2,
      },
      {
        title: "Audi",
        price: 4500000,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/audi-rs6-avant-wheelsandmore-1-1589019238.jpg?crop=0.982xw:0.707xh;0,0.219xh&resize=2048:*",
        categoryID: 2,
      },
      {
        title: "Porcshe",
        price: 9500000,
        image: "https://assets.autoweek.nl/m/npqyq9zb3alc_800.jpg",
        categoryID: 2,
      },
      {
        title: "Volvo",
        price: 5500000,
        image:
          "https://avatars.mds.yandex.net/get-verba/937147/2a00000181ae7df1b852528b550fa0b07a4f/cattouchretcr",
        categoryID: 2,
      },
      {
        title: "Harry Potter",
        price: 970,
        image: "https://images.booksense.com/images/358/136/9780439136358.jpg",
        categoryID: 3,
      },
      {
        title: "Song of Fire",
        price: 1270,
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
        categoryID: 3,
      },
      {
        title: "Human",
        price: 340,
        image:
          "https://s3.amazonaws.com/photo.goodreads.com/books/1168279630l/31548.jpg",
        categoryID: 3,
      },
      {
        title: "King",
        price: 5500,
        image:
          "https://www.usatoday.com/gcdn/presto/2021/06/11/USAT/beb15554-6a68-4be4-bded-f799469f446b-Billy_Summers.jpeg",
        categoryID: 3,
      },
      {
        title: "Playstation",
        price: 55000,
        image:
          "https://content.onliner.by/news/1100x5616/f17b3c6d75d77002679e63a7ac5b9300.jpg",
        categoryID: 4,
      },
      {
        title: "Denon",
        price: 78000,
        image:
          "https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2018/22/033/g033AVX1500-F.jpg",
        categoryID: 4,
      },
    ];

    const arrObj = arr.map((el) => ({
      ...el,
      userID: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Articles", arrObj);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
