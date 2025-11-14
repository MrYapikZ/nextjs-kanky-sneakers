"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {useIsMobile} from "@/hooks/use-mobile";

function AppSidebar() {
    const t = useTranslations();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile && (
                <>
                    <Sidebar>
                        <SidebarContent>
                            <SidebarGroup className="flex flex-col gap-2 p-4">
                                <SidebarMenuButton>
                                    <Link href="#" className="hover:text-red-700">
                                        {t('Navigation.NewArrivals')}
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton>
                                    <Link href="#" className="hover:text-red-700">
                                        {t('Navigation.Collections.title')}
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton>
                                            <Link href="#" className="hover:text-red-700">
                                                {t('Navigation.Collections.items.KankyShoes')}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton>
                                            <Link href="#" className="hover:text-red-700">
                                                {t('Navigation.Collections.items.KankySportStyle')}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton>
                                            <Link href="#" className="hover:text-red-700">
                                                {t('Navigation.Collections.items.KankyClassic')}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton>
                                            <Link href="#" className="hover:text-red-700">
                                                {t('Navigation.Collections.items.KankyBasketball')}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton>
                                            <Link href="#" className="hover:text-red-700">
                                                {t('Navigation.Collections.items.KankyAthletic')}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton>
                                            <Link href="#" className="hover:text-red-700">
                                                {t('Navigation.Collections.items.KankyNXT')}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                                <SidebarMenuButton>
                                    <Link href="#" className="hover:text-red-700">
                                        {t('Navigation.AllItems')}
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton>
                                    <Link href="#" className="hover:text-red-700">
                                        {t('Navigation.News')}
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton>
                                    <Link href="#" className="hover:text-red-700">
                                        {t('Navigation.About')}
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton>
                                    <Link href="#" className="text-red-500 hover:text-red-700">
                                        {t('Navigation.Sale')}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarGroup>
                        </SidebarContent>
                        <SidebarFooter className="h-64">
                            <SidebarMenuButton className="flex flex-col h-full w-full">
                                <Link href="#"
                                      className="hover:text-red-700 h-full w-auto flex flex-col justify-center items-center p-2 aspect-square">
                                    {t('Navigation.Collections.highlight.title')}
                                    <div className="w-auto h-full aspect-square bg-red-700 rounded-2xl"/>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarFooter>
                    </Sidebar>
                </>
            )}
        </>
    );
}

export default AppSidebar;