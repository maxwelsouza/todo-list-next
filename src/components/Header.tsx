import Image from 'next/image'
import logo from '../assets/logo.png'

export function Header() {
  return (
    <header className='flex pb-4 mt-20'>
      <Image src={logo} alt='logo' width={50} />
      <h1 className=" -text--blue  text-4xl pt-1">todo list</h1>
    </header>
  )
}