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
};

const SubdomainContext = createContext<SubdomainContextType>({
  isSubdomain: false, // Default fallback
});

export function SubdomainProvider({
  children,
  isSubdomain: initialIsSubdomain,
}: {
  children: ReactNode;
  isSubdomain: boolean;
}) {
  const [isSubdomain, setIsSubdomain] = useState<boolean>(initialIsSubdomain);

  // ✅ Client-side check fallback (in case of hydration mismatch)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      const clientSub = !!host && !host.includes('fancyletters.org'); // force boolean

      if (clientSub !== isSubdomain) {
        setIsSubdomain(clientSub);
      }
    }
  }, [isSubdomain]);

  return (
    <SubdomainContext.Provider value={{ isSubdomain }}>
      {children}
    </SubdomainContext.Provider>
  );
}

export function useSubdomain() {
  return useContext(SubdomainContext);
}

export { SubdomainContext }; // 👈 Exported for use in layout.tsx if needed
