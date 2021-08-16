import React, { useState, useEffect } from 'react'
import Card from './Card';

const UseEffectAPI = () => {

    const [beers, setBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [datefilter, setDateFilter] = useState('')
    const getBeers = async () => {
        const response = await fetch('https://api.punkapi.com/v2/beers/')
        setBeers(await response.json());
    }

    useEffect(() => {
        getBeers();
    }, []);
    return (
        <div>
            <nav data-testid="mynavbar" className="navbar navbar-expand-lg navbar-light navbarstuff bg-transparent">
                <img data-testid="navlogo" id="navbarimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILpiGhqSwexMG23t7oEE1stGAV5Yb70ZuGg&usqp=CAU" />
                <h1 data-testid="brandname" id="knewery">Knewery!</h1>
                <div className="searchoption input-icons">
                    <input
                        data-testid="searchbar"
                        type="text"
                        placeholder=" Search for beers..."
                        onChange={event => { setSearchTerm(event.target.value) }}
                    />
                </div>

                <div className="yeardropdown">
                    <select data-testid="yeardropdown" className="selectop" style={{ width: 182, height: 31 }} onChange={(event) => { setDateFilter(event.target.value) }} className="form-select" aria-label="Default select example">
                        <option >First brewed in...</option>
                        <option >2007</option>
                        <option >2008</option>
                        <option >2009</option>
                        <option >2010</option>
                        <option >2011</option>
                        <option >2012</option>
                        <option >2013</option>
                        <option >2014</option>
                        <option >2015</option>
                    </select>
                </div>
            </nav>

            <div className="container-fluid mt-5">
                <div className="row text-center ">
                    {
                        beers.filter((val) => {
                            if (searchTerm === '' && datefilter === 'First brewed in...') {
                                return val
                            }
                            else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) && (val.first_brewed.includes(datefilter) || datefilter === 'First brewed in...')) {
                                return val
                            }
                        }).map((currElem) => {
                            return (
                                <Card currElem={currElem} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UseEffectAPI
