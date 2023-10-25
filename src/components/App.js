import { Route, Routes } from "react-router-dom";
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
        if (tab.order === 0) {
          return (
            <Route
              key={tab.id}
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TabComponent />
                </Suspense>
              }
            />
          );
        }
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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
