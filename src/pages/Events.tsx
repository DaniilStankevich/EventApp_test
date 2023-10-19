import { FC, useState, useEffect } from "react"
import { Button, Layout, Modal, Row } from "antd"
import { useActions } from "../hooks/useActions"
import { useTypeSelector } from "../hooks/useTypeSelector"
import { IEvent } from "../models/IEvent"
import EventForm from "../components/EventForm"
import EventCalendar from "../components/EventCalendar"

const Events: FC = () => {
  const [modalVisivle, setModalVisible] = useState(false)
  const { fetchGuest, createEvent, fetchEvents } = useActions()
  const { guests, events } = useTypeSelector((state) => state.event)
  const { user } = useTypeSelector((state) => state.auth)


  useEffect(() => {
    fetchGuest()
    fetchEvents(user.username)
  }, [])


  const addNewEvent = (event: IEvent) => {
    setModalVisible(false)
    createEvent(event)
  }

  return (
    <Layout>
      <EventCalendar events={events} />

      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>

      <Modal
        title="Добавить событие"
        open={modalVisivle}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm
          guests={guests}
          submit={addNewEvent}
        />
      </Modal>
    </Layout>
  )
}

export default Events
