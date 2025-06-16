import "./background.css";

export const Background = () => {
    return (
        <div className="decor-container">
            <div className="square top-left"></div>
            <div className="square top-right"></div>
            <div className="square bottom-left"></div>
            <div className="square bottom-right"></div>
            <div className="square pointers"></div>
        </div>
    );
};