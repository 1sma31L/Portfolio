import AnimatedDiv from '@/components/AnimatedDiv';
import PortfolioNavBar from '@/components/HomeNavBar';
export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <PortfolioNavBar />
      {children}
    </div>
  );
}
