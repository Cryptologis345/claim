'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

 interface message
{
    id: number;
    src: StaticImport
    title: string;
    desc?: string
}
interface AuthContextType
{
      selectedMessage: message | null;
  loading: boolean;
  progress: number;
  failed: boolean;
  sliderPos: number;
  handleMessageClick: (Message: message) => void;
  simulateFailure: () => void;
    setSelectedMessage: React.Dispatch<React.SetStateAction<message | null>>; 

}

 export const MessageContext = createContext<AuthContextType | undefined>(
    undefined,
);
export const UseMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("not use");
  }
  return context;
};
export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMessage, setSelectedMessage] = useState<message | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);
    const [sliderPos, setSliderPos] = useState(0); 
   const simulateFailure = () => {
       setLoading(true);
    setFailed(false);
    setSliderPos(0);

    setTimeout(() => {
      setLoading(false);
      setFailed(true);
    }, 3000);
    
  };
    const handleMessageClick = (Message: message) => {
    setSelectedMessage(Message);
    simulateFailure();
  };

    useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setSliderPos((prev) => {
          if (prev >= 100) {
            return 0; 
          }
          return prev + 2; 
        });
      }, 30); 
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <MessageContext.Provider
      value={{
        selectedMessage,
        setSelectedMessage,
        loading,
        progress,
        failed,
        sliderPos,
        handleMessageClick,
        simulateFailure,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
