import React from "react";
import { BrowserRouter, Route, } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";

function Routes() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
        <Route path="/" exact component={Landing}></Route>
        <Route path="/study" component={TeacherList}></Route>
        <Route path="/give-classes" component={TeacherForm}></Route>
        {/* <Redirect path="*" to="/"></Redirect> */}
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default Routes;
