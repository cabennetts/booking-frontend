import Link from "next/link";
import { getServerSession } from "next-auth";
export async function Navbar() {
    const session = await getServerSession()

    return (
        <nav className="h-[64px] flex justify-between items-center px-4 border-b">
            {session && (
                <>
                <p>{session?.user?.name}</p>
                </>
            )}
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </nav>
    )
}