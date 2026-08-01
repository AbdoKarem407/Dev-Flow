function Hero() {
  return (
    <section
      className="hero"
      id="Home"
      style={{
        backgroundImage: "url(bag.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "40px",
        color: "white",
        
      }}
    >
      <div  className="hero">
     <h1 className="hero-title">
  Build Modern Software <br />
For <span>Your Business</span>

</h1>
<p>
    We help startups and companies build powerful digital <br />
products that drive growth and deliver real value.
</p>
<div className="hero-sumbit">
<a href=""><button  className="hero-btn1">Get Started</button></a>
<a href=""><button  className="hero-btn2">View Projects</button></a>
</div>
</div>
    </section>
   
  );
}

export default Hero;
