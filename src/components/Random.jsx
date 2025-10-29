//Creating a random component with 2 props min and max

import "../style/random.css";

function Random({min, max}) {
    return(
        <div>
            <div className="random-value"><p> Random Value between {min} and {max} ={">"}{Math.floor(Math.random() * (max - min + 1)) + min}</p></div>
        </div>
    )

}
export default Random;