import { createContext, useContext, useState, ReactNode } from "react";

// Buat tipe data untuk informasi pengguna
interface User {
  fullName: string;
}

// Buat tipe data untuk konteks pengguna
interface UserContextType {
  user: User | null;
  loginUser: (userData: User) => void;
  logoutUser: () => void;
}

// Buat konteks untuk menyimpan informasi pengguna yang telah login
const UserContext = createContext<UserContextType | undefined>(undefined);

// Buat custom hook untuk mengakses konteks informasi pengguna
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Komponen provider untuk menyimpan informasi pengguna
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // State untuk menyimpan informasi pengguna

  // Fungsi untuk mengatur informasi pengguna saat login
    const loginUser = (userData: User) => {
    setUser(userData); // Simpan informasi pengguna ke dalam state
  };

  // Fungsi untuk menghapus informasi pengguna saat logout
  const logoutUser = () => {
    setUser(null);
  };

  // Nilai konteks yang akan disediakan ke turunan
  const value: UserContextType = {
    user,
    loginUser,
    logoutUser,
  };

  // Memberikan konteks ke turunan
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
