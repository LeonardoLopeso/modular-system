export interface User {
  company: string;
}

interface Modules {
  dashboard: boolean,
  reports: boolean,
  config: boolean
}

export interface SectionCard {
  card1: boolean;
  card2: boolean;
  card3: boolean;
  card4: boolean;
}
export interface SectionHeader {
  card1: boolean;
  card2: boolean;
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
  content: {
    sectionCards: SectionCard | SectionHeader;
  };
}

export interface LoginResponse {
  success: boolean;
  companyData?: CompanyData;
  message?: string;
}