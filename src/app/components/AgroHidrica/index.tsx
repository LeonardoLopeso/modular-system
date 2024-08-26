import Content from "./Content";
import Header from "./Header";


export default function AgroHidrica() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#FFF' }}>
      <Header />
      <Content />
    </div>
  )
}