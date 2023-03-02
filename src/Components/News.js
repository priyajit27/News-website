import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
// static defaultProps = {
//  country:"in",
//  pageSize:9,
//  category:"general"
// }
// static propTypes = {
//   country:PropTypes.string,
//   pageSize:PropTypes.number,
//   category:PropTypes.string
// }


const [articles,setarticles]=useState([])
const [loading,setloading]=useState(true)
const [page,setpage]=useState(1)
const [totalResults,settotalResults]=useState(0)



let capitalise=(string)=>{
return string.charAt(0).toUpperCase() + string.slice(1)
}



  // constructor(props){
  //   super(props);
  //   this.state={
  //     articles:[],
  //     page:1,
  //     loading:true,
  //     totalResults:0
  //   }



    // document.title=`${this.capitalise(this.props.category)}-MyNews`
  // }



  const updateNews=async()=>{
    props.setProgress(10)
    console.log("componentDidMount");
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading: true})
    setloading(true)
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json();
    props.setProgress(70);
    console.log(parsedData)


    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
      props.setProgress(100)
  }


  useEffect(() => {
    document.title=`${capitalise(props.category)}-MyNews`
    updateNews();
    /* eslint-disable */
  }, [])
  
const fetchMoreData = async() => {
  // setpage(page+1 )
  // console.log("componentDidMount");
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  // this.setState({loading: true})
  setpage(page+1 )
  let data=await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData)
  setarticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)
  setloading(false)
  // this.setState({
  //   articles:this.state.articles.concat(parsedData.articles),
  //   totalResults:parsedData.totalResults
  //   // loading: false
  //   })
};


  // render() {
    return (
      <>
      <h1 className='text-center mx-3' style={{margin:'30px 0px',marginTop:'80px'}}>My-News Top Headlines from {capitalise(props.category)}</h1>
      {loading && <Spinner/>}

      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
      <div className="row my-3">
       {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
       { articles.map((element)=>{
        return  <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
          })}
 </div>
 </div>
 </InfiniteScroll>


    {/* <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next	&rarr;</button>
    </div> */}
 </>
    )
  }
// }




News.defaultProps = {
  country:"in",
  pageSize:9,
  category:"general"
 }
 News.propTypes = {
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category:PropTypes.string
 }


 export default News
 