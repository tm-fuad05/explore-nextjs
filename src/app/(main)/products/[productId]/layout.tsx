const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
      <h2>This is our product</h2>
    </div>
  );
};

export default ProductLayout;
