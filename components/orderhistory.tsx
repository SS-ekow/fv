import React from 'react'
import styles from './orderhistory.module.css'
import Link from 'next/link'
import Pagination from './pagination'

export default function OrderHistory(){
  return(
    <div className={styles.history}>
      <div className={styles.historyHeader}>
        <h3>Order History</h3>
        <div className={styles.columns}>
          <h5>ORDER ID</h5>
          <h5>DATE</h5>
          <h5>TOTAL</h5>
          <h5>STATUS</h5>
          <h5>.</h5>
        </div>
      </div>
      <div className={styles.historyBody}>
        <div className={styles.historyItems}>
          
        {
          [
            {
              orderId: 1234,
              date: 'March 10, 2021',
              total: 210,
              status: 'Completed',
              linkHref: '/orders/1234'
            },
            {
              orderId: 1235,
              date: 'March 10, 2021',
              total: 100,
              status: 'Pending',
              linkHref: '/orders/1235'
            }
          ].map((item: any) => (
            <HistoryItem
              key={item.orderId}
              orderId={item.orderId}
              date={item.date}
              total={item.total}
              status={item.status}
              linkHref={item.linkHref}
            />
          ))
        }
        </div>
        <div className='flex flex-row justify-center w-full'>
          
          <Pagination />
        </div>
        
      </div>
    </div>
  )
}

interface HistoryItemProps {
  orderId: number;
  date: string;
  total: number;
  status: string;
  linkHref: string;
}

const HistoryItem = ({orderId, date, total, status, linkHref}: HistoryItemProps)=>{
  return(
    <div className={styles.historyItem}>
      <span>#{orderId}</span>
      <span>{date}</span>
      <span>GHS{total} (<span>5</span> products)</span>
      <span>{status}</span>
      <span className='text-green-500 hover:text-green-800'><Link href={linkHref}>View Details</Link> </span>
      
    </div>
  )
}

HistoryItem.defaultProps = {
  orderId: '#3933',
  date: '4 April, 2021',
  total: '$130.00',
  status: 'Processing',
  linkHref: '#'
}