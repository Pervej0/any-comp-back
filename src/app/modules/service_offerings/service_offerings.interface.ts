export interface TServiceOffering {
  id: string;
  specialists: string; // FK to Specialist
  createdAt: Date;
  updatedAt: Date;
}
