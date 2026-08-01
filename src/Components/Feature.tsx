interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
 text:string;

}

function Feature({
  icon,
  title,
  description,
  text,
  
}: FeatureCardProps) {
  return (
    <>
    <div className="card" >
      <img src={icon} className="feature-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
<div className="feature-url"> <span>{text}</span>
 </div>
 
        <p className="card-text">
          {description}
        </p>
     
     
      </div>
   </div>
    </>
  );
}

export default Feature;