import React, { FC, createContext, useState } from 'react';

interface Kundali {
  url: string;
}

interface Props {
  children: React.ReactNode;
}

interface KundaliContextType {
  kundali: Kundali;
  setKundali: React.Dispatch<React.SetStateAction<Kundali>>;
}

export const KundaliContext = createContext<KundaliContextType | undefined>(
  undefined,
);

const KundaliContextProvider: FC<Props> = ({ children }) => {
  const [kundali, setKundali] = useState<Kundali>({ url: '' });

  return (
    <KundaliContext.Provider value={{ kundali, setKundali }}>
      {children}
    </KundaliContext.Provider>
  );
};

export default KundaliContextProvider;
