
import StatCard from "./StateCard";

function State() {
const States = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
    number: "150+",
    title: "Happy Clients",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    number: "80+",
    title: "Projects Completed",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    number: "12",
    title: "Awards Won",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    number: "5+",
    title: "Years Experience",
  },
];
  return (
 <div className="state-section">
  <div className="row justify-content-center align-items-center">
    {States.map((item, index) => (
      <div className="col-lg-3 col-md-6 col-12" key={index}>
        <StatCard
          icon={item.icon}
          number={item.number}
          title={item.title}
        />
      </div>
    ))}
  </div>
</div>

  );
}

export default State;