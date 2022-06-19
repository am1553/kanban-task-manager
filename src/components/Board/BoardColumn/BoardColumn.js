import React from 'react'
import BoardCard from './Components/BoardCard'
import BoardHeader from './Components/BoardHeader'

function BoardColumn( {board_header, tasks, circle_color, cardExpansion,
  setCardExpansion} ) {


  return (
    <div className='main__board__board_column'>
        <BoardHeader board_header = { board_header } task_count = { tasks.length } circle_color = { circle_color }/>
        {
            tasks.map((task, i) => {
                return(
                    <BoardCard 
                    key = { i }
                    task_title = { task.title }
                    subtask = { task.subtasks }
                    cardExpansion = { cardExpansion }
                    setCardExpansion = { setCardExpansion }
                    />
                )
            })
        }
    </div>
  )
}

export default BoardColumn