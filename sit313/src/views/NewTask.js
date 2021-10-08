import React from 'react'
import {
    Header,
    Form,
    Radio,
} from 'semantic-ui-react'
function NewTask({ task_type, set_task_type }) {

    const handle_change = (e,data) => {
        console.log(e,data);
        set_task_type(data.value)
    }
    return (
        <div>
            <Header as='h2' icon textAlign='left'   style={{backgroundColor:"#eeeeee"}} >   <Header.Content>New Task</Header.Content></Header>
            <Form.Group inline>
                <label>Select Task Type</label>

                <Form.Field
                    control={Radio}
                    label='In Person'
                    value='In Person'
                    checked={task_type === 'In Person'}
                    onChange={handle_change}
                />
                <Form.Field
                    control={Radio}
                    label='Online'
                    value='Online'
                    checked={task_type === 'Online'}
                    onChange={handle_change}
                />

            </Form.Group>
        </div>
    )
}

export default NewTask
