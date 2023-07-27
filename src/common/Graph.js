import "./graph.css";
import { ResponsiveContainer, AreaChart, Area, Dot } from "recharts";

const Chart = ({
  title,

  lowerAmount,
  higherAmount,
  handleTabClick,
  activeTab,
  data,
  isMoreInfo,
  bitCoinValueConversion,
}) => {
  return (
    <div className="chart-container">
      <h2 className="sub-title">{title}</h2>
      {isMoreInfo && (
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "Day" ? "active" : ""}`}
            onClick={() => handleTabClick("Day")}
          >
            Day
          </button>
          <button
            className={`tab-button ${activeTab === "Week" ? "active" : ""}`}
            onClick={() => handleTabClick("Week")}
          >
            Week
          </button>
          <button
            className={`tab-button ${activeTab === "Month" ? "active" : ""}`}
            onClick={() => handleTabClick("Month")}
          >
            Month
          </button>
          <button
            className={`tab-button ${activeTab === "Year" ? "active" : ""}`}
            onClick={() => handleTabClick("Year")}
          >
            Year
          </button>
        </div>
      )}
      <div className="line-chart">
        <div className="amounts-container">
          <div className="red-dot" />
          <div className="lower-amount">Lower: ${lowerAmount}</div>

          <div className="green-dot" />
          <div className="higher-amount">Higher: ${higherAmount}</div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data[activeTab]} margin={{ right: 40 }}>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#fa9c21"
              strokeWidth={4}
              fill="#ffeedd"
              dot={(props) =>
                props.index === data[activeTab].length - 1 ? (
                  <>
                    {/* Outer Circle with Second Color */}
                    <Dot
                      fill="#ffeedd"
                      r={30}
                      cx={props.cx}
                      cy={props.cy}
                      fillOpacity={1}
                      style={{
                        animation: "flicker 1s infinite",
                      }}
                    />
                    {/* Inner Circle with First Color */}
                    <Dot fill="#fa9c21" r={20} cx={props.cx} cy={props.cy} />
                  </>
                ) : null
              }
            />
            <text x={20} y={280} fill="#636161" fontSize={20} fontWeight="bold">
              <tspan x={100} dy={-50} fill="#fa9c21">
                •
              </tspan>
              {bitCoinValueConversion}
            </text>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
