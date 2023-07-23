import React from 'react';
import styles from './TableRow.module.css'

const TableRow = ({post}) => {
    return (
        <tr>
            <td className={styles.tdId}>{post.id}</td>
            <td className={styles.tdTitle}>{post.title}</td>
            <td className={styles.tdBody}>{post.body}</td>
        </tr>
    );
};

export default TableRow;