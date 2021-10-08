import React from 'react'
import {
    Header,
    Form,
    Input,
} from 'semantic-ui-react'
function Setting({ date, set_date, suburb, set_suburb, task_type }) {

    const suburb_change = (e, data) => {
        set_suburb(data.value)
    }
    const date_change = (e, data) => {
        set_date(data.value)
    }
    return (
        <div>
            <Header as='h2' icon textAlign='left' style={{ backgroundColor: "#eeeeee" }} >   <Header.Content>Setting up  your Task</Header.Content></Header>
            <Header as='h4' icon textAlign='center'>
                <Header.Content>This  section is designed based on the type of the task.It could be developed by conditional redering . For an in-person task ,both suburb and date would be appeared. For an online task ,only date would be appeared. </Header.Content>
            </Header>

            <Form.Group widths='equal' style={{ display: "flex", flexDirection: "column" }}>
                {
                    task_type === "Online" ? null : <Form.Group widths="equal" > <Form.Field
                        control={Input}
                        label='Suburb'
                        placeholder='Enter a suburb'
                        value={suburb}
                        onChange={suburb_change}
                    />  </Form.Group>
                }


                <Form.Group widths="equal" >
                    <Form.Field
                        control={Input}
                        label='Date'
                        placeholder='Enter task Date'
                        value={date}
                        onChange={date_change}
                    />

                </Form.Group>
            </Form.Group>
        </div>
    )
}

export default Setting
