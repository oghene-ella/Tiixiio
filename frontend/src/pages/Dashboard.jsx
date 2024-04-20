import DashboardHome from "./Dashboard/HomeOverview"

const Dashboard = () => {
  const isLoading = false;
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <DashboardHome />
    </div>
  )
}

export default Dashboard