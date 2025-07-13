// src/context/SubdomainContext.tsx

'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

type SubdomainContextType = {
  isSubdomain: boolean;
  subdomain: string | null;
};

const SubdomainContext = createContext<SubdomainContextType>({
  isSubdomain: false,
  subdomain: null,
});

export function SubdomainProvider({
  children,
  initialSubdomain,
}: {
  children: ReactNode;
  initialSubdomain: string | null;
}) {
  const [subdomain, setSubdomain] = useState<string | null>(initialSubdomain);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      const parts = host.split('.');
      const clientSub = parts.length > 2 ? parts[0] : null;
      if (clientSub !== subdomain) {
        setSubdomain(clientSub);
      }
    }
  }, [subdomain]);

  return (
    <SubdomainContext.Provider
      value={{
        isSubdomain: !!subdomain,
        subdomain,
      }}
    >
      {children}
    </SubdomainContext.Provider>
  );
}

export function useSubdomain() {
  return useContext(SubdomainContext);
}
