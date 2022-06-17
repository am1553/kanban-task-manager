import React, { useState } from 'react'
import BoardCard from '../BoardCard/BoardCard'
import BoardHeader from '../BoardHeader/BoardHeader'

function BoardColumn({headerTitle, circleColor, tasks}) {

  return (
    <div className='board_column'>
        <BoardHeader title = { headerTitle } circleColor = { circleColor } count = '0'/>
        
        
        {
          tasks.map((data, key) => {
            const subtasks = data.subtasks
            const completedSubTasks = []
            
            subtasks.filter(task => {
              if(task.isCompleted) {
                completedSubTasks.push(task)
              }
            })
            return(
              <BoardCard 
                key={ data.title }
                taskTitle = { data.title }
                numberOfSubTasks = { data.subtasks.length }
                completedSubTasks = { completedSubTasks.length }
              />
            )
          })
        }
    </div>
  )
}

export default BoardColumn