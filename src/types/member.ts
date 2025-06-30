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
  universityNo?: number;
  memberName: string;
  memberProfile: string;
  memberId?: string;
  memberClass?: string;
  memberGender?: string;
  memberEng?: string;
  memberPhone?: string;
  memberBirth?: string;
  createdAt?: string;
  updatedAt?: string;
}
