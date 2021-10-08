import React from 'react'
import {
    Header,
    Form,
    Radio,
    Input
} from 'semantic-ui-react'
function Suggest({ budget, set_budget, budget_type, set_budget_type }) {
    const handle_change = (e, data) => {
        set_budget_type(data.value)
    }

    const budget_change = (e, data) => {
        set_budget(data.value)
    }
    return (
        <div>
            <Header as='h2' icon textAlign='left' style={{ backgroundColor: "#eeeeee" }}  >   <Header.Content>Suggest how much</Header.Content></Header>
            <Form.Group widths='equal' style={{ display: "flex", flexDirection: "column" }}>

                <label>What's your budget?</label>
                <label>(this is an estimate)</label>

                <Form.Group inline>
                    <Form.Field
                        control={Radio}
                        label='Total'
                        value='Total'
                        checked={budget_type === 'Total'}
                        onChange={handle_change}
                    />
                    <Form.Field
                        control={Radio}
                        label='Hourly Rate'
                        value='Hourly Rate'
                        checked={budget_type === 'Hourly Rate'}
                        onChange={handle_change}
                    />
                </Form.Group>
                <Form.Group  inline>
                    <Form.Field
                        control={Input}
                        value={budget}
                        label="$"
                        labelPosition="left"
                        onChange={budget_change}
                    />
                </Form.Group>


            </Form.Group>
        </div>
    )
}

export default Suggest
