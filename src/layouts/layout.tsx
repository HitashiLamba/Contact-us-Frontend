import Header  from "../components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="  container mx-auto flex-1 p-4 lg:p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;

