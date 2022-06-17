import React from 'react'
import AddIcon from '@mui/icons-material/Add'
function EmptyMessage() {
  return (
    <div className='board__empty_message'>
        <h2>This board is empty. Create a new column to get started.</h2>
        <button>
            <AddIcon />
            <h4>Add New Column</h4>
        </button>
    </div>
  )
}

export default EmptyMessage