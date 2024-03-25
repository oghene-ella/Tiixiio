import { Routes, Route } from "react-router-dom";
import Overview from './Overview';
import Profile from './Profile';

const HomeOverview = () => {
  return (
    <section>
        <Routes className="bg-red-500">
            <Route path="/user/dashboard/overview" element={<Overview />} />
            <Route path="/user/dashboard/profile" element={<Profile />} />
        </Routes>
    </section>
  )
}

export default HomeOverview;
