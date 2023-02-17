export interface ContentProps {
    children: React.ReactNode
}

export default function ContentSection ({children}: ContentProps) {
    return(
        <div className="content">
            {children}
        </div>
    )
}