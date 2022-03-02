import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layouts/Layout";
import AdminLogin from "../components/utils/AdminLoginBox";

export default function AdminLoginPage() {

  useEffect(() => {

  })

  return (
    <Layout type="onlyPC" mode="ADMIN MODE 👷‍♀️">
      <AdminLogin />
    </Layout>
  );
}
