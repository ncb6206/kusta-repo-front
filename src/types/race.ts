export interface RaceData {
  success: boolean;
  message: string;
  data: RaceDataType;
}

export interface RaceDataType {
  raceNo?: number;
  raceTitle: string;
  raceType: string;
  raceDate: string;
  divisionType: string;
}
