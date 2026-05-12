export function Annotation({ children, ...rest }) {
  return (
    <div className="annotation" {...rest}>
      {children}
    </div>
  );
}
