'use client';

import { ReactNode } from 'react';
import { useCompany } from '@/context/CompanyContext';
import { useRouter } from 'next/navigation';

interface CompanyLayoutProps {
  children: ReactNode;
}

export default function CompanyLayout({ children }: CompanyLayoutProps) {
  const router = useRouter();
  const { companyData } = useCompany();

  if (!companyData) {
    return router.push('/error');
  }

  const mainStyles = {
    display: 'flex',
    height: '100vh',
    backgroundColor: companyData.theme.backgroundColor
  }
  const asideStyles: any = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '250px',
    backgroundColor: companyData.theme.secondaryColor,
    color: companyData.theme.textColor,
    borderRight: `1px solid ${companyData.theme.borderColor}`,
    padding: '20px'
  }
  const h2Styles = {
    marginBottom: '20px',
  }
  const ulStyles = {
    listStyle: 'none',
    padding: 0
  }
  const liStyles = {
    marginBottom: '10px',
    lineHeight: '2',
    paddingLeft: '10px',
    borderRadius: '5px',
  }
  const aStyles = {
    color: companyData.theme.textColor
  }
  const contentStyles = {
    flex: 1,
    backgroundColor: companyData.theme.primaryColor,
    padding: '20px',
    color: companyData.theme.textColor
  }
  const footerStyles = {
    marginTop: 'auto',
    color: companyData.theme.textColor,
    padding: '16px 0',
    borderTop: `1px solid ${companyData.theme.borderColor}`,
  }
  const buttonLoggoutStyles = {
    padding: '10px 20px',
    backgroundColor: companyData.theme.primaryColor,
    color: companyData.theme.textColor,
    border: `1px solid ${companyData.theme.borderColor}`,
    borderRadius: '5px',
    cursor: 'pointer',
  }
  const headerStyles = {
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: `1px solid ${companyData.theme.borderColor}`,
  }
  const mainContent = {
    height: 'calc(100vh - 150px)',
  }

  const handleLogout = () => {
    router.push('/');
  }

  return (
    <div style={mainStyles}>
      {/* Sidebar */}
      <aside style={asideStyles}>
        <div>
          <h2 style={h2Styles}>{companyData.company}</h2>
          <nav>
            <ul style={ulStyles}>
              {companyData.modules.dashboard &&
                <li style={liStyles}><a href="#" style={aStyles}>Dashboard</a></li>
              }
              {companyData.modules.reports &&
                <li style={liStyles}><a href="#" style={aStyles}>Relatórios</a></li>
              }
              {companyData.modules.config &&
                <li style={liStyles}><a href="#" style={aStyles}>Configurações</a></li>
              }
            </ul>
          </nav>
        </div>

        <button style={buttonLoggoutStyles} onClick={handleLogout}>Logout</button>
      </aside>

      {/* Main Content Area */}
      <div style={contentStyles}>
        <header style={headerStyles}>
          <h1>Welcome to {companyData.username}</h1>
        </header>
        <main style={mainContent}>
          {children}
        </main>
        <footer style={footerStyles}>
          &copy; {new Date().getFullYear()} {companyData.company}
        </footer>
      </div>
    </div>
  );
}
