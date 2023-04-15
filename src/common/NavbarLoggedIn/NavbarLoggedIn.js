import React, {useState} from 'react'
import NavbarLoggedInView from './NavbarLoggedInView'
import { useDispatch } from 'react-redux'
import { searchActions } from '../../store/SearchSlice';

export default function NavbarLoggedIn() {

  const [search,setSearch] = useState('');

  const dispatch= useDispatch()

  console.log('search: ', search)

  // conditionally call the reducer

  search && dispatch(searchActions.setSearchString({search}))


  return (

    <NavbarLoggedInView setSearch={(search) => setSearch(search)} />

  )
}
