'use client'

export default function Error() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
  }

  return (
    <div style={styles}>
      <h3>Ops! Algo inesperado aconteceu.</h3>
    </div>
  );
}