$(function () {
    $('.menu-open').click(function () {
        $('.menu').toggleClass('show-menu')
    })
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.background');
  for (let elm of elements) {
    observer.observe(elm);
  }


  function onEntryy(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-shows');
      }
    });
  }
  let optionss = { threshold: [0.5] };
  let observerr = new IntersectionObserver(onEntryy, optionss);
  let elementss = document.querySelectorAll('.backgrounds');
  for (let elm of elementss) {
    observerr.observe(elm);
  }


  function onEntryyy(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-showss');
      }
    });
  }
  let optionsss = { threshold: [0.5] };
  let observerrr = new IntersectionObserver(onEntryyy, optionsss);
  let elementsss = document.querySelectorAll('.align__horizontally');
  for (let elm of elementsss) {
    observerrr.observe(elm);
  }
 

  
  

  

  

  