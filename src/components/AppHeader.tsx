'use client';
import React from 'react';
import {useTranslations} from "use-intl";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {Link} from "@/i18n/navigation";
import Image from "next/image";
import {SearchIcon, ShoppingCartIcon, UserIcon} from "lucide-react";

function AppHeader() {
    const t = useTranslations()

    return (
        <>
            <header className="w-screen flex items-center justify-between p-4">
                <div className="flex flex-row items-center gap-8 w-full">
                    <Link href="/">
                        <Image src={t('App.logo.src')} alt={t('App.logo.alt')} sizes="(max-width: 600px) 20vw, 256px"
                               style={{maxWidth: '100%', height: 24, width: 'auto'}} width={256} height={24}/>
                    </Link>
                    <NavigationMenu>
                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-row gap-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            {t('Navigation.NewArrivals')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        {t('Navigation.Collections.title')}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="flex flex-row justify-between">
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                {t('Navigation.Collections.highlight.title')}
                                            </Link>
                                        </NavigationMenuLink>
                                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        {t('Navigation.Collections.items.KankyShoes')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        {t('Navigation.Collections.items.KankySportStyle')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        {t('Navigation.Collections.items.KankyClassic')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        {t('Navigation.Collections.items.KankyBasketball')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        {t('Navigation.Collections.items.KankyAthletic')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        {t('Navigation.Collections.items.KankyNXT')}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            {t('Navigation.AllItems')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            {t('Navigation.News')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            {t('Navigation.About')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="text-red-500">
                                            {t('Navigation.Sale')}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </NavigationMenu>
                    <div className="ml-auto flex flex-row items-center">
                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-row gap-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <SearchIcon/>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <ShoppingCartIcon/>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <UserIcon/>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </header>
        </>
    );
}

export default AppHeader;