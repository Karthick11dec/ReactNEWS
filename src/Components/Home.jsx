import { Fragment } from 'react';
import Articles from "./Articles";
import Pagination from "./Pagination";

const category = [
    'business',
    'fashion',
    'food',
    'health',
    'magazine',
    'movies',
    'politics',
    'realestate',
    'science',
    'sports',
    'technology',
    'crimes',
    'e-commerce'
];

const Home = (
    {
        array,
        counter,
        setcounter,
        setQuery,
        heading,
        setheading,
        setValue,
        Period,
        Headlines,
        setHeadlines
    }) => {

    const Title = (param) => {
        setheading(` ${param}`);
        setcounter(1);
        setQuery(param);
        setValue("");
        setHeadlines(false);
    }

    return (
        <Fragment>
            <div className="container-fluid p-0 bar2">

                <div className="row gx-0 bg-dark text-light pt-4 bar5 align-items-center justify-content-center">

                    <h4 className="col-lg-9 col-md-9 col-sm-7 col-10 text-center">
                        {Headlines
                            ?
                            (<h4>Today's Headlines - <span className="text-color fs-5">{Period}</span></h4>)
                            :
                            (<h4>Quick Headlines - <span className="text-color fs-5" style={{ textTransform: 'capitalize' }}>{heading}</span></h4>)
                        }
                    </h4>
                    <div className="col-lg-3 col-md-3 col-sm-7 col-10">
                        <Pagination setcounter={setcounter} counter={counter} align="d-flex justify-content-center" />
                    </div>

                </div>

                <div className="row gx-0">
                    <div className="col-lg-2 col-md-3 col-sm-12 col-12 bg-dark text-light sidebar bar6 order-lg-1 order-md-1 order-sm-1 order-2">
                        <span className="text-color fw-bolder bg-dark">Some Features Topics</span>
                        {category.map((item, index) => (
                            <div
                                key={index}
                                className="hover p-2 bar"
                                onClick={() => { Title(item); }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-10 col-md-9 col-sm-12 col-12 bar3 bg-dark text-light order-lg-2 order-md-2 order-sm-2 order-1">
                        {array.length === 0 ? (<h3 className="text-center text-color m-5">Loading News Contents...</h3>) : (
                            <div>
                                <Articles
                                    array={array}
                                    counter={counter}
                                    setcounter={setcounter}
                                />
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Home;