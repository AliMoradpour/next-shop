"use client";

import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/authServices";
import { includeObj } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MePage() {
  const { data, isLoading } = useGetUser();
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });
  const { user } = data || {};

  const includeskey = ["name", "email", "phoneNumber", "biography"];

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) setFormData(includeObj(user, includeskey));
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ formData });
      queryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className="max-w-sm">
      <h1>اطلاعات کاربری</h1>
      <form className="space-y-8" onSubmit={submitHandler}>
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
        <div>
          {isUpdating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MePage;
