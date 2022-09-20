import { ReactElement } from 'react'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props): ReactElement => {
  return <main className='max-w-3xl mx-auto py-5 px-4'>{children}</main>
}

export default Container
