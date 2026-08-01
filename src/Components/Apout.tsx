interface ApoutCardProps {
  icon: string;
  title: string;
  description: string;
  text: string;
}

interface ApoutProps {
  items: ApoutCardProps[];
}

function Apout({ items }: ApoutProps) {
  return (
<div  className="carousel-inner">

  <div className="carousel-item active">
    <div className="row g-4">

      {items.slice(0, 3).map((item, index) => (
        <div className="col-lg-4 col-md-6 col-12" key={index}>
          <div className=" about-card h-100">

            <div className="Apout-card">

              <div className="quote">
                ❝
              </div>

              <p className="description">
                {item.description}
              </p>

              <div className="client">
                <img src={item.icon} alt={item.title} />

                <div>
                  <h5 className="title-apout">{item.title}</h5>
                  <span className="name-apout">{item.text}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      ))}

    </div>
  </div>

</div>
  );
}

export default Apout;