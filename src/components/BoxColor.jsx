function BoxColor({ r, g, b }) {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g},${b})`,
    height: "200px",
    weight: "200px",
    textAlign :'center',
    justifyContent: 'center',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    margin:'.5rem',
    border : '2px solid black'
    

  };

  const hexaDecimal = (value) => {
    const tohexa = value.toString(16);
    return tohexa.length === 1 ? "0" + tohexa : tohexa;
  };

  function hexaColor(r, g, b) {
    return `#${hexaDecimal(r)}${hexaDecimal(g)}${hexaDecimal(b)}`;
  }

  return (
    <div style={boxStyle}>
      <div>
        rgb({r},{g},{b})
      </div>
      <div>{hexaColor(r, g, b)}</div>
    </div>
  );
}
export default BoxColor;
