const Rating = ({ percent }) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 10) * circumference;

  const percentToDisplay = Math.round(percent * 10) / 10;

  let color = "#bb3a1e";
  if (percentToDisplay > 6.5) {
    color = "#15803d";
  } else if (percentToDisplay > 4.5) {
    color = "#deb528";
  }

  return (
    <span className="absolute bottom-[-1rem] left-[-1rem]">
      <svg viewBox="0 0 100 100" className="w-10 h-10">
        <circle
          className="progress-ring__circle"
          stroke="#ccc"
          strokeWidth="10"
          fill="rgba(0,0,0,.75)"
          r={radius}
          cx="0"
          cy="0"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 0",
          }}
        ></circle>
        <circle
          className="progress-ring__circle real"
          stroke={color}
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="0"
          cy="0"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: `${offset}`,
            transform: "rotate(-90deg)",
            transformOrigin: "50% 0",
          }}
        ></circle>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#fff"
          strokeWidth="2px"
          fontSize="30px"
          dy=".3em"
        >
          {percentToDisplay}
        </text>
      </svg>
    </span>
  );
};

export default Rating;
