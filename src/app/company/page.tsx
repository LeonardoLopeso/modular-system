'use client';

import { useCompany } from "@/context/CompanyContext";
import AgroHidrica from "../components/AgroHidrica";
import ArgosComponent from "../components/ArgosComponent";


export default function Company() {
  const { companyData } = useCompany();
  
  return (
    <>
      {companyData?.company === 'agro_hidric' && <AgroHidrica />}
      {companyData?.company === 'argos_monitoring' && <ArgosComponent data={companyData}  />}
    </>
  );
}
