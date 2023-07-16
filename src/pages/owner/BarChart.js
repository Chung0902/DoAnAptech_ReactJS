import React from 'react'
import {
    CChart,
} from "@coreui/react-chartjs";

function getStyle(property) {
    return getComputedStyle(document.documentElement).getPropertyValue(property);
  }

const BarChart = () => {
  return (
    <>
    <CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Doanh thu',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }}
  labels="months"
  options={{
    plugins: {
      legend: {
        labels: {
        //   color: getStyle('--cui-body-color'),
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
  }}
/>
    </>
  )
}

export default BarChart