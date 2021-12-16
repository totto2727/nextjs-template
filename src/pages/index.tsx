import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className='text-3xl font-bold underline'>Hello world!</div>
      <select data-choose-theme className='select select-primary'>
        {/* <option value=''>Default</option> */}
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </>
  )
}

export default Home
