const toCelsius = inFahr => {
  const inCels = inFahr - 273.15;
  const roundDegree = Math.round(inCels);
  return roundDegree;
};

export default toCelsius;
