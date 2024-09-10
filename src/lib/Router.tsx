import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

import { PostDetail } from "../pages/PostDetail";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout></DefaultLayout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:id" element={<PostDetail></PostDetail>}></Route>
      </Route>
    </Routes>
  );
}
