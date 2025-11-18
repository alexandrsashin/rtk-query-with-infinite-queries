import { Layout, Tabs } from "antd";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import RTKDuplicatedKeys from "./pages/RTKDuplicatedKeys";
import RTKCorrectWorks from "./pages/RTKCorrectWorks";

const { Header, Content } = Layout;

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: "/duplicated-keys",
      label: "RTK with duplicated keys",
    },
    {
      key: "/correct-works",
      label: "RTK correct works",
    },
  ];

  const activeKey =
    location.pathname === "/" ? "/duplicated-keys" : location.pathname;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#fff", padding: "0 24px" }}>
        <Tabs
          activeKey={activeKey}
          items={items}
          onChange={(key) => navigate(key)}
        />
      </Header>
      <Content style={{ padding: "24px", width: "100%" }}>
        <div style={{ width: "100%", maxWidth: "100%" }}>
          <Routes>
            <Route path="/" element={<RTKDuplicatedKeys />} />
            <Route path="/duplicated-keys" element={<RTKDuplicatedKeys />} />
            <Route path="/correct-works" element={<RTKCorrectWorks />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
