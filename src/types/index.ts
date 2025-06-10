export interface Exercise {
  id: string;
  name: string;
  videoUrl: string;
  imageUrl?: string;
  description?: string;
}

export interface ExerciseCategory {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
}

export interface UserProfile {
  name: string;
  age: string;
  phone: string;
  email: string;
  injuryType: string;
  injuryDescription: string;
  painLevel: number;
  previousTreatment: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  physiotherapist: string;
  injuryType: string;
  status: 'agendado' | 'confirmado' | 'cancelado';
}

export interface Physiotherapist {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  availableTimes: string[];
}