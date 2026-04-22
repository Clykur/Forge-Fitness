import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";
import { useScheduleStore, ClassItem, ScheduleState } from "@/lib/store";
import { BookingForm } from "@/components/BookingForm";

export function BookingPage() {
  const [, params] = useRoute("/book/:classId");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [classData, setClassData] = useState<ClassItem | null>(null);

  const schedule = useScheduleStore((state: ScheduleState) => state.schedule);
  const bookSlot = useScheduleStore((state: ScheduleState) => state.bookSlot);
  const setBookingData = useScheduleStore(
    (state: ScheduleState) => state.setBookingData
  );

  useEffect(() => {
    if (!params?.classId) return;

    const [day, classIndex] = params.classId.split("-");
    const dayName = day.charAt(0).toUpperCase() + day.slice(1);

    const classInfo =
      schedule[dayName]?.[parseInt(classIndex, 10)];

    if (classInfo) {
      setClassData(classInfo);
    }
  }, [params?.classId, schedule]);

  if (!classData) {
    return (
      <div className="pt-32 pb-24 min-h-screen text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const isFull = classData.spots <= 0;

  const handleBookSlot = (formData: any) => {
    if (!params?.classId) return;

    const [day] = params.classId.split("-");
    const dayName = day.charAt(0).toUpperCase() + day.slice(1);

    bookSlot(dayName, classData.id);

    setBookingData({ ...formData, classDetails: classData });

    toast({
      title: "Success",
      description: "Slot booked successfully!",
    });

    setLocation("/booking-status");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back */}
          <Button
            variant="ghost"
            onClick={() => setLocation("/classes")}
            className="flex items-center gap-2 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Classes
          </Button>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-4">
            {classData.name}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-white/60 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {params?.classId.split("-")[0]}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {classData.time}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {classData.trainer}
            </span>
          </div>

          {/* Booking Form */}
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Book Your Slot
            </h2>
            <BookingForm classData={classData} onBook={handleBookSlot} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}