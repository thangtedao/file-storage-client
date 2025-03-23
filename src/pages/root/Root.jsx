import React, { createContext, useState } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

const RootContext = createContext();

const Root = () => {
  const data = useLoaderData();
  const [user, setUser] = useState(data?.user || null);
  const navigation = useNavigation();

  return (
    <RootContext.Provider value={{ user }}>
      <div className="flex w-full bg-gray-100 min-h-screen">
        <SideBar className="w-[16%] fixed top-0 left-0" />
        <div className="ml-[16%] w-[84%] flex flex-col">
          <NavBar className="fixed h-18 w-[84%] left-[16%]" />
          <div className="px-8 mt-23">
            {navigation.state === "loading" ? <Loading /> : <Outlet />}
          </div>
        </div>
      </div>
    </RootContext.Provider>
  );
};

export const useRootProvider = () => useContext(RootContext);
export default Root;
