import Header from "../components/Header";

const Name = ({ name, color, width, height, top, right }) => {
    return (
      <div className="name" style={{  top, right, backgroundColor: color, width, height }}>
        <Header hasExit={false} />
        <p className="name-text">{name}</p>
      </div>
    );
  };
  
export default Name;