import {Switch} from "../components/ui/switch"
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
type HeaderProps = {
    dark:boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header ({dark,setDark}:HeaderProps){
    const changeDark=()=>{
        setDark(prev => !prev);
    }
    return (
        <div className={`h-[50px] flex items-center justify-between px-4 relative ${dark ? "bg-zinc-800" : "bg-zinc-500"}`}>
                <Switch onClick={changeDark} className="z-1"/>
                <h1 className={`  w-[100%]  absolute text-center ${dark ? "text-blue-500" : "text-zinc-800"}`}></h1>
                <DropdownMenu>
                    <DropdownMenuTrigger ><Button variant="outline" className="bg-red-500 z-1 relative">Dropdown</Button></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Surprise!</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Hello</DropdownMenuItem>
                        <DropdownMenuItem>There</DropdownMenuItem>
                        <DropdownMenuItem>My</DropdownMenuItem>
                        <DropdownMenuItem>Friend</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
        </div>
    )
}