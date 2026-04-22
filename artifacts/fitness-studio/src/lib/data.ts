export const schedule = {
    Monday: [
      { id: "mon-1", time: "6:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 0, totalSpots: 12, intensity: 5, status: "Full", statusType: "full" },
      { id: "mon-2", time: "8:00 AM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 2, totalSpots: 10, intensity: 4, status: "Starting Soon", statusType: "starting" },
      { id: "mon-3", time: "10:00 AM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 4, totalSpots: 15, intensity: 2, status: "Few Spots Left", statusType: "few" },
      { id: "mon-4", time: "5:30 PM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 8, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
      { id: "mon-5", time: "7:00 PM", duration: "45 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 10, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
    ],
    Tuesday: [
      { id: "tue-1", time: "6:00 AM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 3, totalSpots: 10, intensity: 4, status: "Few Spots Left", statusType: "few" },
      { id: "tue-2", time: "8:00 AM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 5, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
      { id: "tue-3", time: "10:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 6, totalSpots: 12, intensity: 5, status: "Available", statusType: "available" },
      { id: "tue-4", time: "6:00 PM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 10, totalSpots: 15, intensity: 2, status: "Available", statusType: "available" },
      { id: "tue-5", time: "7:30 PM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 7, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
    ],
    Wednesday: [
      { id: "wed-1", time: "6:00 AM", duration: "60 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 0, totalSpots: 15, intensity: 2, status: "Full", statusType: "full" },
      { id: "wed-2", time: "8:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 4, totalSpots: 12, intensity: 5, status: "Few Spots Left", statusType: "few" },
      { id: "wed-3", time: "5:30 PM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 8, totalSpots: 10, intensity: 4, status: "Available", statusType: "available" },
      { id: "wed-4", time: "7:00 PM", duration: "45 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 12, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
    ],
    Thursday: [
      { id: "thu-1", time: "6:00 AM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 2, totalSpots: 12, intensity: 3, status: "Few Spots Left", statusType: "few" },
      { id: "thu-2", time: "8:00 AM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 9, totalSpots: 15, intensity: 2, status: "Available", statusType: "available" },
      { id: "thu-3", time: "10:00 AM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 6, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
      { id: "thu-4", time: "6:00 PM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 5, totalSpots: 12, intensity: 5, status: "Available", statusType: "available" },
      { id: "thu-5", time: "7:30 PM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 4, totalSpots: 10, intensity: 4, status: "Few Spots Left", statusType: "few" },
    ],
    Friday: [
      { id: "fri-1", time: "6:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 1, totalSpots: 12, intensity: 5, status: "Few Spots Left", statusType: "few" },
      { id: "fri-2", time: "8:00 AM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 7, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
      { id: "fri-3", time: "5:30 PM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 11, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
      { id: "fri-4", time: "7:00 PM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 8, totalSpots: 15, intensity: 2, status: "Available", statusType: "available" },
    ],
    Saturday: [
      { id: "sat-1", time: "7:00 AM", duration: "90 min", name: "Weekend Warrior HIIT", trainer: "Rahul Singh", spots: 3, totalSpots: 20, intensity: 5, status: "Few Spots Left", statusType: "few" },
      { id: "sat-2", time: "9:00 AM", duration: "75 min", name: "Power Yoga (Weekend)", trainer: "Arjun Kumar", spots: 12, totalSpots: 20, intensity: 2, status: "Available", statusType: "available" },
      { id: "sat-3", time: "11:00 AM", duration: "60 min", name: "Strength Session", trainer: "Priya Mehta", spots: 8, totalSpots: 15, intensity: 4, status: "Available", statusType: "available" },
      { id: "sat-4", time: "5:00 PM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 10, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
    ],
    Sunday: [
      { id: "sun-1", time: "8:00 AM", duration: "90 min", name: "Weekend Warrior Strength", trainer: "Rahul Singh", spots: 6, totalSpots: 20, intensity: 4, status: "Available", statusType: "available" },
      { id: "sun-2", time: "10:00 AM", duration: "75 min", name: "Recovery Yoga", trainer: "Arjun Kumar", spots: 15, totalSpots: 20, intensity: 1, status: "Available", statusType: "available" },
      { id: "sun-3", time: "4:00 PM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 9, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
    ],
  };