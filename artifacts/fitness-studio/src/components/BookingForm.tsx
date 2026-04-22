
import { useState } from "react";
import { Button } from "./ui/button";
// import { generateTimeSlots } from "../lib/utils";

interface BookingFormProps {
  classData: {
    name: string;
    time: string;
    trainer: string;
  };
  onBook: (formData: any) => void;
}

export function BookingForm({ classData, onBook }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "John Doe",
    phoneNumber: "1234567890",
    email: "john.doe@example.com",
    date: new Date().toISOString().split("T")[0],
    timeSlot: classData.time,
    sessionType: classData.name,
    trainer: classData.trainer,
    membershipId: "MEM123",
    paymentStatus: "pending",
    bookingStatus: "confirmed",
    notes: "Looking forward to the class!",
  });

  const [errors, setErrors] = useState<any>({});
//   const timeSlots = generateTimeSlots(30, 9, 17);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.membershipId)
      newErrors.membershipId = "Membership ID is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onBook(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
        />
        {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
        />
        {errors.phoneNumber && (
          <p className="text-red-400 text-xs">{errors.phoneNumber}</p>
        )}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
        />
        {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          min={new Date().toISOString().split("T")[0]}
          max={
            new Date(new Date().setDate(new Date().getDate() + 7))
              .toISOString()
              .split("T")[0]
          }
          className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
        />
        <input
          type="text"
          name="timeSlot"
          value={classData.time}
          readOnly
          className="w-full bg-white/10 border border-white/12 rounded-lg px-4 py-3 text-white/50 placeholder:text-white/25 focus:outline-none"
        />
        <input
          type="text"
          name="sessionType"
          value={formData.sessionType}
          readOnly
          className="w-full bg-white/10 border border-white/12 rounded-lg px-4 py-3 text-white/50 placeholder:text-white/25 focus:outline-none"
        />
        <input
          type="text"
          name="trainer"
          value={formData.trainer}
          readOnly
          className="w-full bg-white/10 border border-white/12 rounded-lg px-4 py-3 text-white/50 placeholder:text-white/25 focus:outline-none"
        />
        <input
          type="text"
          name="membershipId"
          value={formData.membershipId}
          onChange={handleInputChange}
          placeholder="Membership ID"
          className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
        />
        {errors.membershipId && (
          <p className="text-red-400 text-xs">{errors.membershipId}</p>
        )}
        <select
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleInputChange}
          className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Notes (optional)"
          className="w-full md:col-span-2 bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
        />
      </div>
      <Button type="submit" className="w-full">
        Confirm Booking
      </Button>
    </form>
  );
}