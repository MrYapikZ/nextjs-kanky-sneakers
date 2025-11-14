"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
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
                            <nav className="flex flex-col gap-2 p-4">
                                <Link href="#" className="hover:text-red-700">
                                    {t('Navigation.NewArrivals')}
                                </Link>
                                <Link href="#" className="hover:text-red-700">
                                    {t('Navigation.Collections.title')}
                                </Link>
                                <Link href="#" className="hover:text-red-700">
                                    {t('Navigation.AllItems')}
                                </Link>
                                <Link href="#" className="hover:text-red-700">
                                    {t('Navigation.News')}
                                </Link>
                                <Link href="#" className="hover:text-red-700">
                                    {t('Navigation.About')}
                                </Link>
                                <Link href="#" className="text-red-500 hover:text-red-700">
                                    {t('Navigation.Sale')}
                                </Link>
                            </nav>
                        </SidebarContent>
                        <SidebarFooter>
                            {/* Footer content if needed */}
                        </SidebarFooter>
                    </Sidebar>
                </>
            )}
        </>
    );
}

export default AppSidebar;