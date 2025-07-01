import { RaceDataType } from '@/types/race';

export interface SearchMemberData {
  success: boolean;
  message: string;
  data: MemberDataType[];
}

export interface MemberData {
  success: boolean;
  message: string;
  data: MemberDataType;
}

export interface MemberDataType {
  memberNo: number;
  universityNo: number;
  memberName: string;
  memberProfile?: string;
  memberId: string;
  memberClass: string;
  memberGender: string;
  memberEng: string;
  memberPhone: string;
  memberBirth: string;
  createdAt?: string;
  updatedAt?: string;
  universityName: string;
  records: Record[];
}

export interface Record {
  record1st: string;
  record2nd: string;
  bibNo: number;
  ranking: number;
  totalRecord: string;
  higherRankRecord?: string;
  lowerRankRecord?: string;
  higherRankInfo?: RankInfo;
  lowerRankInfo?: RankInfo;
  race: RaceDataType;
}

export interface RankInfo {
  memberName: string;
  bibNo: number;
  totalRecord: string;
}
