import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Logo from "@/components/Logo";

export default function Nav({ show }) {
    const inactiveLink = "flex gap-1 p-1";
    const activeLink = inactiveLink + " bg-highlight text-black rounded-sm";
    const inactiveIcon = "w-6 h-6";
    const activeIcon = inactiveIcon + " text-primary";
    const router = useRouter();
    const { pathname } = router;
    async function logout() {
        await router.push("/");
        await signOut();
    }
    return (
        <aside
            className={
                (show ? "left-0" : "-left-full") +
                " top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto transition-all"
            }
        >
            <div className="mb-4 mr-4">
                <Logo />
            </div>
            <nav className="flex flex-col gap-2">
                <Link
                    href={"/od/dashboard"}
                    className={pathname === "/od/dashboard" ? activeLink : inactiveLink}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={pathname === "od/dashboard" ? activeIcon : inactiveIcon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    Dashboard
                </Link>

                {/* Conatact route*/}

                <Link
                    href={"/od/myaccount"}
                    className={pathname.includes("/od/myaccount") ? activeLink : inactiveLink}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={
                            pathname.includes("/od/myaccount") ? activeIcon : inactiveIcon
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Account Statement
                </Link>

                {/* Member route end */}

                <Link
                    href={"/od/profile"}
                    className={
                        pathname.includes("/od/profile") ? activeLink : inactiveLink
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={
                            pathname.includes("/od/profile") ? activeIcon : inactiveIcon
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        
                    </svg>
                    My Profile
                </Link>

                


                <button onClick={logout} className={inactiveLink}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                    </svg>
                    Logout
                </button>
            </nav>
        </aside>
    );
}
