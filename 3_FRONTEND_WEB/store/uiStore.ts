import { create } from 'zustand';

interface UIStore {
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isDarkMode: false,
  isSidebarOpen: true,
  
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
}));
