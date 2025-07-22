import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border-solid border-blue-400 border-2 p-2 rounded-2xl w-full h-10 pl-5"
      />
      <button type="submit" className="h-10 w-12 flex justify-center items-center bg-blue-500 text-white rounded-3xl border-blue-400">
        <FaSearch className='text-white' size={18}/>
      </button>
    </form>
  );
}

export default SearchBar;