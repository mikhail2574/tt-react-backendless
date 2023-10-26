import { Route, Routes, Navigate } from "react-router-dom";
import "../App.css";
import React, { Suspense } from "react";
import NotFoundPage from "../tabs/notFoundPage";
import data from "../data/tabs.json";

function App() {
  const tabs = data.sort((a, b) => a.order - b.order);
  return (
    <Routes>
      {tabs.map((tab) => {
        const TabComponent = React.lazy(() => import(`../${tab.path}`));
        return (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TabComponent />
              </Suspense>
            }
          />
        );
      })}
      <Route path="/" element={<Navigate to={`/${tabs[0].id}`} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
