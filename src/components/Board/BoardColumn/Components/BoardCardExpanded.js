import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { themes } from '../../../../styles/theme-context';

function BoardCardExpanded({task_title, description, subtasks, current_status, card_expansion}) {


    // card title
    // card description
    // subtasks
    // status


  return (
    <div 
        className={ card_expansion ? 'main__board__expanded_card main__board__expanded_card-active' : 'main__board__expanded_card' } 
        style={ themes.isTheme === 'light' ? themes.subLight : themes.subDark }>
            
            <div className="overall">
                <header>
                    <h2>
                        Research pricing points of varius competitors and trial different business models.
                    </h2>
                    <MoreVertIcon />
                </header>
                <p className='p_medium'>
                    We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
                </p>
            </div>
            <div className="subtasks">

                <header>
                    <h4>Subtasks (2 of3) </h4>
                </header>

                <div className="subtasks_container">
                    <input type="checkbox" id='subtask' />
                </div>
            </div>
            <div className="current_status">
                <h4>Current Status</h4>
            </div>
    </div>
  )
}

export default BoardCardExpanded