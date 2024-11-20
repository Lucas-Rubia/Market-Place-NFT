import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface HeaderTitleProps {
    title: string;
    link: string;
}

export function HeaderTitle ({link,title}: HeaderTitleProps) {
    return (
      <div id="header" className="flex items-center justify-between">
        <h2 className="font-bold text-[34px]">{title}</h2>
        <Button asChild variant="link" >
          <Link to={link}>View All</Link>
        </Button>
      </div>
    );
}