import Button from '../../component/UI/Button/Button';
import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../../redux/action/counter.action';

function Counter(props) {
    let c1 = useSelector(state=>state.counter)
    const dispatch = useDispatch()

    const hanldeIncrement = () => {
        dispatch(increment())
    }

    const hanldeDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div className='container'>
            <Button onClick={hanldeIncrement}>+</Button>
            {c1.count}
            <Button onClick={hanldeDecrement}>-</Button>
        </div>
    );
}

export default Counter;