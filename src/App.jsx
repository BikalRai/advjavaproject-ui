import AdminNavHorizontral from "./components/nav/AdminNavHorizontral";
import VerticalNav from "./components/nav/VerticalNav";

function App() {
  return (
    <div className='app'>
      {/* <UserAppLayout>
        <SiteRoutes />
      </UserAppLayout> */}
      {/* <UserProfile /> */}
      <AdminNavHorizontral />
      <VerticalNav />
    </div>
  );
}

export default App;
