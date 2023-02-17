interface TitleProps {
    text: string
}

function TitleSection({ text }: TitleProps) {
    return (
        <div className="title-section">
            <h3 className="title">
                {text}
            </h3>
        </div>
    )
}

export default TitleSection