import { FC, useState, useEffect } from "react"
import EventCalendar from "../components/EventCalendar"
import { Button, Layout, Modal, Row } from "antd"
import EventForm from "../components/EventForm"
import { useActions } from "../hooks/useActions"
import { useTypeSelector } from "../hooks/useTypeSelector"
import { IEvent } from "../models/IEvent"

const Events: FC = () => {
  const [modalVisivle, setModalVisible] = useState(false)
  const { fetchGuest, createEvent } = useActions()
  const { guests, events } = useTypeSelector((state) => state.event)

  useEffect(() => {
    fetchGuest()
  }, [])

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false)
    createEvent(event)
  }

  return (
    <Layout>
      <EventCalendar events={[]} />

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
