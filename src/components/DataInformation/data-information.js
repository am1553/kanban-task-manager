import React from "react";
import Data from '../../data.json';

export const data = Object.entries(Data.boards)



const BoardData = React.createContext(data)

export default BoardData