import testimonials from "./data.js";
const testimonialSection = document.querySelector(".testimonialItemContainer");

console.log("Working");

const DisplayTestimonialList = function () {
  let newArr = testimonials.map((customer, i) => {
    let html = `
    <div class="carousel-item ${i === 0 ? "active" : ""}">
     <div class="container">
       <div class="row">
         <div class="col-md-10 mx-auto">
           <div class="box">
             <div class="img-box">
               <img src="images/testimonialImage.jpeg" alt="" class="testimonialImage">
             </div>
             <div class="detail-box">
               <div class="client_info">
                 <div class="client_name">
                   <h5>                   
                       ${customer.name}
                   </h5>
                   <h6>
                     Customer
                   </h6>
                 </div>
                 <i class="fa fa-quote-left" aria-hidden="true"></i>
               </div>
               <p>
                ${customer.testimonial} 
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
`;
    return html;
  });

  testimonialSection.innerHTML = newArr.join("");
};

DisplayTestimonialList();
