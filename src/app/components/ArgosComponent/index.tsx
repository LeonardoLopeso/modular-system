import { CompanyData } from "@/types";
import Content from "./Content";
import Header from "./Header";

interface IProps {
  data: CompanyData;
}

export default function ArgosComponent({ data }: IProps) {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#444' }}>
      <Header data={data.content.sectionCards} />
      <Content />
    </div>
  )
}