import Logo from "@/app/logo";
import Counter from "@/app/counter";

// This pattern works:
// You can pass a Server Component as a child or prop of a
// Client Component.
export default function LogoCounter(){
    return (
        <Counter>
            <Logo />
        </Counter>
    )
}
