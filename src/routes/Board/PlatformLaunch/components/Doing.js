import React from 'react'
import Data from '../../../../data.json'
import BoardColumn from '../../../../components/BoardColumn/BoardColumn'

function Doing() {

    const platformLaunchData = Data.boards[0].columns


  return (
    <div className='board__platform_launch__children'>

      {
          platformLaunchData.filter((data) => {
            if(data.name === 'Doing') {
              return data
            }
          }).map((data, key) => {
            return(
              <BoardColumn 
                key = { data.name }
                headerTitle = { data.name }
                circleColor = '#8471F2'
                tasks = { data.tasks }
              />
            )
          })
      }


    </div>
  )
}

export default Doing