
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <>
    <div className="service-card">
      <img src={icon} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <a className="state-link" href="#" style={{textDecoration:"none"}}>Read More → </a>
    </div>

    
    </>
  );
}


export default ServiceCard;