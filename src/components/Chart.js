import ChartBar from './ChartBar'
import './Chart.css'
const Chart=(props)=>{

    const dataArray=props.dataPoints.map((data)=>data.value);
   const Mval=Math.max(...dataArray);
   return<div className='chart'>
       {props.dataPoints.map((dataPoint)=>
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={Mval}
            />
       )}
   </div>
}
export default Chart