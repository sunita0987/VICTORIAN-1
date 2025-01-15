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