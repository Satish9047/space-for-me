import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const SpaceDashboard = () => {
  return (
    <div>
      <aside>
        <div>space</div>
        <div>
          <img src="" alt="" />
          <div>
            <p>Satish Prajapati</p>
            <p>Space Owner</p>
          </div>
        </div>
        <div>
          <NavLink to="/auth/login">Overview</NavLink>
          <NavLink to="/auth/login">Calendar</NavLink>
          <NavLink to="/auth/login">Spaces</NavLink>
          <NavLink to="/auth/login">Finance</NavLink>
          <NavLink to="/auth/login">Setting</NavLink>
        </div>
        <div>
          <Button>Profile</Button>
          <Button>Logout</Button>
        </div>
      </aside>
      <div>
        <div>
          <h2>Dashboard Overview</h2>
          <p>Manage your spaces and track performance</p>
        </div>
        <div></div>
        <main></main>
      </div>
    </div>
  );
};

export default SpaceDashboard;
