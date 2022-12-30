const $btnHam = document.querySelector(".menu_btn");
const $nav = document.querySelector("nav");
$btnHam.addEventListener("click", function () {
  $nav.classList.toggle("on");
  $btnHam.classList.toggle("on");
});

const $gnbLi = document.querySelectorAll(".gnb > li");
const $sub = document.querySelectorAll(".sub");

$gnbLi.addEventListener("click", function () {
  $gnbLi.classList.toggle("on");
  $sub.classList.add("on");

  // $gnbLi.forEach(function (item, idx) {
  //   item.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     $sub.forEach(function (sub) {
  //       sub.style.display = "none";
  //     });
  //     $sub[idx].style.display = "block";
  //   });
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
