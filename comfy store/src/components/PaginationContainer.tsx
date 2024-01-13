import { useLoaderData } from "react-router-dom"

type MetaData={
    categories: string,
    companies: string,
    pagination: {
      page: number,
      pageCount: number,
      pageSize: number,
      total: number
    }
}

const PaginationContainer = () => {
  const {meta} = useLoaderData() as {meta:MetaData}
  const {pageCount} = meta.pagination
    const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
    const handlePageNumber=()=>{
      
    }
  console.log(pages)
  return (
    <div className=" mb-12 flex justify-end ">
      <div className="join">
        <button
        className="btn btn-xs sm:btn-md join-item uppercase">
            prev
        </button>
        {pages.map((page)=>{
          return(
            <button key={page} className="btn btn-xs sm:btn-md join-item"
            >{page}</button>
            )
          })}
          <button
          className="btn btn-xs sm:btn-md join-item uppercase">
            next
          </button>
          </div>
    </div>
  )
}

export default PaginationContainer