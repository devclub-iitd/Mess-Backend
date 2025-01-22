import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: string;
  kerberos: string;
  isManager: boolean;
  name: string;
  role: string;
  messNames: string[];
}

interface UserContextType {
  user: User | null;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/auth/myProfile", {
          method: "GET",
          credentials: "include",
        });

        const userData: User = await response.json();

        if (!userData.isManager) {
          await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include",
          });
          setUser(null);
        } else {
          setUser(userData)
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
      }
      finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [])

  const logout = () => {
    setUser(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
