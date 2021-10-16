
import data from '../data.json'
import Job from './Job'

const JobsList = () => {
    return (
        <div className="jobs">
            {data.map((elm)=> {
                return (
                    <Job job={elm}/>)
            })
        }
        </div>
    )
}

export default JobsList