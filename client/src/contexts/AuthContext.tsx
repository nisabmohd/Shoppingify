import { useState, createContext, useContext } from "react";

const Context = createContext<any>({});

export default function AuthContext({ children }: any) {
  const [isAuth, setIsAuth] = useState(() => {
    const user = localStorage.getItem("auth");
    if (!user) return null;
    return JSON.parse(user);
  });
  return (
    <Context.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </Context.Provider>
  );
}

export function useAuth() {
  return useContext(Context);
}
