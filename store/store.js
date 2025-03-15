import { supabase } from "@/utils/connectDB";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";



const useAuthStore = create(
  persist(
    devtools((set) => ({
      user: null,

      signInWithGitHub: async () => {
        const { data:signGitData, error } = await supabase.auth.signInWithOAuth({
          provider: "github",
        });


        if (error) {
          console.error("GitHub Login Error:", error.message);
        } else {
          console.log("Login Successful:", signGitData);
          set({ user: signGitData.user });
        }
      },

      signInWithGoogle: async () => {
        const { data:signGitData, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
        });


        if (error) {
          console.error("Google Login Error:", error.message);
        } else {
          console.log("Login Successful:", signGitData);
          set({ user: signGitData.user });
        }
      },

      fetchUser: async () => {
        const { data, error } = await supabase.auth.getUser();
        if (data) {
          set({ user: data.user });
        } else {
          console.error("Error fetching user:", error);
        }
      },

      signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error("Logout Error:", error.message);
        } else {
          set({ user: null });
        }
      },
    })),
    {
      name: "auth-storage", // LocalStorage key
      getStorage: () => localStorage, // Persist in localStorage
    }
  )
);

export default useAuthStore;
