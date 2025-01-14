export interface Career {
  _id: string;
  name: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  location?: string;
  department?: string;
  type?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CareersResponse {
  data: Career[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  success: boolean;
  message?: string;
}