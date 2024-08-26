'use client'

import { CompanyData } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';


interface CompanyContextProps {
  companyData: CompanyData | null;
  setCompanyData: (data: CompanyData) => void;
}

const CompanyContext = createContext<CompanyContextProps | undefined>(undefined);

export function useCompany() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
}

interface CompanyProviderProps {
  children: ReactNode;
}

export function CompanyProvider({ children }: CompanyProviderProps) {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  return (
    <CompanyContext.Provider value={{ companyData, setCompanyData }}>
      {children}
    </CompanyContext.Provider>
  );
}
