const testimonialSection = document.querySelector(".testimonialItemContainer");

const testimonialCustomers = [
  {
    name: "Paulette M",
    testimonial:
      "Chris renovated our mainfloor half bathroom, ontop of the professionalism, quick turn around and expertise, he worked within our budget and gave us the finish we imagined.",
  },
  {
    name: "Cheryl C",
    testimonial:
      "We renovated our master bathroom, full tub year out to Kerbed shower pan and sliding glass door. From estimate to hangover we were very impressed with Chris and his team",
  },
  {
    name: "Graham P",
    testimonial:
      "Service is second to none, would recommend and will recommend to anyone needed trade work",
  },
  {
    name: "Lisa K",
    testimonial:
      "Life saver !! We called Chris with settlement cracks all over our main floor ceiling, with guests only a few days away from visiting Chris managed to accomodate us in a hotel close by while he retexture our main floor.",
  },
  {
    name: "Kevin S",
    testimonial:
      "Don’t go elsewhere. Chris can handle the planning right to handover. It was great to consolidate the full scope with one man.",
  },
  {
    name: "Sarah V",
    testimonial: "Our kitchen looks fabulous after refinishing !!!",
  },

  {
    name: "Kathleen D",
    testimonial:
      "Chris came out shortly after our call. Our property was up for showing and we wanted I paint the walls and trims before the potential buyers showed up in a few days. We gave him the keys while we managed the last of moving into our new home and returned a few days later to a fresh home with none of the wear and tear from kids showing !!",
  },

  {
    name: "Scott D",
    testimonial:
      "The BBQ looks great out on my new deck can’t wait till he returns for the pergola.",
  },

  {
    name: "Ian K",
    testimonial:
      "We were sent Chris from the insurance adjusters to repair out poly B replacement, we would never know our home was full of holes and the walls and ceilings, you rock chris !!!",
  },

  {
    name: "Jeanluis D",
    testimonial:
      "Chris was suggested to us for a custom commission hardwood piece, what he provided us was a masterpiece and will stay in the family for generations.",
  },

  {
    name: "Judy P",
    testimonial:
      "We are seniors and have been using Chris for years, from small maintenance tasks to larger scale home improvements. Always left impressed.",
  },

  {
    name: "Linzi C",
    testimonial:
      "Make sure you stock up on the tea, him and the guys drink plenty while working hard !!!",
  },
];

const DisplayTestimonialList = function () {
  let newArr = testimonialCustomers.map((customer) => {
    let html = `
    <div class="carousel-item active">
     <div class="container">
       <div class="row">
         <div class="col-md-10 mx-auto">
           <div class="box">
             <div class="img-box">
               <img src="images/client.jpg" alt="">
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

  testimonialSection.innerHTML = newArr.join(" ");
};

console.log(testimonialSection);

DisplayTestimonialList();
