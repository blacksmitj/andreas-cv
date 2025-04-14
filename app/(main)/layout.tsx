import { Sidebar } from "@/components/sidebar";

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="w-[600px] h-[400px] rounded-full bg-gradient-to-tr from-primary to-accent animate-spin-slow -z-10 absolute blur-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#183B4E60_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="h-screen w-screen flex items-center justify-center">
        <main className="w-[95%] h-[90%] flex border bg-white/60 backdrop-blur-[10px] shadow-2xl shadow-accent/10 relative scrollbar-thumb-primary/20 scrollbar-track-primary/5 scrollbar-thumb-rounded">
          <Sidebar className="h-full fixed items-center flex" />
          <div className="pl-[100px] overflow-auto scrollbar-thin w-full flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
