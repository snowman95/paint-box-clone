const data = [
  {
    tag: "",
    text: "The secret to strong nails is out. Elevate your nail care routine with ultra-hydrating and fast-absorbing Cuticle Oil.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    part: [],
    linkText: "DISCOVER NOW",
  },
  {
    tag: "OUR STUDIO",
    text: "Book new nails at our Upper East Side studio.",
    img: "https://images.unsplash.com/photo-1575717737414-31fec7786574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbmljdXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    part: [],
    linkText: "BOOK A MANICURE",
  },
  {
    tag: "THE SHOP",
    text: "Our Newest Polish Colors",
    img: "",
    part: [
      {
        img: "https://images.unsplash.com/photo-1618606406106-eeb552f167a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG1hbmljdXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tag: "POWER COUPLE",
        text: "Like Canyon + Like Electric",
        price: "$40.00",
      },
      {
        img: "https://images.unsplash.com/photo-1602585578130-c9076e09330d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbmljdXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tag: "POWER COUPLE",
        text: "Like Gilded + Like Velvet",
        price: "$40.00",
      },
      {
        img: "https://images.unsplash.com/photo-1590708673128-889ae0341adb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxtYW5pY3VyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tag: "POWER COUPLE",
        text: "Like Lilac + Like Muse",
        price: "$40.00",
      },
    ],
    linkText: "BUY A GIFT CARD",
  },
  {
    tag: "GIFT CARDS",
    text: "Give the gift of the Paintbox experience for a manicure that tells a story.",
    img: "https://images.unsplash.com/photo-1588159229515-71d0ed7f8ed4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG1hbmljdXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    part: [],
    linkText: "BUY A GIFT CARD",
  },
  {
    tag: "Sep 29, 2021",
    text: "Nail Inspiration: Wallpaper's September 2021 Style Issue",
    img: "",
    part: [
      {
        img: "https://images.unsplash.com/photo-1590704634609-ba8981706635?ixid:MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmFpbHxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
        tag: "",
        text: "",
        price: "",
      },
    ],
    linkText: "READ STORY",
  },
  {
    tag: "Sep 19, 2021",
    text: "New and Now: Fall–Winter 2021 Lookbook Collection",
    img: "https://images.unsplash.com/photo-1616427592814-195c30c24ea3?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5haWx8ZW58MHx8MHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    part: [],
    linkText: "READ STORY",
  },
  {
    tag: "Sep 14, 2021",
    text: "New and Now: Cuticle Oil",
    img: "https://images.unsplash.com/photo-1571728906312-8887e063d97f?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5haWx8ZW58MHx8MHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    part: [],
    linkText: "READ STORY",
  },
  {
    tag: "#OUTSIDETHEBOX",
    text: "Follow us on Instagram and get inspired by our tutorials to make the most of your Power Couples.",
    img: "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5haWx8ZW58MHx8MHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    part: [],
    linkText: "INSTAGRAM",
  },
];

let idx = 0;
for (const box of document.querySelectorAll(".display-box")) {
  if (data[idx] == null) {
    break;
  }
  const partArray = box.querySelectorAll(".set-box__part");
  if (partArray.length >= 1) {
    partArray.forEach((content, i) => {
      const partImg = content.querySelector(".set-box__part__img");
      const partTag = content.querySelector(".set-box__part__tag");
      const partText = content.querySelector(".set-box__part__text");
      const partPrice = content.querySelector(".set-box__part__price");
      partImg.src = data[idx].part[i].img;
      partTag.innerText = data[idx].part[i].tag;
      partText.innerText = data[idx].part[i].text;
      partPrice.innerText = data[idx].part[i].price;
    });
  }
  const imgArray = box.querySelectorAll(".display-box__img");
  box.querySelectorAll(".display-box__content").forEach((content, i) => {
    const tag = content.querySelector(".content__tag");
    const text = content.querySelector(".content__text");
    const linkText = content.querySelector(".content__link");
    tag.innerText = data[idx].tag;
    text.innerText = data[idx].text;
    linkText.innerText = data[idx].linkText;

    if (imgArray.length >= 1) {
      imgArray[i].src = data[idx].img;
    }
    idx++;
  });
}
