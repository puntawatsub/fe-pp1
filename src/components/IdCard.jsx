import "../style/idcard.css";
import PropTypes from "prop-types";

const IdCard = ({
  firstName,
  lastName,
  gender,
  height,
  birth,
  picture,
  ...rest
}) => {
  return (
    <div {...rest} className="card">
      <img className="image" src={picture}></img>
      <div className="textDiv">
        <div className="idContent">
          <a>First name:</a>
          {firstName}
        </div>
        {/* <p>John</p> */}
        <div className="idContent">
          <a>Last name:</a>
          {lastName}
        </div>
        <div className="idContent">
          <a>Gender:</a>
          {gender}
        </div>
        <div className="idContent">
          <a>Height:</a>
          {height / 100}m
        </div>
        <div className="idContent">
          <a>Birth:</a>
          {birth.toDateString()}
        </div>
      </div>
    </div>
  );
};

IdCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.number,
  birth: PropTypes.any,
  picture: PropTypes.string,
};

export default IdCard;
