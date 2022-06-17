import React from 'react'
import Data from '../../../../data.json'
import BoardColumn from '../../../../components/BoardColumn/BoardColumn'
function Done() {

    const platformLaunchData = Data.boards[0].columns

  return (
    <div className='board__platform_launch__children'>


    {
          platformLaunchData.filter((data) => {
            if(data.name === 'Done') {
              return data
            }
          }).map((data, key) => {
            return(
              <BoardColumn 
                key = { data.name }
                headerTitle = { data.name }
                circleColor = '#67E2AE'
                tasks = { data.tasks }
              />
            )
          })
      }


    </div>
  )
}

export default Done