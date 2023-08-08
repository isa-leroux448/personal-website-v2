import Header from "../components/Header";

const Welcome = () => {
    return (
        <div className="welcome">
            <Header hasExit={true} />
            <p className="welcome-text">Welcome to my website! Scroll down to learn more about me.</p>
        </div>
    );
}
export default Welcome;