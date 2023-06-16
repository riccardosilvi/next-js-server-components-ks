'use client'

// This pattern will **not** work!
// You cannot import a Server Component into a Client Component.
import React, {useState} from "react";
import Logo from "@/app/logo";

export default function ExampleClientComponent({
                                                   children,
                                               }: {
    children: React.ReactNode
}) {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(count + 1)}>{count}</button>

            <Logo />
        </>
    )
}
