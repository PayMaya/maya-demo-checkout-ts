import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom';

interface RedirectButtonProps {
    display: string;
    url: string;
    className?: string;
    onClick?: MouseEventHandler
}

function RedirectButton ({ display, url, className, onClick }: RedirectButtonProps) {
    return (
        <Link to={url}>
            <button className={className} onClick={onClick}>{display}</button>
        </Link>
    )
}

export default RedirectButton