export interface ListType {
  _id: string;
  title: string;
  content: string;
  gameType: string;
  date: string;
  time: string;
  member: MemberType[];
  isEnded: boolean;
}

export interface MemberType {
  name: string;
  tier: string;
  position: string;
}
