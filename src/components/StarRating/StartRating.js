import React from 'react';



const StarRating = ({rate, handleRate}) => {
    function stars(r) {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            if(i <= r) {
                star.push(
                    <span
                    key= {i}
                    onClick={() => handleRate(i)}
                    style={{color : 'rgb(255, 217, 0)'}}
                    >
                        ★
                    </span>);
            } else {
                star.push(<span
                    key={i}
                    onClick={() => handleRate(i)}
                    style={{color : 'rgba(255, 217, 0, 0.5)'}}>☆</span>);
            }
        }
            return star;
    }
    return(
        <div>
            {stars(rate)}
        </div>
    );
};

StarRating.defaultProps= {
    rate : 1,
    handleRate: (index) => {console.log(index)}
}

export default StarRating;