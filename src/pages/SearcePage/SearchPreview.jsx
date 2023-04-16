import React, {useState,useEffect} from 'react';
import Filter from '../../components/SearchPageComponent/Filter';
import RecentSearch from '../../components/SearchPageComponent/RecentSearch';
import SearchSeller from '../../components/SearchPageComponent/SearchSeller';
import { useSelector } from 'react-redux';
import getSearch from '../../api/buyersearch';
import Loading from './Loading';
import Pagination from '../../components/SearchPageComponent/Pagination';


const SearchPreview = () => {

  const{ search} = useSelector(state=>state.Search)

  const [obj,setObj] = useState(null)
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1);

  console.log("Selectors: ",search)

  useEffect(()=>{

    if(search || page || filter.length>0)
    {
      getSearch(search,page,filter).then((resp)=>{
        if(resp && resp.error) {console.log(resp.error)}
        
        setObj(resp.data)
  //       var localData= JSON.parse(localStorage.getItem('persist:root'));
  //  delete localData.Search
  
  //  localStorage.setItem('persist:root', JSON.stringify(localData))

      }).catch(err=>console.log(err))
      
    }
   
    
  },[search,page,filter])

  console.log("from the banner and fetch data is: ", obj)

// from the resp pass the subCategories to the filter to display the categories
// from the resp pass the data to the SearchSeller
//get the saved data from the Slice and send it to the Recent Search


  return (
    obj ? (<div>
      <div className='flex flex-grow w-full'>
        <Filter categories={obj.subCategories} setFilter={(value)=>setFilter(value)} filterData={filter}/>
        <SearchSeller searchString={search} gigs={obj.queryData} />
        
      </div>
      <div className='ml-32'>
      <Pagination 
            page={page}
            limit={obj.limit ? obj.limit : 0}
            total={obj.totalSearch ? obj.totalSearch : 0}
            setPage={(page) => setPage(page)}
      />
      </div>
      <RecentSearch />
    </div>) : (<Loading />)
    
  );
};

export default SearchPreview;