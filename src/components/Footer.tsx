type FooterProps = {
    dark:boolean;
    
}

export default function Footer({dark}:FooterProps) {
  return <div className={`h-[50px] ${dark ? "bg-zinc-800" : "bg-zinc-500"}`}></div>;
}
