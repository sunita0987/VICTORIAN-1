// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });
// $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });
				
// const accordionContent = document.querySelectorAll(".accordion-content");

// accordionContent.forEach((item,index)=>{
//     let header = item.querySelector("header");
//     header.addEventListener("click", ()=>{
//         item.classList.toggle("is-open");

//         let description = item.querySelector(".accordion-content-description");
//         if(item.classList.contains("is-open")){
//             description.style.height=`${description.scrollHeight}px`; 
//             item.querySelector("i").classList.replace("fa-plus","fa-minus");
//         }else{
//             description.style.height = "0px";
//             item.querySelector("i").classList.replace("fa-minus","fa-plus");
//         }
//         // function to pass the index number of clicked header
//         removeOpenedContent(index); 
//     })
// })

// function removeOpenedContent(index){
//     accordionContent.forEach((item2,index2)=>{
//         if(index != index2){
//             item2.classList.remove("is-open");
//             let descrip = item2.querySelector(".accordion-content-description");
//             descrip.style.height="0px";
//             item2.querySelector("i").classList.replace("fa-minus","fa-plus");
//         }
//     })
// }

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        document.querySelectorAll('.accordion-content').forEach(item => {
          item.style.maxHeight = null;
        });
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  $(document).ready(function () {
    $('.slider').slick({
      dots: true, // Enables navigation dots
      infinite: true, // Loop through slides infinitely
      speed: 800, // Transition speed
      slidesToShow: 3, // Number of slides visible at once
      slidesToScroll: 1, // Number of slides to scroll at once
      autoplay: true, // Autoplay the slides
      autoplaySpeed: 3000, // Speed of autoplay
      arrows: true, // Enables next/prev arrows
      responsive: [
        {
          breakpoint: 1024, // Adjust for tablet devices
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Adjust for mobile devices
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });