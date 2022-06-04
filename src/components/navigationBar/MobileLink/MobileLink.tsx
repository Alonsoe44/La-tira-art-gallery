import { NavLink } from "react-router-dom";

interface MobileLinkProps {
  text: string;
  path: string;
  closeMenuAction: (arg0: boolean) => void;
}
function MobileLink({ text, path, closeMenuAction }: MobileLinkProps) {
  return (
    <li className="my-10">
      <NavLink
        onClick={() => closeMenuAction(false)}
        className={({ isActive }) =>
          `${isActive && "text-accent "} text-3xl font-bold `
        }
        to={path}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default MobileLink;
