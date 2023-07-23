import React from 'react';
import styles from './PostTable.module.css'
import TableRow from '../TableRow/TableRow';
import { useDispatch } from 'react-redux';

const PostTable = ({ posts }) => {
    const dispatch = useDispatch()

    function setSort(sorType){
        dispatch({type: 'SET_SORT', payload: sorType})
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th onClick={() => setSort('id')}>ID</th>
                    <th onClick={() => setSort('title')}>Заголовок</th>
                    <th onClick={() => setSort('body')}>Описание</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((item) =>
                    <TableRow key={item.id} post={item} />
                )}
            </tbody>
        </table>
    );
};

export default PostTable;