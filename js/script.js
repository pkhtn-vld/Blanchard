document.addEventListener("DOMContentLoaded", () => {
  //burger

  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("is-active");
  });
  document.querySelector("#back").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("is-active");
  });
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#menu").setAttribute("aria-hidden", "false");
  });
  document.querySelector("#back").addEventListener("click", function () {
    document.querySelector("#menu").setAttribute("aria-hidden", "true");
  });

  const burgerMenu = document.querySelector(".header__menu");

  window.addEventListener("click", (event) => {
    if (!burgerMenu.contains(event.target) && !burger.contains(event.target))
      burgerMenu.classList.remove("is-active");
  });

  //search

  const searchClose = document.querySelector(
    ".header__search-input-mobile-back"
  );
  const searchInput = document.querySelector(".header__search-input-mobile");
  const logo = document.querySelector(".header__logo-img");
  const burger = document.querySelector(".header__burger");
  const searchBtn = document.querySelector(".header__search-btn-top");
  const menu = document.querySelector(".header__top-menu");
  const search = document.querySelector(".header__search-top");
  const contSearch = document.querySelector(
    ".header__search-uncover-container"
  );

  const fsearch = () => {
    if (document.documentElement.clientWidth <= 750) {
      searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        contSearch.classList.add("is-active");
        searchClose.classList.add("is-active");
        searchInput.classList.add("is-active");
        searchBtn.classList.add("is-active");
        logo.classList.add("is-active");
        burger.classList.add("is-active");
        menu.classList.add("is-active");
      });
    }

    if (
      document.documentElement.clientWidth <= 1003 &&
      document.documentElement.clientWidth > 750
    ) {
      searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        logo.classList.add("disabled");
        burger.classList.add("disabled");
        searchInput.classList.add("is-active");
        searchClose.classList.add("is-active");
        searchBtn.classList.add("is-active");
        menu.classList.add("is-active");
      });
    }
    if (document.documentElement.clientWidth > 1003) {
      searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        searchBtn.classList.add("is-active");
        searchInput.classList.add("is-active");
        logo.classList.add("is-active");
      });
    }

    window.addEventListener("click", (event) => {
      if (!search.contains(event.target))
        searchInput.classList.remove("is-active");
      if (!search.contains(event.target))
        searchBtn.classList.remove("is-active");
      if (!search.contains(event.target))
        searchClose.classList.remove("is-active");
      if (!search.contains(event.target)) logo.classList.remove("is-active");
      if (!search.contains(event.target)) logo.classList.remove("disabled");
      if (!search.contains(event.target)) burger.classList.remove("disabled");
      if (!search.contains(event.target)) menu.classList.remove("is-active");
      if (!search.contains(event.target))
        contSearch.classList.remove("is-active");
      if (!search.contains(event.target)) burger.classList.remove("is-active");
      if (!search.contains(event.target)) menu.classList.remove("is-active");
    });
  };

  //dropdown

  const dropdownLink = document.querySelectorAll(
    ".header__bottom-menu-tab-btn"
  );
  const dropdownSubmenu = document.querySelectorAll(
    ".header__bottom-menu-tab-content"
  );
  const dropdownArrow = document.querySelectorAll(
    ".header__bottom-menu-tab-arrow"
  );

  dropdownLink.forEach((el, index) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      const dropdownSubmenuClassList = dropdownSubmenu[index].classList;
      if (dropdownSubmenuClassList.contains("tab-content-active")) {
        dropdownSubmenuClassList.remove("tab-content-active");
        dropdownArrow[index].classList.remove("rotate-arrow");
      } else {
        dropdownSubmenu.forEach((el) =>
          el.classList.remove("tab-content-active")
        );
        dropdownSubmenuClassList.add("tab-content-active");
        dropdownArrow.forEach((el) => el.classList.remove("rotate-arrow"));
        dropdownArrow[index].classList.add("rotate-arrow");
      }
    });
  });

  window.addEventListener("click", (event) => {
    dropdownArrow.forEach((el) => {
      if (el.contains(event.target)) {
        let event = new Event("click");
        dropdownLink.dispatchEvent(event);
      }
    });
  });

  window.onclick = function (event) {
    if (!event.target.matches(".header__bottom-menu-tab-btn")) {
      let dropdowns = document.getElementsByClassName(
        "header__bottom-menu-tab-content"
      );
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("tab-content-active")) {
          openDropdown.classList.remove("tab-content-active");
        }
      }
    }
    if (!event.target.matches(".header__bottom-menu-tab-btn")) {
      let dropArrows = document.getElementsByClassName(
        "header__bottom-menu-tab-arrow"
      );
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains("rotate-arrow")) {
          openDropdown.classList.remove("rotate-arrow");
        }
      }
    }
  };

  // scroll to anchor link

  const anchors = document.querySelectorAll('.link-box a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  //sector choices

  const element = document.querySelector("select");
  const choices = new Choices(element, {
    searchEnabled: false,
    position: "bottom",
    itemSelectText: "",
  });

  //modal

  const modal = new GraphModal();

  //tooltip

  tippy(".tooltip-one", {
    content:
      "Пример современных тенденций - современная методология разработки",
    duration: 0,
    arrow: true,
    delay: [100, 400],
    offset: [0, 13],
    placement: "top",
    theme: "tomato",
    maxWidth: 264,
    trigger: "focusin",
  });

  tippy(".tooltip-two", {
    content:
      "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    duration: 0,
    arrow: true,
    delay: [100, 400],
    placement: "top",
    offset: [0, 11],
    theme: "tomato",
    maxWidth: 264,
    trigger: "focusin",
  });

  tippy(".tooltip-three", {
    content: "В стремлении повысить качество",
    duration: 0,
    arrow: true,
    delay: [100, 400],
    placement: "top",
    offset: [0, 12],
    theme: "tomato",
    maxWidth: 232,
    trigger: "focusin",
  });

  // показать события

  const eventsItem = document.querySelectorAll(".developments__swiper-slide");
  const allEventsBtn = document.querySelector(".developments__item-add-btn");
  const eventHiddenTablet = document.querySelector(".developments-hide");

  const showMore = () => {
    allEventsBtn.addEventListener("click", () => {
      eventsItem.forEach((el) => {
        el.classList.remove("developments-hidden");
      });

      allEventsBtn.classList.add("developments-hidden");
    });
  };

  // скрыть события
  const eventHidden = () => {
    if (window.innerWidth <= 1000) {
      eventHiddenTablet.classList.add("developments-hidden");
    } else {
      eventHiddenTablet.classList.remove("developments-hidden");
    }

    if (window.innerWidth <= 750) {
      eventsItem.forEach((el) => {
        el.classList.remove("developments-hide");
        el.classList.remove("developments-hidden");
      });
    }
  };

  eventHidden();
  showMore();
  fsearch();

  window.addEventListener("resize", () => {
    eventHidden();
    showMore();
    fsearch();
  });

  // ввод в поле Input только цифр

  document.querySelectorAll(".editions__price-input").forEach((el) => {
    el.onkeydown = function (e) {
      return !/^[А-Яа-яA-Za-z ]$/.test(e.key); // IE > 9
    };
    el.oninput = function () {
      if (this.value.length > 5) this.value = this.value.substr(0, 5); // в поле можно ввести только 5 символов
    };
  });

  // editions

  const editionsBtn = document.querySelector(".editions__btn");
  const editionsFormLabel = document.querySelectorAll(".editions__form-label");
  const editionsFormInput = document.querySelectorAll(".editions__form-input");
  const editionsBtnArrow = document.querySelector(".editions__btn-arrow");

  const showActiveCheckbox = () => {
    editionsFormInput.forEach((el) => {
      if (el.checked === true) {
        el.parentNode.classList.add("active");
      }
    });
  };

  const editionsAccordion = () => {
    editionsBtn.addEventListener("click", () => {
      editionsBtnArrow.classList.toggle("arrow-active");
      editionsFormLabel.forEach((el) => {
        el.classList.toggle("active");
        showActiveCheckbox();
      });
    });
  };

  const editionsCheck = () => {
    for (let i = 0; i < editionsFormInput.length; i++) {
      const el = editionsFormInput[i];
      el.addEventListener("change", () => {
        if (
          !el.checked &&
          !editionsBtnArrow.classList.contains("arrow-active")
        ) {
          el.parentNode.classList.remove("active");
        }

        showActiveCheckbox();
      });
    }

    showActiveCheckbox();
  };

  editionsAccordion();
  editionsCheck();

  //inputmusk + justValidate

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  new JustValidate(".contacts__request-form", {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 40,
        strength: {
          custom: "^[а-яА-ЯёЁ -]+$",
        },
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
    messages: {
      name: {
        required: "Как вас зовут?",
        // strength: "Недопустимый формат",
        strength: "Введите имя русскими буквами",
      },
      tel: {
        required: "Укажите ваш телефон",
        // function: "Недопустимый формат",
        function: "Введите номер в формате +7 (XXX)-XXX-XX-XX",
      },
    },
    submitHandler: function (form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Отправлено");
            new GraphModal().open("two");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      form.reset();
    },
  });

  //map

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.758994399112446, 37.604339337325946],
      zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }

  const projectsText = () => {
    if (document.documentElement.clientWidth <= 750) {
      document.querySelector(".projects__text-align").innerHTML = "-";
    }
  };
  projectsText();
});

// scroll to author in mobile version

function getParentElement(element, classParentElement) {
  while (element !== document.body) {
    if (element.classList.contains(classParentElement)) {
      return element;
    } else {
      element = element.parentElement;
    }
  }
}

const siteContainer = document.querySelector("body");

function scrollToArtist() {
  const accordionBtns = siteContainer.querySelectorAll(
    ".catalog__accordion__artist-btn"
  );
  if (window.innerWidth < 1001) {
    accordionBtns.forEach((accordionBtn) => {
      accordionBtn.addEventListener("click", smoothScrollToArtist);
    });
  } else {
    accordionBtns.forEach((accordionBtn) => {
      accordionBtn.removeEventListener("click", smoothScrollToArtist);
    });
  }
}

function smoothScrollToArtist(event) {
  event.preventDefault();
  const parentElement = getParentElement(event.target, "catalog__tabs-content");
  const artistCard = parentElement.querySelector(".catalog__artist");
  artistCard.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

scrollToArtist();

(() => {
  // tabs
  function tabs(btnTab, btnTabActive, content, contentActive) {
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(btnTab).forEach(function (tabsBtn) {
        tabsBtn.addEventListener("click", function (event) {
          event.preventDefault();
          const path = event.currentTarget.dataset.path;

          document.querySelectorAll(btnTab).forEach((element) => {
            element.classList.remove(btnTabActive);
          });
          tabsBtn.classList.add(btnTabActive);
          document.querySelectorAll(content).forEach(function (tabContent) {
            tabContent.classList.remove(contentActive);
          });
          document
            .querySelector(`[data-target="${path}"]`)
            .classList.add(contentActive);
        });
      });
    });
  }
  tabs(
    ".catalog__tabs-btn",
    "catalog__tabs-btn-active",
    ".catalog__tabs-content",
    "catalog__tabs-content-active"
  );
  tabs(
    ".accordion-france-link",
    "catalog__accordion__artist-btn--active",
    ".france-group",
    "artist-content-active"
  );
  tabs(
    ".accordion-germany-link",
    "catalog__accordion__artist-btn--active",
    ".germany-group",
    "artist-content-active"
  );
  tabs(
    ".accordion-italy-link",
    "catalog__accordion__artist-btn--active",
    ".italy-group",
    "artist-content-active"
  );
  tabs(
    ".accordion-rus-link",
    "catalog__accordion__artist-btn--active",
    ".rus-group",
    "artist-content-active"
  );
  tabs(
    ".accordion-belg-link",
    "catalog__accordion__artist-btn--active",
    ".belg-group",
    "artist-content-active"
  );

  // accordion
  $(function () {
    $(".catalog__accordion__list").accordion({
      collapsible: true,
      refresh: true,
      heightStyle: "content",
      active: 0,
    });
  });
})();

// gallary Slider

const gallarySlider = document.querySelector(".gallery__swiper-container");

let gallarySwiper = new Swiper(gallarySlider, {
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  slidersPerColumnFill: "row",
  grabCursor: true,

  breakpoints: {
    751: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1329: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

// developments Slider

const developmentsSlider = document.querySelector(
  ".developments__swiper-container"
);

let swiperDevelopments;

const mobileDevelopmentsSlider = () => {
  if (
    window.innerWidth <= 750 &&
    developmentsSlider.dataset.mobile == "false"
  ) {
    swiperDevelopments = new Swiper(developmentsSlider, {
      pagination: {
        el: ".developments__swiper-pagination",
        clickable: "true",
      },

      loop: true,
      slideClass: "developments__swiper-slide",
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    });

    developmentsSlider.dataset.mobile = "true";
  }

  if (window.innerWidth > 750) {
    developmentsSlider.dataset.mobile = "false";

    if (developmentsSlider.classList.contains("swiper-container-initialized")) {
      swiperDevelopments.destroy();
    }
  }
};

mobileDevelopmentsSlider();

window.addEventListener("resize", () => {
  mobileDevelopmentsSlider();
});

// editions Slider

const editionsSlider = document.querySelector(".editions__swiper-container");

let swiperEditions;
const desctopSlider = () => {
  if (window.innerWidth >= 751 && editionsSlider.dataset.desktop == "true") {
    swiperEditions = new Swiper(editionsSlider, {
      slideClass: "editions__swiper-slide",
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 2,
      grabCursor: true,
      pagination: {
        el: ".editions__swiper-pagination",
        type: "fraction",
      },

      navigation: {
        nextEl: ".editions__swiper-button-next",
        prevEl: ".editions__swiper-button-prev",
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      breakpoints: {
        751: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },

        1001: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 49,
        },

        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
        },

        1302: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },
    });

    editionsSlider.dataset.desktop == "false";
  }

  if (window.innerWidth <= 750) {
    editionsSlider.dataset.mobile = "false";

    if (editionsSlider.classList.contains("swiper-container-initialized")) {
      swiperEditions.destroy();
    }
  }
};

desctopSlider();

window.addEventListener("resize", () => {
  desctopSlider();
});

// projects Slider

const projectsSlider = document.querySelector(".projects__swiper-container");

let swiperProjects = new Swiper(projectsSlider, {
  slideClass: "projects__swiper-slide",
  pagination: {
    el: ".projects__swiper-pagination",
    type: "none",
  },

  navigation: {
    nextEl: ".projects__swiper-button-next",
    prevEl: ".projects__swiper-button-prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    751: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1001: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1351: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});
