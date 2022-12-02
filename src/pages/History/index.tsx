import { useContext } from "react";
import {formatDistanceToNow} from 'date-fns'
import prBt from 'date-fns/locale/pt-BR'

import { CycleContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const {cycles} = useContext(CycleContext)
  
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{formatDistanceToNow(new Date(cycle.startDate), {
                  addSuffix: true,
                  locale: prBt
                })}</td>
                <td>
                  {cycle.finichedDate && <Status statusColor="green">Concluído</Status>}

                  {cycle.interrupteDate && <Status statusColor="red">Interrompito</Status>}

                  {!cycle.finichedDate && !cycle.interrupteDate && <Status statusColor="yellow">Em andamento</Status>}
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}