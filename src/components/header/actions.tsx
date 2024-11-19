import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { images } from "@/utils/images";
import { Bell, Search } from "lucide-react";

export function Actions(){
  return (
    <div className="flex items-center gap-4">
      <div className="relative mr-4">
        <Search className="size-6 absolute top-0 bottom-0 left-4 h-full"/>
        <Input className="pl-12 min-w-[356px]" placeholder="Collection, item or User" />

      </div>
      <DropdownMenu>
        <DropdownMenuTrigger><img className="size-8 rounded-full "src={images.IconUk} alt="UK" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Idiomas</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Inglês</DropdownMenuItem>
          <DropdownMenuItem>Português</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger><Bell/></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Notificações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Venda</DropdownMenuItem>
          <DropdownMenuItem>Conta</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}