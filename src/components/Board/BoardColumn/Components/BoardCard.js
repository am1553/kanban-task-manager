import React, { useState } from 'react'
import { themes } from '../../../../styles/theme-context'


function BoardCard({task_title, subtask, cardExpansion,
    setCardExpansion}) {
    const body = document.getElementsByTagName('body')[0]
    const [ count, setCount ] = useState(0)
    const completedTasks = []

    subtask.map((task) => {
        if(task.isCompleted) {
            completedTasks.push(task)
        }
    })

    const cardStyle = {
        padding: '2rem 1rem',
        margin: '0 1rem 1rem',
        width: '17.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0px 5px 10px -10px  black, 8px 4px 10px -15px black'
    }

  return (
    <div 
        className='main__board__board_column__card' 
        style={ themes.isTheme === 'light' ? {...cardStyle, ...themes.subLight} : {...cardStyle, ...themes.subDark} }
        onClick = { () => {
            setCardExpansion(true);
            body.style.overflow = 'hidden'
        } }
    >
        <h3>{ task_title }</h3>
        <p className='p_medium' style={ {marginTop: '0.5rem', opacity: '0.5'} }> {completedTasks.length } of { subtask.length } subtasks </p>
    </div>
  )
}

export default BoardCard