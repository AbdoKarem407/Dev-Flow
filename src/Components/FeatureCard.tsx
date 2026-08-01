
import Feature from "./Feature";

function FeatureCard() {
const Featured = [
  {
    icon: "https://images.openai.com/static-rsc-4/SQdPW8oexyj9HhwTwdhTxqZHcIIRsg2F-W3iuy5KEuW4wsAkTEowHCKKf_sCcVxpxQC0pBb_wW2zFCdRSkTc9AnjoGTS4Is8P7_9wKi5_Fa7tM4ozZ-YQ8cNnShjG8XI_uo6M8g4rz309-fD-gbCekxylrR-HMss6FXHoVE1YLA?purpose=inline",
    description: "A productivity app to manage tasks and teams efficiently.",
    title: "Task Manager App",
    text: "Web App",
   
  },
  {
    icon: "https://images.openai.com/static-rsc-4/WorHQvgNjzxtISz8N-bhvNYa7wId6U1cccUiTuqd4hAyyyPpvnBPTKvDVjd-L7DhxQF0O3nOqi2Z-495Zyvicuj7Dk9ev6QSLd3oIWGgShgzp2roSpFvSofnD8KYR6fFV4XrgAflhqCVUxMiK3vJ7OmFbuJaCteEnBOhbeuY9AM?purpose=inline",
    description: "Analytics dashboard for finance and reporting.",
    title: "FinTrack Dashboard",
    text: "Web App",
    
  },
  {
    icon: "https://images.openai.com/static-rsc-4/c5DrkCiUxFIoiyCf6B-kx_HuX_VzJpG7SkJRV2-bOVHJFOqlafZbNcUKomRtI2TFNfi4R82kbvMzhzPpRjWFClMaf9ezGHzj5xUPFzSHsKvAC1L6mZ1YdX_9FwVSKBDEyQI2Yq1Xi0htHPkzgOKwq3jh44WPXTpDIFKdm9I6dIAdznkqIVWSVK7lr4FTkRnf?purpose=fullsize",
    description: "E-commerce mobile app with smooth and secure shopping.",
    title: "ShopEase Mobile App",
    text: "Mobile App",
    
  },
  {
    icon: "https://images.openai.com/static-rsc-4/QDsZGw1_KD5Qz7sz_XnamRQpvSJyUYO20BygLqaTe5kNPVjHQjdp6odPZ8osJf2zD3LbvR8mqB93-s36wbjKCT2YSp7JOjw_06Z1Yesa0btpqhr8aTt9a20pDPa1bsoGyDEyi6VasQGou72fzS88GkSQnC05zLxb0_AfJ3nfbLRa9OEUN8McgYB68IKulKPd?purpose=fullsize",
    description: "Modern website design for a software company.",
    title: "DevFlow Website",
    text: "UI/UX Design",
   

  },
];
  return (
    <>
    <div id="Project" className="feature-section">
        <div className="text-feature">
         <h6 className="text-center mb-3 " style={{fontWeight:"bolder" }}><span>OUR WORK</span></h6>
      <h2 className="text-center mb-3"  style={{fontWeight:"bolder" }}>Featured Projects</h2>
     </div>
 
  <div className="feature-card row justify-content-center align-items-center">
    {Featured.map((item, index) => (
      <div className="col-lg-3 col-md-6 col-12" key={index}>
        <Feature
          icon={item.icon}
          description={item.description}
          title={item.title}
          text={item.text} 
        />
       
      </div>
      
    ))}
  </div>
</div>
<div className="feature-btn"> <button className="feat-btn">View All Projects</button></div>

</>
  );
}

export default FeatureCard;