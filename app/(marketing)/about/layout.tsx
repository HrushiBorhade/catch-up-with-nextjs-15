export default function layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      {children}
      {analytics}
      {team}
    </section>
  );
}
