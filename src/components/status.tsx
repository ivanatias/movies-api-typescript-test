import { ReactElement } from 'react'

interface Props {
  status: string
}

const Status = ({ status }: Props): ReactElement => {
  return <div className='text-center text-2xl xl:text-4xl'>{status}</div>
}

export default Status
