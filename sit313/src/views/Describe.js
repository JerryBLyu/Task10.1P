import React from 'react'
import {
    Header,
    Form,
    TextArea,
    Input
} from 'semantic-ui-react'
function Describe({ title, set_title, description, set_description }) {

    const des_change = (e, data) => {
        set_description(data.value)
    }
    const title_change = (e, data) => {
        set_title(data.value)
    }
    return (
        <div>
            <Header as='h2' icon textAlign='left'   style={{backgroundColor:"#eeeeee"  }} >   <Header.Content>Describe your task to Experts</Header.Content></Header>
            <Form.Group widths='equal'  style={{display:"flex",flexDirection:"column"}}>
                <Form.Field
                    control={Input}
                    label='Task Title'
                    placeholder='Enter task title'
                    value={title}
                    onChange={title_change}
                />
                <Form.Field
                    control={TextArea}
                    value={description}
                    onChange={des_change}
                    label='Description'
                    placeholder='Enter task description'
                />
            </Form.Group>
        </div>
    )
}

export default Describe
