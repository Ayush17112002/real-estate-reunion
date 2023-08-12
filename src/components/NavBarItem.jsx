export default function NavBarItem({ children, className }) {
  return (
    <div className={`ml-2 mr-2 p-3 rounded-md hover:bg-[#fc03f4] ${className}`}>
      {children}
    </div>
  );
}
