import { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Home, FileDown, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function DashboardLayout({ children, rightPanel }: { children: ReactNode; rightPanel?: ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader className="pt-4">
          <div className="flex items-center gap-2 px-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c750484ced041729653b490fdd78f55%2F383493e645e74414bfa819218e1479c3?format=webp&width=80"
              alt="AyurSutra logo"
              className="h-8 w-8 rounded-md bg-white object-contain ring-1 ring-border p-1"
            />
            <div className="font-semibold tracking-wide">AyurSutra</div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to="/">
                    <SidebarMenuButton asChild isActive={isActive("/")}>{
                      /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
                    }<a className="flex items-center gap-2"><Home /> <span>Dashboard</span></a></SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to="/reports">
                    <SidebarMenuButton asChild isActive={isActive("/reports")}>
                      {
                        /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
                      }
                      <a className="flex items-center gap-2"><FileDown /> <span>Reports</span></a>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <button className="w-full" aria-disabled>
                    <SidebarMenuButton disabled>
                      <Settings /> <span>Settings</span>
                    </SidebarMenuButton>
                  </button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <div className="flex items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/80?img=65" alt="Nandini" />
              <AvatarFallback>ND</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-xs">
              <span className="font-medium">Nandini</span>
              <span className="text-muted-foreground">Admin</span>
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className={cn("sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b")}
        >
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <div className="text-lg font-semibold tracking-tight">Patient Progress Dashboard</div>
              <Badge variant="secondary" className="ml-2 bg-[hsl(var(--leaf))]/15 text-[hsl(var(--leaf))] border-0">Ayurvedic</Badge>
            </div>
            <div className="flex items-center gap-2 pr-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <User className="mr-2 h-4 w-4" /> Patient
              </Button>
            </div>
          </div>
        </header>
        <div className="ayur-bg min-h-[calc(100svh-3.5rem)]">
          <div className="mx-auto grid w-full max-w-[1400px] gap-4 p-4 lg:grid-cols-[2fr_1fr]">
            <div className="grid grid-cols-1 gap-4">
              {children}
            </div>
            <aside className="space-y-4">{rightPanel}</aside>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
