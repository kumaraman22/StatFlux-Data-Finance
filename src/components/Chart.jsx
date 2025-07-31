import React from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { name: "Mon", value: 22800 },
  { name: "Tue", value: 23000 },
  { name: "Wed", value: 23200 },
  { name: "Thu", value: 23100 },
  { name: "Fri", value: 23290 },
] 

const Chart = () => (
  <div className="flex-1 min-h-[170px]">
    <ResponsiveContainer width="100%" height={170}>
      <LineChart data={chartData}>
        <XAxis dataKey="name" axisLine={false} tick={{ fill: "#bbf7d0", fontSize: 12 }} />
        <YAxis hide />
        <Tooltip contentStyle={{ background: "#181c1a", borderColor: "#34d399", color: "#fff" }} />
        <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default Chart
