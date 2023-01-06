import React, { useMemo, useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { useDispatch, useSelector } from 'react-redux'
import './styles/App.css';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {


  }

  const sortedPosts = useMemo(() => {
    console.log('hello');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
  return (
    <div className="App">
      <PostForm />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Sorting'}
          options={[
            { value: 'title', name: 'Sort by title' },
            { value: 'body', name: 'Sort by body' }
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length
        ?
        <PostList posts={sortedAndSearchedPosts} title={'Posts about Javascript'} />
        :
        <h1 style={{ textAlign: 'center', letterSpacing: '1px' }}>
          Dont find any post
        </h1>
      }

    </div>
  );
}

export default App;
