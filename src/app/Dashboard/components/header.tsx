const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-purple-900 shadow-md">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Admin"
          className="w-10 h-10 rounded-full border-2 border-purple-500"
        />
        <span>Admin ▼</span>
      </div>
    </div>
  );
};

export default Header;
