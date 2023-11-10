import { Outlet } from "react-router-dom";
import { GNB } from "../components/atoms/GNB";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserInfoThunk } from "../store/authSlice";

export const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, []);

  return (
    <>
      <main className="p-4 mb-20">
        <Outlet />
      </main>
      <GNB />
    </>
  );
};
