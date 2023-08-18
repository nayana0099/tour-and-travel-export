import "./HeroStyles.css";

function Hero(props) {
  //multiple components in return use<></>/div
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimg" src={props.heroimg} />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}
export default Hero;
