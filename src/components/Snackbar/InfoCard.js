import React from 'react'

const isIncome = Math.round(Math.random())

export default function InfoCard() {
  return (
    <div style={{ textAlign: 'center', padding: ' 0 10%' }}>
          Try saying:<br/>
          Add {isIncome ? 'Income ' : 'Expense ' }
          for {isIncome ? '$500 ' : '$50 ' } 
          in category {isIncome ? 'Salary ' : 'Bills ' } 
          for {isIncome ? 'Monday ' : 'Wednesday ' }
    </div>
  )
}
