import { useSelector } from 'react-redux'

function UserCard() {
    const currentUser: User = useSelector((state: AppState) => state.currentUser)

    return (
        <div className='nav-bar-item'>
            <img src="data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjY5NDkgMTdDMjAuNzExNyAxNyAyMS41MzYgMTcuODI0MyAyMS41MzYgMTguODQxMVYxOS4xODg3QzIxLjUzNiAyMC4xODI4IDIwLjczMDEgMjAuOTg4NyAxOS43MzYgMjAuOTg4N0g1Ljg3MDMxQzQuODc2MiAyMC45ODg3IDQuMDcwMzEgMjAuMTgyOCA0LjA3MDMxIDE5LjE4ODdMNC4wNzAzMSAxOC44QzQuMDcwMzIgMTcuODA1OSA0Ljg3NjIgMTcgNS44NzAzMiAxN0gxOS42OTQ5WiIgZmlsbD0iYmxhY2siIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTYuMTczNyAxN0MxNy4xOTA1IDE3IDE4LjAxNDggMTcuODI0MyAxOC4wMTQ4IDE4Ljg0MTFWMTkuMTg4N0MxOC4wMTQ4IDIwLjE4MjggMTcuMjA4OSAyMC45ODg3IDE2LjIxNDggMjAuOTg4N0g1Ljg3MDMxQzQuODc2MiAyMC45ODg3IDQuMDcwMzEgMjAuMTgyOCA0LjA3MDMxIDE5LjE4ODdMNC4wNzAzMSAxOC44QzQuMDcwMzIgMTcuODA1OSA0Ljg3NjIgMTcgNS44NzAzMSAxN0gxNi4xNzM3WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxMy43MzgzIiBjeT0iOCIgcj0iNSIgZmlsbD0iYmxhY2siIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTEuNTM3OSAyLjAwOTc3QzEyLjM5ODUgMS45NDIxNiAxMy4yNzA5IDEuOTQyNTYgMTQuMTMxNiAyLjAwOTc3TDE0LjE5MDEgMTAuNDk2OEgxMS40NTdMMTEuNTM3OSAyLjAwOTc3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE0LjEwODYgMTMuOTkzMkMxMy4yNDggMTQuMDYwOCAxMi4zNzU2IDE0LjA2MDQgMTEuNTE0OSAxMy45OTMyTDExLjQ1NjQgNS41MDYxM0wxNC4xODk1IDUuNTA2MTNMMTQuMTA4NiAxMy45OTMyWiIgZmlsbD0iYmxhY2siLz4KPGNpcmNsZSBjeD0iMTEuODY3MiIgY3k9IjgiIHI9IjUiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==" 
                alt='User icon'
                className='user-img'
            />
            <p className="user-text">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
       </div>
    )
}

export default UserCard