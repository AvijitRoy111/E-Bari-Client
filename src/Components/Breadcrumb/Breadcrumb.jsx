// components/Breadcrumb.jsx
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-600 my-4">
      {/* Home Icon */}
      <Link to="/" className="text-green-600 hover:underline flex items-center gap-1">
        <Home size={16} />
      </Link>

      {/* Dynamic Items */}
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <span className="text-gray-400">/</span>
          {item.link ? (
            <Link to={item.link} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
