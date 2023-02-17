interface CardProps {
    className?: string,
    children: React.ReactNode;
}

function Card({ className, children }: CardProps) {
    return (
        <div className={className ?? 'card'}> 
        { children }
        </div>
    )
}

export default Card