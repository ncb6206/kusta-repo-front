export interface UniversityData {
  success: boolean;
  message: string;
  data: UniversityDataType[];
}

export interface UniversityDataType {
  universityNo: number;
  universityKor: string;
  universityTeamname?: string;
  universityLogo?: string;
  universityInfo?: string;
  universityOverview?: string;
  universityEng?: string;
  universityBirth?: number;
  universityJoined?: number;
  universityType?: string;
}
