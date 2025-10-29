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
  const dateToString = (date) => {
    let dayOfTheWeek = "";
    let monthName = "";
    switch (date.getDay()) {
      case 0:
        dayOfTheWeek = "Sun";
        break;
      case 1:
        dayOfTheWeek = "Mon";
        break;
      case 2:
        dayOfTheWeek = "Tue";
        break;
      case 3:
        dayOfTheWeek = "Wed";
        break;
      case 4:
        dayOfTheWeek = "Thu";
        break;
      case 5:
        dayOfTheWeek = "Fri";
        break;
      case 6:
        dayOfTheWeek = "Sat";
        break;
      default:
        dayOfTheWeek = "Invalid day";
        break;
    }

    switch (date.getMonth()) {
      case 0:
        monthName = "Jan";
        break;
      case 1:
        monthName = "Feb";
        break;
      case 2:
        monthName = "Mar";
        break;
      case 3:
        monthName = "Apr";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "Jun";
        break;
      case 6:
        monthName = "Jul";
        break;
      case 7:
        monthName = "Aug";
        break;
      case 8:
        monthName = "Sep";
        break;
      case 9:
        monthName = "Oct";
        break;
      case 10:
        monthName = "Nov";
        break;
      case 11:
        monthName = "Dec";
        break;
      default:
        monthName = "Invalid month";
        break;
    }

    return `${dayOfTheWeek} ${monthName} ${date.getDate()} ${date.getFullYear()}`;
  };

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
          {dateToString(birth)}
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
