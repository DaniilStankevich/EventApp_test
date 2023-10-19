import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import React, { FC } from "react"
import { rules } from "../utils/rules"
import { IUser } from "../models/IUser";




interface EventFormProps {
    guests: IUser[]

}



const EventForm: FC<EventFormProps> = (props) => {

    console.log(props)


  const Geusts =  props.guests.map(guest =>  ({ value: guest.username, label: guest.username}) )
        

    return (
        <Form>


            <Form.Item
                label="Описание события"
                name="descriprtion"
                rules={[rules.required()]}
                >
                <Input  />

            </Form.Item>


            <Form.Item
                label="Дата события"
                name="descriprtion"
                rules={[rules.required()]}
            >

                <DatePicker />
            </Form.Item>


            <Form.Item>

            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
            
                options={props.guests.map(guest =>  ({ value: guest.username, label: guest.username}) )}         
            />

            </Form.Item>


            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>




        </Form>
    )

}

export default EventForm
