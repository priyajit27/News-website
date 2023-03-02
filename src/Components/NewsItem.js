import React from 'react'

const NewsItem=(props)=> {
  // render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div className='my-3 mx-3'>
        <div className="card" style={{width:"20rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '88%'}}>
    {source}
  </span>
  <img src={!imageUrl?"https://guwahatiplus.com/public/web/images/default-news.png":imageUrl} className="card-img-top" alt="..." height='170px'/>
  <div className="card-body ">
    <h5 className="card-title">{title} 
  </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toDateString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
// }

export default NewsItem
