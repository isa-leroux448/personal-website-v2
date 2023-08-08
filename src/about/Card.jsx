import Header from "../components/Header";
import sample from "../assets/sample.png"

const Card = ({ image, text, top, right}) => {
    return (
      <div className="card" style={{position: 'absolute', top, right}}>
        <Header hasExit={true} />
        <img style={{height: '175px', marginTop: '5px'}} src={sample}/>
        <p style={{fontWeight: 600}}>{text}</p>
      </div>
    );
  };
  
export default Card;