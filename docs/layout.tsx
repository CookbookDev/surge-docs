import AskCookbook from "./components/AskCookbook";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AskCookbook />
    </>
  );
}
