import { create } from "zustand";
import { persist } from "zustand/middleware";
import { schedule as initialSchedule } from "./data";

export type ClassItem = {
  id: string;
  time: string;
  duration: string;
  name: string;
  trainer: string;
  spots: number;
  totalSpots: number;
  intensity: number;
};

export type ScheduleState = {
  schedule: Record<string, ClassItem[]>;
  bookingData: any;
  bookSlot: (day: string, classId: string) => void;
  setBookingData: (data: any) => void;
};

export const useScheduleStore = create<ScheduleState>()(
  persist(
    (set) => ({
      schedule: initialSchedule,
      bookingData: null,

      bookSlot: (day, classId) =>
        set((state) => {
          const daySchedule = state.schedule[day];
          if (!daySchedule) return state;

          return {
            schedule: {
              ...state.schedule,
              [day]: daySchedule.map((cls) =>
                cls.id === classId && cls.spots > 0
                  ? { ...cls, spots: cls.spots - 1 }
                  : cls
              ),
            },
          };
        }),
      setBookingData: (data) => set({ bookingData: data }),
    }),
    {
      name: "fitness-class-schedule",
    }
  )
);