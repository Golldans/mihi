import type { NextPage } from 'next'
import { Fragment, useState } from 'react'

const Home: NextPage = () => {

  const [selectedColumn, setSelectedColumn] = useState(0);

  function handleSectionSpan(event: any) {
    setSelectedColumn(parseInt(event.currentTarget.id));
  }

  return (
    <Fragment>
      <section className={`bg-neutral-900 w-screen max-w-full h-16 text-white`}>
        This is a placeholder value
      </section>
      <section className={`bg-black w-screen max-w-full h-screen grid grid-cols-8 grid-rows-1 flex-wrap`}>
        <div id='1' className={`text-white border-r-slate-700 border-r ${selectedColumn ==  0 ? `col-span-2` : selectedColumn == 1 ? `col-span-5` : `col-span-1`} duration-1000 ease-linear transition-transform`} onClick={handleSectionSpan}>
          This is a representative section 1
        </div>
        <div id='2' className={`text-white border-r-slate-700 border-r ${selectedColumn ==  0 ? `col-span-2` : selectedColumn == 2 ? `col-span-5` : `col-span-1`} duration-150`} onClick={handleSectionSpan}>
          This is a representative section 2
        </div>
        <div id='3' className={`text-white border-r-slate-700 border-r ${selectedColumn ==  0 ? `col-span-2` : selectedColumn == 3? `col-span-5` : `col-span-1`} duration-150`} onClick={handleSectionSpan}>
          This is a representative section 3
        </div>
        <div id='4' className={`text-white border-r-slate-700 border-r ${selectedColumn ==  0 ? `col-span-2` : selectedColumn == 4 ? `col-span-5` : `col-span-1`} duration-150`} onClick={handleSectionSpan}>
          This is a representative section 4
        </div>
      </section>
    </Fragment>
  )
}

export default Home
