import { createContext, ReactNode, useState, useReducer } from 'react'
import { ActionTypes, Cycle, cyclesReducer } from '../reducers/cycles';

interface CreateCycleDate {
  task: string;
  minutesAmount: number;
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleDate) => void;
  interruptCurrentCycle: () => void
}

export const CycleContext = createContext({} as CycleContextType)

interface CyclesContenxtProvider {
  children: ReactNode
}


export function CyclesContenxtProvider({children}: CyclesContenxtProvider) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null
  })
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const {cycles, activeCycleId} = cyclesState;

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function markCurrentCycleFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      }
    })
  }
  
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleDate) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    })
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      }
    })
  }

  return (
    <CycleContext.Provider value={{
      cycles,
      activeCycle, 
      activeCycleId, 
      markCurrentCycleFinished, amountSecondsPassed, 
      setSecondsPassed,
      createNewCycle,
      interruptCurrentCycle
    }}>
      {children}
    </CycleContext.Provider>
  )
}