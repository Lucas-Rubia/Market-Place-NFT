import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

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
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Discover</DropdownMenuItem>
          <DropdownMenuItem>Activities</DropdownMenuItem>
          <DropdownMenuItem>Collection Verification</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="px-4 group" variant="ghost">
            Resources <ChevronRight className="group-data-[state=open]:rotate-90 transition-all"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Help Center</DropdownMenuItem>
          <DropdownMenuItem>FAQs</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}