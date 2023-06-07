// satisfaction-survey.interface.ts
export interface SatisfactionSurvey {
  ratingEstablishment: string;
  ratingService: string;
  ratingSupport: string;
  comments: string;
  nome?: string;  // O nome é opcional
  email?: string; // O e-mail é opcional
}
