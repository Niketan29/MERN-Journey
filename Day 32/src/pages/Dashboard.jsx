// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchDashboardApi } from "../api/protrctedApi";
// import useAuth from "../auth/useAuth";

// const Dashboard = () => {
//   const { logout, loading } = useAuth();
//   const navigate = useNavigate();

//   const [data, setData] = useState(null);
//   const [err, setErr] = useState(null);

//   const handleClick = () => {
//     logout();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const loadDashboard = async () => {
//       try {
//         const res = await fetchDashboardApi()
//         setData(res.data);
//       } catch (error) {
//         if (error.status === 401) {
//           logout();
//         } else {
//           setErr("Something went wrong...");
//         }
//       }
//     };
//     loadDashboard();
//   }, []);

//   if (err) return <p>{err}</p>;
//   if (!data) return <p>Loading Dashboard</p>;

//   return (
//     <div>
//       <h1>This is Dashboard Page</h1>
//       <p>{data.message}</p>
//       <p>{data.stats.users}</p>
//       <p>{data.stats.revenue}</p>
//       <button disabled={loading} onClick={handleClick}>
//         {loading ? "Logging out" : "Log out"}
//       </button>
//     </div>
//   );
// };

// export default Dashboard;





import { useEffect, useState } from "react";
import { fetchDashboardApi } from "../api/protrctedApi";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadDashboard = async () => {
      const res = await fetchDashboardApi();
      setData(res.data);
    };

    loadDashboard();
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h2>{data.message}</h2>
      <p>Users: {data.stats.users}</p>
      <p>Revenue: {data.stats.revenue}</p>
    </div>
  );
};

export default Dashboard;
