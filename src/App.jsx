import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const LayoutDashboard = lazy(() => import("./layout/LayoutDashboard"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route element={<LayoutDashboard />}>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/campaign" element={<CampaignPage />}></Route>
          <Route path="/start-campaign" element={<StartCampaignPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
