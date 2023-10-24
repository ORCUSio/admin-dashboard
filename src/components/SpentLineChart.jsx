import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Apr", spent: 100 },
  { month: "May", spent: 300 },
  { month: "Jun", spent: 1200 },
  { month: "Jul", spent: 278 },
  { month: "Aug", spent: 1809 },
  { month: "Sept", spent: 239 },
  { month: "Oct", spent: 349 },
];
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#0F172AB2",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <p
          className="intro font-semibold text-sm mb-1 mr-6"
          style={{ color: "white" }}
        >{`$${payload[0].value}`}</p>
        <p
          className="label font-light"
          style={{ color: "white" }}
        >{`${label} ,17`}</p>
      </div>
    );
  }
  return null;
};

const SpentLineChart = () => (
  <div>
    <AreaChart
      width={1100}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid vertical={false} strokeOpacity={0.4} />
      <XAxis tickLine={false} dataKey="month" axisLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip content={<CustomTooltip />} />

      <Area
        type="monotone"
        dataKey="spent"
        stroke="#2563EB"
        strokeWidth={2}
        fill="#f2f8ff"
      />
    </AreaChart>
  </div>
);

export default SpentLineChart;
