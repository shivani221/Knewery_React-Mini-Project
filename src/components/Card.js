import React from 'react'

export default function Card({currElem}) {
    return (
        <div className="col-10 col-md-3 mt-5" key={currElem.id}>
            <div className="card ">
                <div className="post-wrap">
                    <div className="post">
                        <div className="post-front">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img data-testid="cardfrontimg" className="sizedimage" src={currElem.image_url} alt="Card image cap" />
                                </div>
                                <div className="card-body frontbody">
                                    <div className="beername"><h4 className="card-title">{currElem.name}</h4></div>
                                    <br />
                                    <i class="fas fa-quote-left"> </i><br />
                                    <span className="card-text tagline"> {currElem.tagline} </span><br />
                                    <i class="fas fa-quote-right"> </i>
                                    <br /><br />
                                    <span><i class="fas fa-calendar-day"></i> </span>
                                    <span className="card-text firstbrewed">  {currElem.first_brewed}</span>
                                </div>
                            </div>
                        </div>
                        <div className="post-back">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img data-testid="cardbackimg" className="sizedimage" src={currElem.image_url} alt="Card image cap" />
                                </div>
                                <div className="class-body backbody">
                                    <br />
                                    <h4 className="card-title fooditems">Goes best with..</h4>
                                    <br />
                                    <ul class="list-group list-group-flush" style={{ textAlign: "left", marginRight: 5 }}>
                                        <li class="list-group-item">{currElem.food_pairing[0]}</li>
                                        <li class="list-group-item">{currElem.food_pairing[1]}</li>
                                        <li class="list-group-item">{currElem.food_pairing[2]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
