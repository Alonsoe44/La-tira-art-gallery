import { NavLink } from "react-router-dom";

interface DesktopLinkProps {
  text: string;
  path: string;
}
function DesktopLink({ text, path }: DesktopLinkProps) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "text-accent underline font-medium" : "text-primaryOposite"
        }
      >
        {text}
      </NavLink>
    </li>
  );
}

export default DesktopLink;
