import Apout from "./Apout";

function ApoutCard() {
  const aboutData = [
    {
      icon: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "DevFlow delivered a high-quality product on time. Their team is professional, responsive, and easy to work with.",
      title: ": CEO, TechCorp",
      text: "John Carter",
    },
    {
      icon: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "They understood our needs perfectly and built a solution that exceeded our expectations.",
      title: ": Product Manager, SaaSPro",
      text: "Sarah Wilson",
    },
    {
      icon: "https://randomuser.me/api/portraits/men/46.jpg",
      description: "Great communication, clean code, and amazing support throughout the entire project.",
      title: ": Founder, Startly",
      text: "Michael Brown",
    },
    {
      icon: "https://images.openai.com/static-rsc-4/QDsZGw1_KD5Qz7sz_XnamRQpvSJyUYO20BygLqaTe5kNPVjHQjdp6odPZ8osJf2zD3LbvR8mqB93-s36wbjKCT2YSp7JOjw_06Z1Yesa0btpqhr8aTt9a20pDPa1bsoGyDEyi6VasQGou72fzS88GkSQnC05zLxb0_AfJ3nfbLRa9OEUN8McgYB68IKulKPd?purpose=fullsize",
      description: "Modern website design for a software company.",
      title: ": DevFlow Website",
      text: "UI/UX Design",
    },
  ];

  return (
    <>
      <div id="Apout"  className="apout-section">

        <div className="text-apout">
          <h6
            className="text-center mb-3"
            style={{ fontWeight: "bolder" }}
          >
            <span >TESTIMONIALS</span>
          </h6>

          <h2
            className="text-center mb-3"
            style={{ fontWeight: "bolder" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="row justify-content-center align-items-center">
          <Apout items={aboutData} />
        </div>

      </div>
    </>
  );
}

export default ApoutCard;