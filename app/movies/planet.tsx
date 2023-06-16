export default function Planet({name, children }: { name: string, children: React.ReactNode }) {
    return (
        <li>{name} {children}</li>
    )
}
