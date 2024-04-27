import './globals.css';
import { PropsWithChildren } from "react";
import MainHeader from "@/components/main-header/main-header";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader/>
      {children}
      </body>
    </html>
  );
}
