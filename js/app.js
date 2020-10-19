document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------- */
  /* ----- TOGGLE HEADER MENU ----- */
  /* ---------------------------------------------------- */

  const btn = document.querySelector('#btnToggle');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('menu--show');
    this.classList.toggle('btn-toggle--toggled');
  });


  /* ---------------------------------------------------- */
  /* ----- TOGGLE SUBMENU ----- */
  /* ---------------------------------------------------- */

  // const submenu = document.querySelector('.menu__link-dropdown');
  // submenu.addEventListener('click', function (evt) {
  //   evt.preventDefault();
  //   document.querySelector('.menu-dropdown').classList.toggle('menu-dropdown--show');
  // });
  //
  //
  // const media = window.matchMedia('(min-width: 1024px)');
  //
  // if (media.matches) {
  //
  //   let scrollpos = window.scrollY;
  //   const dropdown = document.querySelector('.menu-dropdown');
  //   const dropdownHeight = dropdown.offsetHeight;
  //
  //   const remove_class_on_scroll = () => dropdown.classList.remove('menu-dropdown--show');
  //
  //
  //   window.addEventListener('scroll', function() {
  //     scrollpos = window.scrollY
  //
  //
  //     if (scrollpos >= dropdownHeight) {
  //       remove_class_on_scroll()
  //     }
  //
  //     //console.log(scrollpos)
  //   });
  //
  //
  //
  //   addEventListener (
  //       'scroll',
  //       _ => [...document.querySelectorAll('.menu-submenu--show')]
  //           .forEach(
  //               e => e.classList.remove('menu-submenu--show')
  //           )
  //   );
  //
  //
  // }
  //
  //
  // const menu = document.querySelector(".menu");
  // const links = menu.querySelectorAll("a:not(.js-anchor--link)");
  //
  // for (const el of links) {
  //   el.addEventListener("click", function (e) {
  //     e.preventDefault();
  //
  //     const ul = this.nextElementSibling;
  //     if (ul !== null) {
  //       ul.classList.toggle("menu-submenu--show");
  //     }
  //
  //
  //     let par = this.parentElement;
  //     while (true) {
  //       if (par.parentElement.classList.contains("menu")) break;
  //       par = par.parentElement;
  //     }
  //
  //     console.log(par)
  //     const mainLiChild = menu.children;
  //     for (const li of mainLiChild) {
  //       if (li !== par) {
  //         li.querySelectorAll(".menu-submenu").forEach(el =>
  //             el.classList.remove("menu-submenu--show"));}
  //     }
  //   })
  // }


  /* ---------------------------------------------------- */
  /* ----- HIGHLIGHT CURRENT PAGE ACTIVE MENU ITEM ----- */
  /* ---------------------------------------------------- */

  const items = document.querySelectorAll('.menu__link');

  function makeActive() {

    items.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');

  }

  items.forEach(elem => {
    elem.addEventListener('click', makeActive);
  });


  /* ---------------------------------------------------- */
  /* ----- QUANTITY ----- */
  /* ---------------------------------------------------- */

  document.querySelector('.quantity__btn--minus').setAttribute('disabled', 'disabled');

  let valueCount

  document.querySelector('.quantity__btn--plus').addEventListener("click", function() {

    valueCount = document.querySelector('.quantity__input').value;

    valueCount++;

    document.querySelector('.quantity__input').value = valueCount;

    if (valueCount > 1) {
      document.querySelector('.quantity__btn--minus').removeAttribute('disabled');
      document.querySelector('.quantity__btn--minus').classList.remove("disabled")
    }
  })

  //plus button
  document.querySelector('.quantity__btn--minus').addEventListener("click", function() {

    valueCount = document.querySelector('.quantity__input').value;

    valueCount--;

    document.querySelector('.quantity__input').value = valueCount;

    if (valueCount === 1) {
      document.querySelector('.quantity__btn--minus').setAttribute("disabled", "disabled")
    }

  })


  let thumbnails = document.getElementsByClassName('main-product__thumbnail-img')
  let activeImages = document.getElementsByClassName('active')

  for (let i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function(){
      console.log(activeImages)

      if (activeImages.length > 0){
        activeImages[0].classList.remove('active')
      }

      this.classList.add('active')
      document.querySelector('.main-product__featured-img').src = this.src
    })
  }

  let buttonRight = document.getElementById('slideRight');
  let buttonLeft = document.getElementById('slideLeft');

  buttonLeft.addEventListener('click', function(){
    document.querySelector('.slider').scrollLeft -= 180
  })

  buttonRight.addEventListener('click', function(){
    document.querySelector('.slider').scrollLeft += 180
  })


  /* ---------------------------------------------------- */
  /* ----- ACCORDION ----- */
  /* ---------------------------------------------------- */

  const accordion = document.querySelector('.main-desc__accordion');

  accordion.addEventListener('click', e => {
    if (e.target.className === "main-desc__accordion-title") {
      const itemTitle = document.querySelectorAll('.main-desc__accordion-title');
      itemTitle.forEach(x => x.nextElementSibling.classList.remove('main-desc__accordion-content--open'));
      e.target.nextElementSibling.classList.add('main-desc__accordion-content--open');
    }
  });


})