import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className='text-3xl font-bold underline'>Hello world!</div>
      <button
        className='btn btn-primary'
        data-toggle-theme='dark,light'
        data-act-class='ACTIVECLASS'>
        Change Mode
      </button>
    </>
  )
}

export default Home
