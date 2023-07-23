import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination({ pagesArray, currentPage, setPage }) {
    function changePage(opt) {
        if (opt === 'prev') {
            if (currentPage > 1) {
                setPage(prev => prev - 1)
            } else {
                setPage(1)
            }
        } else {
            if (currentPage < pagesArray.length) {
                setPage(prev => prev + 1)
            } else {
                setPage(pagesArray.length)
            }
        }
    }

    return (
        <div className={styles.pagination}>
            <p
                onClick={() => changePage('prev')}
                className={styles.nextPrev}
            >
                Назад
            </p>
            <div className={styles.pageNumbers}>
                {pagesArray.map((page) => (
                    <p
                        onClick={() => setPage(page)}
                        key={page}
                        className={page === currentPage ? styles.currentPage : ''}
                    >
                        {page}
                    </p>
                ))}
            </div>
            <p
                onClick={() => changePage('next')}
                className={styles.nextPrev}
            >
                Далее
            </p>
        </div>
    )
}
