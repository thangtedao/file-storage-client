import React, { createContext, useContext, useState } from "react";
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import { getUser } from "../services/authService";

export const loader = async () => {
  try {
    const data = await getUser();
    return { data };
  } catch (error) {
    return redirect("/login");
  }
};

const RootContext = createContext();

const Root = () => {
  const { data } = useLoaderData();

  const [user, setUser] = useState(data || null);
  const navigation = useNavigation();

  return (
    <RootContext.Provider value={{ user }}>
      <div className="flex w-full bg-gray-100 min-h-screen">
        <SideBar className="w-[16%] fixed top-0 left-0" />
        <div className="ml-[16%] w-[84%] flex flex-col">
          <NavBar className="fixed h-18 w-[84%] left-[16%]" />
          <div className="w-full h-full px-8 mt-23">
            {navigation.state === "loading" ? <Loading /> : <Outlet />}
          </div>
        </div>
      </div>
    </RootContext.Provider>
  );
};

export const useRootContext = () => useContext(RootContext);
export default Root;
