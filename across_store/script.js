"use strict";
//alert
document.addEventListener("DOMContentLoaded", function() {
  const myAlert = localStorage.getItem("myAlert");

  if (!myAlert) {
      alert("Hello! It's not an official website for @across_store, just a portfolio project for Liza G. Feel free to contact @across_store on Instagram. All photo credits: @across_store.");
        localStorage.setItem("myAlert", "true");
  }
});



//general
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len =elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

// navbar toggler 
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNav);

// header
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
})

// buttons: quick, prev, and next
document.addEventListener('DOMContentLoaded', function() {
  const quickBtns = document.querySelectorAll('.quick-btn');
  const quickViewContainers = document.querySelectorAll('.quick-view-container');
  const prevBtns = document.querySelectorAll('.prev-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  
  quickBtns.forEach((btn, index) => {
  const quickViewContent = quickViewContainers[index].querySelector('.quick-view-content');
  const imageWrappers = quickViewContent.querySelectorAll('.img-wrapper');
  let currentIndex = 0;

  function showImage(index) {
    imageWrappers.forEach((wrapper, i) => {
      if (i === index) {
         wrapper.style.display = 'block';
      } else {
        wrapper.style.display = 'none';
      }
      });
    }
    function prevImage() {
      currentIndex = (currentIndex - 1 + imageWrappers.length) % imageWrappers.length;
      showImage(currentIndex);
    }
    function nextImage() {
      currentIndex = (currentIndex + 1) % imageWrappers.length;
      showImage(currentIndex);
    }
    btn.addEventListener('click', function() {
      quickViewContainers[index].style.display = 'flex';
      currentIndex = 0;
      showImage(currentIndex);
    });

    prevBtns[index].addEventListener('click', prevImage);
    nextBtns[index].addEventListener('click', nextImage);

    quickViewContainers[index].addEventListener('click', function(e) {
      if (e.target === quickViewContainers[index]) {
        quickViewContainers[index].style.display = 'none';
      }
    });
    showImage(currentIndex);
  });
});

// load-more btn, hide btn
document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const hideBtn = document.getElementById('hideBtn');
  const hideContainer = document.getElementById('hideContainer');
  const featuredHiddenContainer = document.querySelector('.featured-hidden');

  if (loadMoreBtn && hideBtn && hideContainer && featuredHiddenContainer) {
    loadMoreBtn.addEventListener('click', function() {
      if (featuredHiddenContainer.style.display === 'none') {
        featuredHiddenContainer.style.display = 'block';
        hideContainer.style.display = 'block';
        loadMoreBtn.style.display = 'none'; 
      } else {
        featuredHiddenContainer.style.display = 'none';
        hideContainer.style.display = 'none'; 
        loadMoreBtn.style.display = 'block'; 
      }
    });

    hideBtn.addEventListener('click', function() {
      featuredHiddenContainer.style.display = 'none';
      hideContainer.style.display = 'none'; 
      loadMoreBtn.style.display = 'block';
    });
  }
});


//hovering elements

document.addEventListener('DOMContentLoaded', function() {
  const shopElements = document.querySelectorAll('.shop-element');

 function setInitialImage(shopImage, dataImage) {
    shopImage.style.backgroundImage = `url(/images/${dataImage}.jpg)`;
  }
  function handleImageChange(shopImage, dataImage) {
    shopImage.style.backgroundImage = `url(/images/${dataImage}-hover.jpg)`;
  }
  shopElements.forEach(element => {
    const shopImage = element.querySelector('.shop-image');
    const dataImage = element.getAttribute('data-image');

    if (shopImage) {
        setInitialImage(shopImage, dataImage);
        element.addEventListener('mouseenter', () => {
        handleImageChange(shopImage, dataImage);
      });
      element.addEventListener('touchstart', () => {
        handleImageChange(shopImage, dataImage);
      });

       element.addEventListener('mouseleave', () => {
        setInitialImage(shopImage, dataImage); 
      });
      element.addEventListener('touchend', () => {
        setInitialImage(shopImage, dataImage);
      });
    }
  });
});