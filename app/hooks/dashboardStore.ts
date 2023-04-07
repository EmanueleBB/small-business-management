import { create } from "zustand";

interface DashboardStore{
   isOpen:boolean;
   activeNavItem:string;
   setActive:(menuItem:string)=>void;
}

const useDashboardStore = create<DashboardStore>((set)=>({
   isOpen:false,
   activeNavItem:'Oggi',
   setActive : (menuItem) => set({activeNavItem:menuItem})
}))

export default useDashboardStore;

