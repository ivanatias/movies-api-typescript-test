import { ReactElement } from 'react'

interface Props {
  children: string
  callback: () => void
  disabled?: boolean
}

const Button = ({
  children,
  callback,
  disabled = false,
}: Props): ReactElement => {
  return (
    <button
      className='text-white text-sm 2xl:text-lg text-center bg-blue-500 rounded-md py-2 px-5 hover:bg-blue-600 transition-colors duration-150'
      onClick={callback}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
