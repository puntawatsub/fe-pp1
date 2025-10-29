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
        height,
      }}
    >
      <img src={visa}></img>
    </div>
  );
};

export default CreditCard;
