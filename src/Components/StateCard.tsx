interface StateCard {
  icon: string;
  title: string;
 number: string;
}

function StatCard({
  icon,
  title,
  number,
}: StateCard) {
    
  return (
    <>

    <div className="state-card">
      <img src={icon} alt={title} />
      <div className="state-dec">
  <h3>{number}</h3>
      <p>{title}</p>
</div>
    

    </div>

  
    </>
  );
}
export default StatCard;