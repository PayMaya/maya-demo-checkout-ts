interface NavBarProps {
    left?: React.ReactNode;
    right?: React.ReactNode;
}

function NavBar({ left, right }: NavBarProps) {
    return(
        <div className="nav-bar">
            <div className="nav-bar-item">
                {left}
            </div>
            <div className="nav-bar-item">
                {right}
            </div>
        </div>
    )
}

export default NavBar