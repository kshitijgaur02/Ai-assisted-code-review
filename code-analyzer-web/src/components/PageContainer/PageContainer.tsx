type Props = {
  children: React.ReactNode;
};

const PageContainer = ({
  children,
}: Props) => {
  return (
    <div
      className="
        mx-auto
        max-w-6xl
        px-6
        py-8
      "
    >
      {children}
    </div>
  );
};

export default PageContainer;