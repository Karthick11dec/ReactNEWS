import React, { Fragment } from 'react'

function Pagination({ setcounter, counter, align }) {

    return (
        <Fragment>
            <div className={align} >
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <div className="page-link bg-dark" aria-label="Previous" onClick={() => {
                                if (counter > 1) {
                                    setcounter(counter - 1)
                                }
                            }}>
                                <span aria-hidden="true">&laquo;</span>
                            </div>
                        </li>
                        <li className="page-item">
                            <div className="page-link bg-dark">{counter}</div>
                        </li>
                        <li className="page-item">
                            <div className="page-link bg-dark" aria-label="Next" onClick={() => { setcounter(counter + 1) }}>
                                <span aria-hidden="true">&raquo;</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default Pagination
