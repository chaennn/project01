const $btnHam = document.querySelector(".menu_btn");
const $nav = document.querySelector("nav");
$btnHam.addEventListener("click", function () {
  $nav.classList.toggle("on");
  $btnHam.classList.toggle("on");
});

const $gnbLi = document.querySelectorAll(".gnb > li");
const $menu = document.querySelectorAll(".gnb > li > a");

function toggleT() {
  const thisItem = this.parentNode;
  $gnbLi.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("on");
      return;
    }
    item.classList.remove("on");
  });
}

$menu.forEach((elem) => {
  elem.addEventListener("click", toggleT);
});

console.log(
  `
    :::    :::  ::::::::::  :::         :::          ::::::::  
    :+:    :+:  :+:         :+:         :+:         :+:    :+: 
    +:+    +:+  +:+         +:+         +:+         +:+    +:+ 
    +#++:++#++  +#++:++#    +#+         +#+         +#+    +:+ 
    +#+    +#+  +#+         +#+         +#+         +#+    +#+ 
    #+#    #+#  #+#         #+#         #+#         #+#    #+# 
    ###    ###  ##########  ##########  ##########   ########                                             
  `
);
console.log("https://github.com/chaennn");
console.log(
  `%c카카오톡 ID입니다. 용건이 있으시면 연락주세요:) chaen_hhh`,
  `color:white`
);
