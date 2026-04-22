import { useLocation } from "wouter";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import { useScheduleStore } from "../lib/store";
import { waLink } from "../lib/whatsapp";

export function BookingStatus() {
  const [, navigate] = useLocation();
  const { bookingData } = useScheduleStore();

  useEffect(() => {
    if (!bookingData) {
      navigate("/classes");
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  const handleWhatsAppShare = () => {
    const message = `Booking Confirmation:
Name: ${bookingData.name}
Date: ${bookingData.date}
Time: ${bookingData.timeSlot}
Session: ${bookingData.sessionType}
Trainer: ${bookingData.trainer}
Status: ${bookingData.bookingStatus}`;
    const url = waLink(message);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-white flex items-center justify-center p-4 pt-30">
      <Card className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2 text-green-500">
            <svg
              className="w-20 h-20 animate-[scaleIn_0.3s_ease]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                strokeLinecap="round"
              />
              <path
                d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold text-green-400">
            Booking Confirmed
          </CardTitle>
          <p className="text-gray-400 text-sm">
            Your slot has been successfully reserved
          </p>
        </CardHeader>

        <CardContent className="space-y-6">

          {/* USER INFO */}
          <div className="bg-gray-800/60 p-4 rounded-xl">
            <h3 className="text-sm text-gray-400 mb-3">User Details</h3>

            <div className="grid grid-cols-2 gap-4 text-sm">

              <div>
                <p className="text-gray-500 text-xs">Name</p>
                <p className="text-white">{bookingData.name}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Phone</p>
                <p className="text-white">{bookingData.phoneNumber}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Email</p>
                <p className="text-white">{bookingData.email}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Membership</p>
                <p className="text-white">{bookingData.membershipId}</p>
              </div>

            </div>
          </div>

          {/* SESSION INFO */}
          <div className="bg-gray-800/60 p-4 rounded-xl">
            <h3 className="text-sm text-gray-400 mb-3">Session Details</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><span className="text-gray-500">Date:</span> {bookingData.date}</p>
              <p><span className="text-gray-500">Time:</span> {bookingData.timeSlot}</p>
              <p><span className="text-gray-500">Session:</span> {bookingData.sessionType}</p>
              <p><span className="text-gray-500">Trainer:</span> {bookingData.trainer}</p>
            </div>
          </div>

          {/* STATUS INFO */}
          <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700/50">
            <div className="grid grid-cols-2 gap-6">

              {/* Payment */}
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-xs">Payment Status</p>
                <span
                  className={`w-fit px-3 py-1 rounded-full text-xs font-semibold ${bookingData.paymentStatus === "paid"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                    }`}
                >
                  {bookingData.paymentStatus}
                </span>
              </div>

              {/* Booking */}
              <div className="flex flex-col gap-2 items-start">
                <p className="text-gray-400 text-xs">Booking Status</p>
                <span className="w-fit px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                  {bookingData.bookingStatus}
                </span>
              </div>

            </div>
          </div>

          {/* NOTES */}
          {bookingData.notes && (
            <div className="bg-gray-800/60 p-4 rounded-xl">
              <p className="text-gray-400 text-sm mb-1">Notes</p>
              <p className="text-sm text-white/80">{bookingData.notes}</p>
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <Button
              onClick={() => navigate("/classes")}
              className="flex-1 bg-white text-black hover:bg-gray-200"
            >
              Go to Classes
            </Button>

            <Button
              onClick={handleWhatsAppShare}
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600"
            >
              <FaWhatsapp />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}