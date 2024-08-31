'use client';
// MobileNav.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface MobileNavProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image 
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
              <Image 
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Horizon logo"
                className="size-[24px] max-xl:size-14"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                           <Link href={item.route} key={item.label} 
                        className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              'brightness-[3] invert-0': isActive
                            })}
                          />
                        </div>
                        <p className={cn("text-16 font-semibold text-black-2", { "text-white":isActive })}>
                          {item.label}
                        </p>
                      </Link>
                      </SheetClose>
                      
                    );
                  })}

                  USER
                </nav>
              </SheetClose>

              FOOTER
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
