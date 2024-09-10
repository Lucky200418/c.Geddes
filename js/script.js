import testimonials from "./data.js";
import projects from "./projectsdata.js";
const testimonialSection = document.querySelector(".testimonialItemContainer");
const projectsSection = document.querySelector(".projectsContainer");

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

  testimonialSection ? (testimonialSection.innerHTML = newArr.join("")) : "";
};

DisplayTestimonialList();

// Get the current HTML page name
var currentPage = window.location.pathname.split("/").pop();

// Log the current page to the console
console.log("You are currently on:", currentPage);

const DisplayProjects = function () {
  let newArr = projects.map((project) => {
    let html = `
         <div class="item ${project.category}">
            <div class="box">
              <div class="img-box">
                <img src="${project.ImgUrl}" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                 ${project.name}
                </h5>
                <p>
                 ${project.description}
                </p>
              </div>
            </div>
          </div>
`;
    return html;
  });

  projectsSection ? (projectsSection.innerHTML = newArr.join("")) : "";
};

DisplayProjects();
