import "@/app/global.css";

const PhotoLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <html>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
};

export default PhotoLayout;
