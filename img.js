const data = [
  {
    tag: "",
    text: "The secret to strong nails is out. Elevate your nail care routine with ultra-hydrating and fast-absorbing Cuticle Oil.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    linkText: "DISCOVER NOW",
  },
  {
    tag: "OUR STUDIO",
    text: "Book new nails at our Upper East Side studio.",
    img: "https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?ixid:MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbHxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    linkText: "BOOK A MANICURE",
  },
  {
    tag: "GIFT CARDS",
    text: "Give the gift of the Paintbox experience for a manicure that tells a story.",
    img: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixid:MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbHxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    linkText: "BUY A GIFT CARD",
  },
  {
    tag: "Sep 29, 2021",
    text: "Nail Inspiration: Wallpaper's September 2021 Style Issue",
    img: "https://images.unsplash.com/photo-1590704634609-ba8981706635?ixid:MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmFpbHxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    linkText: "READ STORY",
  },
  {
    tag: "Sep 19, 2021",
    text: "New and Now: Fall–Winter 2021 Lookbook Collection",
    img: "https://images.unsplash.com/photo-1616427592814-195c30c24ea3?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5haWx8ZW58MHx8MHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    linkText: "READ STORY",
  },
  {
    tag: "Sep 14, 2021",
    text: "New and Now: Cuticle Oil",
    img: "https://images.unsplash.com/photo-1571728906312-8887e063d97f?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5haWx8ZW58MHx8MHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    linkText: "READ STORY",
  },
  {
    tag: "#OUTSIDETHEBOX",
    text: "Follow us on Instagram and get inspired by our tutorials to make the most of your Power Couples.",
    img: "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5haWx8ZW58MHx8MHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:400&q:60",
    linkText: "INSTAGRAM",
  },
];
let i = 0;
for (const box of document.querySelectorAll(".display-box")) {
  if (data[i] == null) {
    break;
  }
  const imgArray = box.querySelectorAll(".display-box__img");
  let idx = 0;
  for (const content of box.querySelectorAll(".display-box__content")) {
    console.log(box.querySelectorAll(".display-box__content").length);
    const tag = content.querySelector(".content__tag");
    const text = content.querySelector(".content__text");
    const linkText = content.querySelector(".content__link");
    console.log(content);
    if (data[i].img) {
      imgArray[idx].src = data[i].img;
      idx++;
    }
    if (data[i].tag) {
      tag.innerText = data[i].tag;
    }
    if (data[i].text) {
      text.innerText = data[i].text;
    }
    if (data[i].linkText) {
      linkText.innerText = data[i].linkText;
    }
    i++;
  }
}
