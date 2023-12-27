import React from "react";
import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AD_DashboardContent = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
      <div className="flex justify-between items-center">
        <h1 className="text-[#5A5C69] text-[28px] leading-[34px] font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">
          Generate Report
        </button>
      </div>

      {/* 2nd */}
      <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
        {/* 1st Report */}
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              EARNINGS (Monthly)
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>

        {/* 2nd Report */}
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              EARNINGS (Annual)
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>

        {/* 3rd Report */}
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Task
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>

        {/* 4th Report */}
        <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Pending Request
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
      </div>

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2>Earnings Overview</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div>
            <LineChart
              width={1150}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="basis-[30%]"></div>
      </div>
    </div>
  );
};

export default AD_DashboardContent;
