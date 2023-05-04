import { useEffect, useState } from "react";
import { message, Table } from "antd";
import moment from "moment/moment";
import EventsForm from "./EventsForm";
import { getAllEvents } from "@/api/api";



export default function Home() {
  const [events, setEvents] = useState([])
  const [showEventsFromModal, setShowEventsFromModal] = useState(false);

  const getData = async () => {
    try {
      const response = await getAllEvents();
      setEvents(response)
    } catch (error) {
      message.error(error.message)
    }
  }


  const columns = [
    {
      title: "Event name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: 'date',
      key: 'date',
      render: (text, record) => {
        return moment(record.date).format("YYYY-MM-DD")
      }
    },

    {
      title: "location",
      dataIndex: "location",
      key: "location",
    },
  ]

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [])

  return (
    <main>

      <div>
        <h1 className='title'>
          List of events
        </h1>
      </div>

      <div>
        <button className="button-new-event pointer"
          variant='outlined'

          onClick={() => {
            setShowEventsFromModal(true);
          }}>Add New Event</button>
      </div>

      <div className="table-div">
        <Table className="table" columns={columns} dataSource={events} />
        {showEventsFromModal && <EventsForm
          setEvents={setEvents}
          showEventsFromModal={showEventsFromModal}
          setShowEventsFromModal={setShowEventsFromModal}
          getData={getData}
        />}
      </div>
    </main>

  )
}
