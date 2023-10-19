import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import React, { FC, useState } from "react"
import { rules } from "../utils/rules"
import { IUser } from "../models/IUser"
import { IEvent } from "../models/IEvent"
import { Moment } from "moment"
import { Dayjs } from "dayjs"
import { formatDate } from "../utils/date"
import { useTypeSelector } from "../hooks/useTypeSelector"

interface EventFormProps {
  guests: IUser[]
  submit: (event: any) => void
}

const EventForm: FC<EventFormProps> = (props) => {
  const { user } = useTypeSelector((state) => state.auth)

  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  } as IEvent)

  const selectDate = (date: Dayjs) => {
    setEvent({ ...event, date: formatDate(date.toDate()) })
    console.log(event)
  }

  const submitForm = () => {
    props.submit({ ...event, author: user.username })
    console.log({ ...event, author: user.username })
  }

  //console.log(event)

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Описание события"
        name="descriprtion"
        rules={[rules.required()]}
      >
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>

      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required()]}
      >
        <DatePicker
          onChange={(date) => {
            if (date !== null) {
              selectDate(date) // Если date не равен null, передаем его как есть
            } else {
              // Обработка случая, когда date равен null (по вашей логике)
            }
          }}
        />
      </Form.Item>

      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[rules.required()]}
      >
        <Select
          onChange={(guest: string) => setEvent({ ...event, guest })}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          options={props.guests.map((guest) => ({
            value: guest.username,
            label: guest.username,
          }))}
        />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm

/*
isDateAfter: (message: string) => () => ({
    validator(_: any, value: Dayjs) {
      if (dayjs(value) >= dayjs()) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),

*/
