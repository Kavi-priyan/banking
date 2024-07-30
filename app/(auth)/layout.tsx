import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";



const inter = Inter({ subsets: ["latin"],variable:'--font-inter' });
const IBMplexserif= IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400','700'],
  variable:'--font-ibm-plex-serif',
  

})

export const metadata: Metadata = {
  title: "Koma-T Bank",
  description: "Koma-T is a modern banking platform for everyone",
  icons:{
    icon:'/icons/logox.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
        <body>
        <main>
    {children}
    </main>
            
        </body>
          
    </html>
  
  );
}
