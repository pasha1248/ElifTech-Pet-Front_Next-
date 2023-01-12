/** @format */

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import { Typography } from '../../../ui/Typography'

Chart.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface LineProps {
  options: ChartOptions<'bar'>
  data: ChartData<'bar'>
}
const labels = ['W', 'M', 'T', 'W', 'M', 'T', 'e']

// const options: ChartOptions<'bar'> = {
//   plugins: {
//     legend: {
//       position: 'top',
//       align: 'start',
//       labels: {
//         boxWidth: 7,
//         usePointStyle: true,
//         pointStyle: 'circle',
//       },

//       title: {
//         text: `${locale === 'en' ? '' : ''}`,
//       },
//     },
//   },
// }

const SpentTime = () => {
  const { locale } = useRouter()

  const { themeDark } = useAppSelector(state => state.authSlice)
  const data: ChartData<'bar'> = {
    labels: labels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        borderRadius: 30,
        borderSkipped: 'middle',
        backgroundColor: themeDark ? ['#C3C5C9'] : ['#1C1D1F'],
        barPercentage: 0.4,
        categoryPercentage: 0.4,
        barThickness: 10,
        hoverBackgroundColor: '#F6BD61',
        // clip: 2,
      },
    ],
  }
  return (
    <div className=''>
      <LayoutForComponent small>
        <div style={{ height: '300px', paddingBottom: '20px' }}>
          <Typography type='h3' className='text-xl'>
            {locale !== 'en' ? 'Проведено часу' : 'Spent time'}
          </Typography>
          <Bar
            data={data}
            options={{
              maintainAspectRatio: false,
              // responsive: true,

              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  border: {
                    display: false,
                  },
                  weight: 90,

                  // grid: {
                  //   drawTicks: false,
                  //   drawOnChartArea: false,
                  // },
                  // ticks: {
                  //   display: true,
                  // },
                },
              },
            }}
          />
        </div>
      </LayoutForComponent>
    </div>
  )
}

export default SpentTime
