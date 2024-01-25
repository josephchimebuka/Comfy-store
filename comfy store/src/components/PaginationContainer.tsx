import { useLoaderData,useLocation,useNavigate } from "react-router-dom"

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
  const {page, pageCount} = meta.pagination
  const navigate = useNavigate()
  const {search, pathname} = useLocation()
    const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
    const handlePageNumber=(pageNumber:any)=>{
      const searchParams = new URLSearchParams(search);
      searchParams.set('page', pageNumber);
      navigate(`${pathname}?${searchParams.toString()}`);
    }
  console.log(pages)
  return (
    <div className=" mb-12 flex justify-end ">
      <div className="join">
        <button
        onClick={()=>{
          let prevPage = page - 1;
          if (prevPage < 1) prevPage = pageCount;
          handlePageNumber(prevPage);
        }}
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
          className="btn btn-xs sm:btn-md join-item uppercase"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageNumber(nextPage);
          }}>
            next
          </button>
          </div>
    </div>
  )
}

export default PaginationContainer