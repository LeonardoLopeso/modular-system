export interface User {
  company: string;
}

interface Modules {
  dashboard: boolean,
  reports: boolean,
  config: boolean
}

export interface CompanyData {
  id: string;
  username: string;
  company: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
  modules: Modules;
}

export interface LoginResponse {
  success: boolean;
  companyData?: CompanyData;
  message?: string;
}