export default function layout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const role = "admin";
  return (
    <div className="flex flex-col gap-2">
      <p>Dashboard Layout</p>
      {role === "admin" ? admin : user}
    </div>
  );
}
