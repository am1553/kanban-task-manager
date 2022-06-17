import React, { useState } from 'react'
import BoardCard from '../../../components/BoardCard/BoardCard'
import BoardHeader from '../../../components/BoardHeader/BoardHeader'
import Data from '../../../data.json'


function ToDo() {

  console.log(Data.boards)

    const [toDoCount, setToDoCount] = useState(0)

  return (
    <div className='board__to_do'>
        <BoardHeader title='To Do' count={toDoCount} circleColor='#49C4E5'/>
        <BoardCard title='Build UI for onboarding flow' subtasks='0 of 3 subtasks' />
    </div>
  )
}

export default ToDo