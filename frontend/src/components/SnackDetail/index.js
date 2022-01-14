
import { useEffect} from 'react'
import {  useDispatch } from 'react-redux'
import { useParams} from 'react-router-dom'
import * as sessionActions from '../../../store/session'


import './SnackDetails.css'

const SnackDetails = ({ snacks }) => {
    const dispatch = useDispatch()


    const { id } = useParams()

    const singleSnack = snacks.find(snack => snack.id === +id)



    useEffect(() => {
        dispatch(sessionActions.restoreUser())
    }, [dispatch])

    if (!singleSnack) {
        return (
        <h1>test</h1>
        )
    }

    return (
        <>
        </>
    )
}

export default SnackDetails
