import { message, Table } from "antd";
export default function Home() {
  const columns = [
    {
      title: "Event name",
      dataIndex: "name",
    },
    {
      title: "description",
      dataIndex: "description",
    },
    {
      title: "date",
      dataIndex: "date",
    },

    {
      title: "location",
      dataIndex: "location",
    },
  ]
  return (
    <main>

      <div>
        <h1 className='title'>
          List of events
        </h1>
      </div>

      <div>
        <button className="button-new-event pointer" >Add New Event</button>
      </div>

      <div className="table-div">
        <Table className="table" columns={columns} />
      </div>
    </main>

  )
}
