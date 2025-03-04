"use client";

import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { includeObj } from "@/utils/objectUtils";
import { useEffect, useState } from "react";

function MePage() {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  const includeskey = ["name", "email", "phoneNumber", "biography"];

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) setFormData(includeObj(user, includeskey));
  }, [user]);

  if (isLoading) return <p>Loading ...</p>;
  return (
    <div className="max-w-sm">
      <h1>اطلاعات کاربری</h1>
      <form action="">
        {Object.keys(includeObj(user, includeskey)).map((key) => {
          return (
            <TextField
              label={key}
              name={key}
              key={key}
              value={formData[key] || ""}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          );
        })}
      </form>
    </div>
  );
}

export default MePage;
