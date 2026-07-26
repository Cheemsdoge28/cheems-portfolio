export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="page-turn-scene" aria-hidden="true">
        <div className="page-turn" />
      </div>
      <div className="page-enter">{children}</div>
    </>
  );
}
