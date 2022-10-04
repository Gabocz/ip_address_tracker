import IconArrow from '../assets/images/icon-arrow.svg'
import { trimSearchTerm } from '../helpers'


function SearchInput({searchTerm, setSearchTerm, setData}) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleClick = () => {
      const trimmedSearchTerm =  trimSearchTerm(searchTerm)
      setSearchTerm(trimmedSearchTerm)
      setData()
    }
    
   

    return (
        <div className='searchContainer'>
            <input 
              id="searchInput" 
              type="text"
              value={searchTerm}
              placeholder="Search for any IP address or domain" 
              onChange={handleChange}/>
            <div className='searchIconCont' onClick={handleClick}>
               <img id="icon_arrow" src={IconArrow} alt="icon arrow"/>
            </div>
        </div>
    )
}

export default SearchInput
