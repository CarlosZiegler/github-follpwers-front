import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom'


export default function Home() {
    const [username, setUsername] = useState('')

    return (<>
        <div className="content">
            <form>
                <label htmlFor="username">Type your Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                <Link to={`/user/${username}`}>GO!</Link>
            </form>
        </div>
    </>);
}