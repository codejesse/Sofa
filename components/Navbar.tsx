import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { ChevronRightCircle, ShoppingBag } from "lucide-react";

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 fixed bg-white z-[999]">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-none"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <Link className="flex" href="/">
          <Image
            priority
            className="flex lg:hidden md:ml-64 justify-center"
            src="/logo.svg"
            width={250}
            height={150}
            alt="logo"
          />
        </Link>
        <SheetContent className="z-[999]" side="left">
          <div className="flex w-full items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                priority
                className="ml-[-20px]"
                src="/logo.svg"
                width={150}
                height={150}
                alt="logo"
              />
              <span className="sr-only">Sofa Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="lg:hidden">
              <SearchIcon className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <nav className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Products
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link
        href="/"
        className="flex items-center mr-6 hidden lg:flex"
        prefetch={false}
      >
        <Image priority src="/logo.svg" width={150} height={150} alt="logo" />
        <span className="sr-only">Sofa Inc</span>
      </Link>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Products
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="hidden lg:flex border-none"
        >
          <SearchIcon className="h-6 w-6" />
          <span className="sr-only">Search</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden lg:flex border-none"
        >
          <ShoppingBag className="h-6 w-6" />
          <span className="w-4 h-4 bg-black text-white m-auto rounded-full absolute ml-6 mb-2">
            <p className="text-center mt-[-3px]">0</p>
          </span>
          <span className="sr-only">Shopping bag</span>
        </Button>
        {/* <Image src="/logo.svg" width={200} height={200} alt="logo" /> */}
        <Button variant="outline" size="icon" className="lg:hidden border-none">
          <ShoppingBag className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return <ChevronRightCircle />;
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
