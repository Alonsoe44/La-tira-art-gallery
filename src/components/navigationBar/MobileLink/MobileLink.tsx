import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

interface MobileLinkProps {
  text: string;
}
function MobileLink({ text }: MobileLinkProps) {
  return (
    <li className="my-10">
      <Menu.Item>
        {({ active }) => (
          <Link
            className={`${active && "bg-blue-500"} text-3xl font-bold`}
            to="/account-settings"
          >
            {text}
          </Link>
        )}
      </Menu.Item>
    </li>
  );
}

export default MobileLink;
