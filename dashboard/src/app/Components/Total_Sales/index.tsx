import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const Monthly_Sales = () => {
  const sales = [
    {month:'Aug',total_sales:'0.0'},
    { month: 'Sep', total_sales: '720.50 ' },
    { month: 'Oct', total_sales: '450.38 ' },

  ];

  // Format the data for Recharts
  const formattedData = sales.map(sale => ({
    name: sale.month,
    sales: parseFloat(sale.total_sales),
  }));

  return (
    <div className='flex flex-col items-left'>
      <h1 className="text-md font-bold text-left pl-20 text-forestgreen mb-2">Total Monthly Sales(Ksh)</h1>
      <ResponsiveContainer width="70%" height={220}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="forestgreen" activeDot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Monthly_Sales;







// import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
// import useSales from '@/app/hooks/useSales';

// const Monthly_Sales = () => {
//   const { sales, loading, error } = useSales();


//   const formattedData = sales.map(sale => ({
//     name: sale.month,
//     sales: parseFloat(sale.total_sales), 
//   }));
  

//   if (loading) return <p>Loading sales data...</p>;
//   if (error) return <p>Error fetching sales data: {error}</p>;

//   return (
//     <div className='flex flex-col items-left '>
//       <h1 className="text-md font-bold text-left pl-20 text-forestgreen mb-2">Total Monthly Sales</h1>
//       <ResponsiveContainer  width="45%" height={220}>
//         <LineChart data={formattedData}>
//           <CartesianGrid strokeDasharray="2 2" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="sales" stroke="forestgreen" activeDot={{ r: 2 }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Monthly_Sales;