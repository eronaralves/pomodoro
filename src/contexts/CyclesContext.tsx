import { differenceInSeconds } from 'date-fns';
import { createContext, ReactNode, useState, useReducer, useEffect } from 'react'
import { ActionTypes, addNewCycleAction, interruptCurrentCycleAction, markCurrentAsFinishedAction } from '../reducers/cycles/actions';
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';

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
  }, (state) => {
    const storangeStateAsJSON = localStorage.getItem('@pomodoro:cycles-state.1.0.0')

    if(storangeStateAsJSON) {
      return JSON.parse(storangeStateAsJSON)
    }
    
  })
  const {cycles, activeCycleId} = cyclesState;
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if(activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@pomodoro:cycles-state.1.0.0', stateJSON)
  }, [])


  function markCurrentCycleFinished() {
    dispatch(markCurrentAsFinishedAction())
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

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
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