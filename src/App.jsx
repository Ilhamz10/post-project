import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './styles/App.css';
import MyInput from './components/UI/input/MyInput';
import PostTable from './components/PostTable/PostTable';
import { fetchPosts } from './asyncAction/posts';
import Pagination from './components/Pagination/Pagination';

function App() {
  const dispatch = useDispatch()

  const totalPages = useSelector(state => state.totalPages)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const posts = useSelector(state => state.posts)
  const sortType = useSelector(state => state.selectedSort)
  const [searchQuery, setSearchQuery] = useState('')

  let pagesArray = useMemo(() => {
    let result = []
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
    }
    return result
  }, [totalPages])

  useEffect(() => {
    dispatch(fetchPosts(limit, page))
  }, [page])

  const sortedPosts = useMemo(() => {
    if (sortType) {
      if (sortType === 'id') {
        return [...posts].sort((a, b) => a[sortType] - b[sortType])
      }
      return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]))
    }
    return posts
  }, [sortType, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery) ||
      post.body.toLowerCase().includes(searchQuery) ||
      String(post.id).toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  return (
    <div className="App">
      <div className='search-container'>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
      </div>
      {sortedAndSearchedPosts.length
        ?
        <PostTable posts={sortedAndSearchedPosts} />
        :
        <h1 style={{ textAlign: 'center', letterSpacing: '1px' }}>
          Dont find any post
        </h1>
      }
      <Pagination
        pagesArray={pagesArray}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
