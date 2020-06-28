import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

// import Footer from "./../Components/Footer/index";

const AdminLayout = (props) => {
  return (
    <div>
      <div>NAVBAR ADMIN</div>

      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("userAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
}
