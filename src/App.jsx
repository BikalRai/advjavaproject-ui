import UserAppLayout from "./components/layout/UserAppLayout";
import UserProfile from "./components/pages/profile/UserProfile";
import SiteRoutes from "./components/routes/SiteRoutes";

function App() {
  return (
    <div className='app'>
      {/* <UserAppLayout>
        <SiteRoutes />
      </UserAppLayout> */}
      <UserProfile />
    </div>
  );
}

export default App;
