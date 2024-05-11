import { useGetDonationsQuery } from "@/redux/api/api";
import { PieChart, Pie } from "recharts";

const DashboardHome = () => {
  const { data } = useGetDonationsQuery(undefined);
  return (
    <div className="text-red-500">
      <h1 className="text-red-500 text-3xl">Donated Amount</h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="amount"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
};

export default DashboardHome;
