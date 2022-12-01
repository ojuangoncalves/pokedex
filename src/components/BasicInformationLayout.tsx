import { ReactNode } from "react"

interface BasicInformationLayoutProps {
    title: string
    children: ReactNode
}

export default function BasicInformationLayout(props: BasicInformationLayoutProps) {
    return (
        <div className="flex gap-1 flex-col">
            <h2 className="text-white text-xl font-bold">
                { props.title }
            </h2>
            { props.children }
        </div>
    )
}