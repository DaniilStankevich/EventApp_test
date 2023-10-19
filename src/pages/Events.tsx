import { FC, useState, useEffect } from 'react'
import EventCalendar from '../components/EventCalendar'
import { Button, Modal, Row } from 'antd'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'

const Events:FC = () => {

  const [ modalVisivle, setModalVisible ] = useState(false)
  const { fetchGuest} = useActions()

  const { guests } = useTypeSelector(state => state.event)



  useEffect(() => {
      fetchGuest()
  }, [])
  



  return (
    <div>
      <EventCalendar events={[]}/>

      <Row justify="center">
        <Button
          onClick={() => setModalVisible(true)}
        >        
          Добавить событие
          </Button>
      </Row>

      <Modal 
        title="Добавить событие"
        open={modalVisivle}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >


      <EventForm guests={guests} />

      </Modal>

    </div>
  )
}


export default Events