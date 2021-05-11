import "./SeasonDisplay.css";

const seasonConfig = {
  Summer: {
    displayText: "So Hottt !",
    seasonIcon: "sun outline",
  },
  Winter: {
    displayText: "It's Freezing right here.. .",
    seasonIcon: "snowflake outline",
  },
};

const getSeason = (lat, mon) => {
  if (mon >= 2 && mon <= 9) {
    return lat >= 0 ? "Summer" : "Winter";
  } else {
    return lat >= 0 ? "Winter" : "Summer";
  }
};

export default (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { displayText, seasonIcon } = seasonConfig[season];
  // object destructure to assign displayText and seasonIcon according to season

  return (
    <div className={`SeasonDisplay ${season}`}>
      <i className={`${seasonIcon} loading icon massive icon-left`} />
      <h1>{displayText}</h1>
      <i className={`${seasonIcon} loading icon massive icon-right`} />
    </div>
  );
};
