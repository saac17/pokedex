import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, pagesLength, setPage}) => {

    const pagesPerBlock = 6
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    let pages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1

    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
    for(let i = initialPage; i <= limitPage; i++){
        pages.push(i)
    }

    const handelPrev = () => {
        if(page === 1){
            setPage(pagesLength)
        } else{
            setPage(page - 1)
        }
    }

    const handelNext = () => {
        if(page === pagesLength){
            setPage(1)
        } else{
            setPage(page + 1)
        }
    }

  return (
    <div className='pagination'>
        <div onClick={handelPrev} className='btnPagePrev'><i class='bx bxs-chevrons-left'></i></div>
        {
            pages.map((e, index) => {
                return <button onClick={() => setPage(e)} key={index}  className={e == page ? 'active' : 'inactive'}>{e}</button>
            })  
        }
        <div onClick={handelNext} className='btnPageNext' ><i class='bx bxs-chevrons-right' ></i></div>
    </div>
  )
}

export default Pagination