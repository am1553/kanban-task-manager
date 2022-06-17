import React, { useState } from 'react'
import BoardCard from '../../../components/BoardCard/BoardCard'
import BoardColumn from '../../../components/BoardColumn/BoardColumn'
import BoardHeader from '../../../components/BoardHeader/BoardHeader'
import Doing from './components/Doing'
import ToDo from './components/ToDo'
import Done from './components/Done'

function PlatformLaunch() {

  return (
    <div className='board__platform_launch'>
        <ToDo />
        <Doing />
        <Done />
    </div>
  )
}

export default PlatformLaunch