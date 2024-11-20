import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MARKETPLACE_LINKS, RESOURCES_LINKS } from "@/data";

export function MenuLinks() {
  return (
    <div className="space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="px-4 group" variant="ghost">
            Marketplace <ChevronRight className="group-data-[state=open]:rotate-90 transition-all" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {MARKETPLACE_LINKS.map((link, index) => (
            <DropdownMenuItem key={index}>
              {link.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="px-4 group" variant="ghost">
            Resources <ChevronRight className="group-data-[state=open]:rotate-90 transition-all"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {RESOURCES_LINKS.map((link, index) => (
            <DropdownMenuItem key={index}>
              {link.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}