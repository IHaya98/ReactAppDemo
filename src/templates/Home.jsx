import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { signOut } from '../reducks/users/operation';
import {getUserId,getUsername} from '../reducks/users/selections'
const Home = () => {

    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);
    const username = getUsername(selector);


    return (
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">Home</h2>
            <div className="module-spacer--medium" />
            <p>ユーザーID: {uid}</p>
            <p>ユーザー名: {username}</p>
            <button onClick={() => dispatch(signOut())}>Sign out</button>
        </div>
    )
}

export default Home