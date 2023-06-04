// satisfaction-survey.interface.ts
export interface SatisfactionSurvey {
  name?: string;
  email?: string;
  ratingEstablishment: number;
  ratingService: number;
  ratingSupport: number;
  comments: string;
}
