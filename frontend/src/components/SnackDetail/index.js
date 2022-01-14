
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory, Link, Redirect } from 'react-router-dom'
import * as sessionActions from '../../../store/session'

import { getSnacks } from "../../../store/snack"

import './SnackDetails.css'

const SnackDetails = ({ snacks }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const { id } = useParams()

    const singleSnack = snacks.find(snack => snack.id === +id)

    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {

        dispatch(sessionActions.restoreUser())
    }, [dispatch])

    if (!singleSnack) {
        return (
            <p className='nope'>Either you drank it, or we don't have it.</p>
        )
    }

    return (
        <>
            <div className='snack-snack-container'>
                <img className='snack-snack' src={singleSnack?.snackUrl} />
            </div>
            <div className='snack-data-container'>
                <div className='snack-data'>
                    <h1>{singleSnack?.User?.username}</h1>
                    <p><b>Content:</b> {singleSnack?.content}</p>
                    <p><b>Posted By:</b> {singleSnack?.User?.username}</p>
                </div>
            </div>
        </>
    )
}

export default SnackDetails
