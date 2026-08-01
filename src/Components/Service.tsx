

import ServiceCard from "./ServiceCard";

function Service() {
const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    title: "Web Development",
    description: "We build modern and responsive websites.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/545/545245.png",
    title: "Mobile Apps",
    description: "Cross-platform mobile app development.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    title: "UI / UX Design",
    description: "Creative and user-friendly interface designs.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
    title: "SEO Optimization",
    description: "Boost your website ranking on search engines.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    title: "Cyber Security",
    description: "Protect your business with advanced security.",
  },
];
  return (
    <section id="Service" className="container py-5  ">
      <h6 className="text-center mb-4" style={{fontWeight:"bolder" }}><span>OUR SERVICES</span></h6>
      <h2 className="text-center mb-4"  style={{fontWeight:"bolder" }}>What We DO</h2>
     

      <div className="service-section row g-5">
        {services.map((service, index) => (
          <div className="col-12 col-lg-2 col-md-4 "  key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;