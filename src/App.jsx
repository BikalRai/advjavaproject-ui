import UserAppLayout from "./components/layout/UserAppLayout";
import SiteRoutes from "./components/routes/SiteRoutes";

function App() {
  return (
    <div className='app'>
      <UserAppLayout>
        <SiteRoutes />
      </UserAppLayout>
    </div>
  );
}

export default App;
