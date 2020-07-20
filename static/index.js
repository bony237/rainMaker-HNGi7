const formBoth = document.querySelectorAll("form");

formBoth.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email_register = form.querySelector("[name='email']").value;
    console.log(email_register);

    if (email_register !== "") {
      const aRequest = new XMLHttpRequest();
      aRequest.onload = function () {
        const feedback = aRequest.responseText;
        giveAnswer(feedback);
      };
      aRequest.open("POST", "/email_register");

      const theForm = new FormData();
      theForm.append("email", email_register);

      aRequest.send(theForm);
    }

    form.reset();
  });
});

function giveAnswer(feedback) {
  document
    .querySelectorAll("#subscription_answer .answer")
    .forEach((divAnswer) => {
      console.log(feedback);
      console.log(typeof feedback);

      if (divAnswer.classList.contains(feedback)) {
        divAnswer.classList.remove("d-none");
        divAnswer.classList.add("d-block");
      } else {
        divAnswer.classList.remove("d-block");
        divAnswer.classList.add("d-none");
      }
    });

  $("#subscription_answer").modal("show");
}

/**
 * Swiper code
 */

var swiper_section4 = new Swiper("#section_4 .swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: "#section_4 .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#section_4 .swiper-button-next",
    prevEl: "#section_4 .swiper-button-prev",
  },
});

var swiper_ready = new Swiper("#ready .swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*
  Anime js code
 */

var lastWindowScroll = 0;
const headerElm = document.querySelector('#header');
const heightHeader = headerElm.offsetHeight;

 window.onscroll = function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if(scrollTop > lastWindowScroll) {
    
    headerElm.style.top=`-${heightHeader}px`;
   }
   else {
      headerElm.style.top='0px';
      if (scrollTop < 40 ) {
        headerElm.style.backgroundColor = 'white';
      }
      else {
        headerElm.style.backgroundColor = 'rgba(252, 252, 252)';
      }
      
   }
   lastWindowScroll = scrollTop;
 }
