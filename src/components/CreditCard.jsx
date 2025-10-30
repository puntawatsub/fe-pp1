{
  /* <CreditCard
        type="Visa"
        number="0123456789018875"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      /> */
}

import visa from "../assets/images/visa.png";
import master from "../assets/images/master.png";

const CardImg = ({ type }) => {
  if (type === "Visa") {
    return (
      <img
        style={{
          height: "1.4rem",
        }}
        src={visa}
      ></img>
    );
  } else if (type === "Master Card") {
    return (
      <img
        style={{
          height: "1.4rem",
        }}
        src={master}
      ></img>
    );
  }
};

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        height: "10rem",
        width: "20rem",
        margin: ".5rem",
        padding: "1rem",
        color: `${color}`,
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
          margin: ".2rem",
        }}
      >
        <CardImg type={type} />
      </div>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: ".7rem",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "3.2rem",
              marginRight: "0.5rem",
            }}
          >
            ···· ···· ····
          </div>{" "}
          {String(number).slice(-4)}
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignSelf: "flex-start",
            paddingTop: "1rem",
          }}
        >
          <div style={{ flexDirection: "row", display: "flex" }}>
            Expires {expirationMonth}/{String(expirationYear).slice(-2)}
            <div style={{ paddingLeft: "1rem" }}>{bank}</div>
          </div>
          <div style={{ paddingTop: ".15rem" }}>{owner}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
