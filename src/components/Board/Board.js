import React, {useState} from 'react'
import BoardColumn from './BoardColumn/BoardColumn'
import BoardCardExpanded from './BoardColumn/Components/BoardCardExpanded'

function Board({ board_data, cardExpansion, setCardExpansion }) {
    const body = document.getElementsByTagName('body')[0]
    const data = board_data[1]
    const circleColors = [['#49C4E5'], ['#8471F2'], ['#67E2AE']]



    // STATES FOR CARD EXPANSION ====== FOR MORE INFORMATION WHEN USER CLICKS ON A CARD
    
    const [taskTitle, setTaskTitle] = useState()
    const [taskDescription, setTaskDescription] = useState()
    const [taskSubTasks, setTaskSubTasks] = useState()
    const [taskCurrentStatus, setTaskCurrentStatus] = useState()
    
    



  return (
    <div className='main__board'>

      {
        data.columns.map((data, i) => {
          return(
            <BoardColumn 
              key={ i }
              board_header = { data.name }
              tasks = { data.tasks }
              circle_color = { circleColors[i] }
              cardExpansion = { cardExpansion }
              setCardExpansion = { setCardExpansion }
            />
          )
        })
      }
        <BoardCardExpanded 
          task_title = ''
          description = ''
          subtasks = ''
          current_status = ''
          card_expansion = { cardExpansion }
        />

    </div>
  )
}

export default Board