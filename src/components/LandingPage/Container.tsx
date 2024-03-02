const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" w-full h-full overflow-auto">{children}</div>
    </>
  );
};

export default Container;
