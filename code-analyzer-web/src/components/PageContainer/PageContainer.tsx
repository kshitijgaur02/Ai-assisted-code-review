type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const PageContainer = ({
  title,
  subtitle,
  children,
}: Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-gray-600">
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </div>
  );
};

export default PageContainer;