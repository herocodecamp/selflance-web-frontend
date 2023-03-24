import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '24', value: 400 },
  {
    name: '31', value: 300
  },
  { name: '01', value: 200 },
  { name: '02', value: 278 },
  { name: '03', value: 189 },
  { name: '04', value: 239 },

];

const SeWithdrawChart = () => {

  return (
    <div className='py-6 sm:py-8'>
      <h2 className='text-xl font-bold text-[#000000] py-3'>Overview</h2>
      <div className='w-full mx-auto h-full my-4'>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
          >
            <Line type="monotone" dataKey="value" strokeWidth={5} stroke="#00538F" filter="url(#blueFilter)" />
            <XAxis dataKey="name" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default SeWithdrawChart;