import React, {useState,useEffect} from 'react';
import SeSearchFilter from '../../components/SellerSearchComponent/SeSearchFilter';
import SeSearchShow from '../../components/SellerSearchComponent/SeSearchShow';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import {getSellerSearch} from '../../api/sellersearch';
import Pagination from '../../components/SearchPageComponent/Pagination';

const SellerSearchView = () => {

  const{ search} = useSelector(state=>state.Search)

  const [obj,setObj] = useState(null)
  const [languageFilter, setLanguageFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [experienceFilter, setExperienceFilter] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{

    if(search || page || languageFilter.length>0 || categoryFilter.length>0 || experienceFilter.length >0)
    {
      getSellerSearch(search,page,languageFilter,categoryFilter,experienceFilter).then((resp)=>{
        if(resp && resp.error) {console.log(resp.error)}
        
        setObj(resp.data)

      }).catch(err=>console.log(err))
      
    }
   
    
  },[search,page,languageFilter,experienceFilter,categoryFilter])

  console.log("from the banner and fetch data is: ", obj)


  return (
    obj ? (<div>
      <div className='flex flex-row w-full'>
        <SeSearchFilter 
        categories={obj.categories} sellerLevels={obj.experiences} languages={obj.languages} 
        languageFilter={languageFilter} setLanguageFilter={(value)=>setLanguageFilter(value)}
        experienceFilter={experienceFilter} setExperienceFilter={(value)=>setExperienceFilter(value)}
        categoryFilter={categoryFilter} setCategoryFilter={(value)=>setCategoryFilter(value)}
        />
        <SeSearchShow searchString={search} jobs={obj.queryData} />
       
      </div>
      <div className='ml-32'>
            <Pagination 
                  page={page}
                  limit={obj.limit ? obj.limit : 0}
                  total={obj.totalSearch ? obj.totalSearch : 0}
                  setPage={(page) => setPage(page)}
            />
        </div>
      </div>) : (<Loading />)
    
  );
};

export default SellerSearchView;