import { SectionHeader } from "@/types";

interface IProps {
  data: SectionHeader;
}

export default function Header({ data }: IProps) {
  console.log(data)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', height: '100%' }}>
      {data?.card1 && 
        <div style={{ width: '100%', height: '200px', padding: '1rem', fontWeight: '700', backgroundColor: 'ActiveCaption', borderRadius: '8px' }}>Card 01</div>
      }

      {data?.card2 &&
        <div style={{ width: '100%', height: '200px', padding: '1rem', fontWeight: '700', backgroundColor: 'ActiveCaption', borderRadius: '8px' }}>Card 02</div>
      }
    </div>
  );
}