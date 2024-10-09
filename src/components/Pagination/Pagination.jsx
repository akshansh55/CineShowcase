import "./pagination.css";
function Pagination({pageNumber,handleprevious,handlenext}){
    return(
        <div className="pagination">
                <div onClick={handleprevious} className="prev">prev</div>
                <div className="page-number">{pageNumber}</div>
                <div onClick={handlenext} className="next">next</div>
        </div>
    )
}

export default Pagination;