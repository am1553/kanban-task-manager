import React from 'react'
import Add from '@mui/icons-material/Add'



function EmptyMessage() {

    const emptyMessageStyled = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
        textAlign: 'center',
        height: 'calc(100vh - 4rem)'
    }

    const buttonStyled = {
        backgroundColor: '#635FC7',
        border: 'none',
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        padding: '0 1rem',
        margin: '2rem 0',
        borderRadius: '2rem'
    }
    
  return (
    <div className='empty_message' style={ emptyMessageStyled }>

        <h1>This board is empty. Create a new column to get started.</h1>
        <button style={ buttonStyled }>
            <Add />
            <h3>Add New Column</h3>
        </button>
    </div>
  )
}

export default EmptyMessage