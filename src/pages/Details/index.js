import React, { useState, useEffect } from "react";


export default function Details(props) {

    const [username, setUsername] = useState(props.match.params.username)
    const [userData, setUserData] = useState(null)
    const [followers, setFollowers] = useState('')


    useEffect(() => {
        if (username) {
            async function fetchdata() {
                const response = await fetch(`http://localhost:4000/github-user-profile/users/${username}`)
                const data = await response.json()
                setUserData(data)
            }
            fetchdata()
        }
    }, [username])

    useEffect(() => {
        if (userData) {
            async function fetchfollowers() {
                const response = await fetch(`http://localhost:4000/github-user-profile/users/${username}/followers`)
                const data = await response.json()
                setFollowers(data)
            }
            fetchfollowers()
        }
    }, [userData])


    return (<>
        <div className="content">
            {userData && <h1>{userData.login}</h1>}
            {followers && <>
                <div>
                    <h2>Is Followed</h2>
                    <div>
                        {followers.isFollowed.map(follower => <h3>{follower.login}</h3>)}
                    </div>
                </div>
                <div>

                </div>
                <h2>Is NOT Followed</h2>
                <div>
                    {followers.isNotFollowed.map(follower => <h3>{follower.login}</h3>)}
                </div>
            </>}
        </div>
    </>);
}