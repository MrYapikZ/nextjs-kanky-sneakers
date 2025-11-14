"use client"

import {useTranslations} from "next-intl";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {Link} from "@/i18n/navigation";
import Image from "next/image";
import {SearchIcon, ShoppingCartIcon, UserIcon} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
import {SidebarTrigger} from "@/components/ui/sidebar";

function AppHeader() {
    const t = useTranslations()
    const isMobile = useIsMobile()

    return (
        <header className="w-full flex items-center justify-between p-4 border-b">
            <div className="flex flex-row items-center gap-8 w-full">
                {/* Sidebar trigger - only visible on mobile */}
                {isMobile && (
                    <SidebarTrigger className="mr-2"/>
                )}

                <Link href="/">
                    <Image src={t('App.logo.src')} alt={t('App.logo.alt')} sizes="(max-width: 600px) 20vw, 256px"
                           style={{maxWidth: '100%', height: 24, width: 'auto'}} width={256} height={24} priority/>
                </Link>

                {!isMobile ? (
                    <>
                        {/* Desktop Navigation */}
                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-row gap-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="hover:text-red-700">
                                            {t('Navigation.NewArrivals')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="hover:text-red-700">
                                        {t('Navigation.Collections.title')}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent
                                        className="flex flex-row md:w-[400px] lg:w-[500px]">
                                        <NavigationMenuLink className="w-full">
                                            <Link href="#"
                                                  className="hover:text-red-700 h-full w-auto flex flex-col justify-center items-center p-2 aspect-square">
                                                {t('Navigation.Collections.highlight.title')}
                                                <div className="w-full h-auto aspect-square bg-red-700 rounded-2xl"/>
                                            </Link>
                                        </NavigationMenuLink>
                                        <ul className="grid gap-3 p-4 lg:grid-cols-2 w-full">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#" className="hover:text-red-700">
                                                        {t('Navigation.Collections.items.KankyShoes')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#" className="hover:text-red-700">
                                                        {t('Navigation.Collections.items.KankySportStyle')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#" className="hover:text-red-700">
                                                        {t('Navigation.Collections.items.KankyClassic')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#" className="hover:text-red-700">
                                                        {t('Navigation.Collections.items.KankyBasketball')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#" className="hover:text-red-700">
                                                        {t('Navigation.Collections.items.KankyAthletic')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#" className="hover:text-red-700">
                                                        {t('Navigation.Collections.items.KankyNXT')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="hover:text-red-700">
                                            {t('Navigation.AllItems')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="hover:text-red-700">
                                            {t('Navigation.News')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="hover:text-red-700">
                                            {t('Navigation.About')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="text-red-500 hover:text-red-700">
                                            {t('Navigation.Sale')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </>
                ) : null}

                <div className="ml-auto flex flex-row items-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-row gap-2">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="#"
                                          className="transition-all hover:drop-shadow-red-700 hover:drop-shadow-md hover:scale-110">
                                        <SearchIcon/>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="#"
                                          className="transition-all hover:drop-shadow-red-700 hover:drop-shadow-md hover:scale-110">
                                        <ShoppingCartIcon/>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="#"
                                          className="transition-all hover:drop-shadow-red-700 hover:drop-shadow-md hover:scale-110">
                                        <UserIcon/>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;