import { create } from "zustand";
import { persist } from "zustand/middleware";

const usebackendStore = create(
  persist(
    (set) => ({
      accessToken: null,
      tempAccessToken: null,
      activeTab: null,
      user: {
        userId: null,
        email: "",
        userName: "",
        tempUserId: null,
      },
      ChallengeId: null,
      setActiveTab: (tab) =>
        set(() => ({
          activeTab: tab,
        })),
      setAuth: (id, token) =>
        set((state) => ({
          user: { ...state.user, userId: id },
          accessToken: token,
        })),
    
      setEmail: (email) =>
        set((state) => ({ user: { ...state.user, email: email } })),
      setUserName: (username) =>
        set((state) => ({ user: { ...state.user, userName: username } })),
      setUserId: (id) =>
        set((state) => ({ user: { ...state.user, userId: id } })),
      setTempAuth: (id, token) =>
        set((state) => ({
          user: { ...state.user, tempUserId: id },
          tempAccessToken: token,
        })),
      setModal: (payload) => set({ modal: payload }),
      setChallengeId: (id) => set({ ChallengeId: id }),
      setCompareStatus: (payload) =>
        set({ compareStatus: [...this.state.compareStatus, payload] }),
    }),

    {
      name: "usebackendStore",
    }
  )
);

export { usebackendStore };