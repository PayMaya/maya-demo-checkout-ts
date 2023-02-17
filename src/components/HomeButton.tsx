import { MouseEventHandler } from "react";
import RedirectButton from "./RedirectButton"

interface HomeButtonProps {
    onClick?: MouseEventHandler
}

function HomeButton ({ onClick }: HomeButtonProps) {
    return (
        <div className="button-container nav-bar-item">
            <RedirectButton display='Home' url='/' className='btn' onClick={onClick} />
        </div>
    )
}

export default HomeButton