import React, { useState } from 'react'
import {
    Form, Button
} from 'semantic-ui-react'
import Axios from 'axios'
import NewTask from './NewTask'
import Describe from './Describe'
import Setting from './Setting'
import Suggest from './Suggest'
function Home() {
    const [task_type, set_task_type] = useState('')
    const [budget_type, set_budget_type] = useState("")
    const [budget, set_budget] = useState(0)
    const [title, set_title] = useState("")
    const [description, set_description] = useState("")
    const [date, set_date] = useState("")
    const [suburb, set_suburb] = useState("")

    const save_data = () => {
        Axios.post('/api/add_task', {
            task_type, budget_type, budget, title, description, date, suburb
        }).then(res => {
            if (res.data.Success) {
                alert('Saved Successful!')
            } else {
                alert('Saved Failed!')
            }
            console.log(res);
        })
    }
    return (
        <Form>
            <NewTask task_type={task_type} set_task_type={set_task_type} />
            <Describe title={title} set_title={set_title} description={description} set_description={set_description} />
            <Setting date={date} set_date={set_date} suburb={suburb} set_suburb={set_suburb} task_type={task_type} />
            <Suggest budget={budget} set_budget={set_budget} budget_type={budget_type} set_budget_type={set_budget_type} />
            <Button floated="right" onClick={save_data}>Post Task</Button>
        </Form >
    )
}

export default Home
