import React, { useState } from 'react'
import { Col, Form, Modal, Row, message } from 'antd'
import { createEvent } from "@/api/api";




const EventsForm = ({
    showEventsFromModal,
    setShowEventsFromModal,
    getData }) => {


    const [formType, setFormType] = useState("add");

    const onFinish = async (values) => {
        try {
            let response = null;
            if (formType === 'add') {
                response = await createEvent(values)
            }
            else {
                message.error(response.message)
            }
            if (response.success) {
                getData()
                message.success(response.message);
                setShowEventsFromModal(false);
            } else {
                message.error(response.message)
            }
        } catch (error) {

            message.error(error.message)
        }

    }
    return (
        <Modal
            className='modal'
            open={showEventsFromModal}

            onCancel={() => {
                setShowEventsFromModal(false)
            }}
            footer={null}
            width={800}
        >
            <h1>Add New Event</h1>
            <Form
                layout='vertical'
                onFinish={onFinish}
                key='admin-events-form'
            >
                <Row gutter={70} >
                    <Col span={30}>
                        <Form.Item label="Event Name" name='name' >
                            <input type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={30}>
                        <Form.Item label="Event Description" name='description'>
                            <textarea type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Event Location" name='location'>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Event Date" name='date'>
                            <input type='date' />
                        </Form.Item>
                    </Col>
                </Row>

                <div>
                    <button
                        className='modal-button pointer'
                        type='submit'
                    >Save</button>

                    <button
                        className='modal-button pointer'

                        variant='outline'
                        type='button'
                        onClick={() => {
                            setShowEventsFromModal(false)
                        }}
                    >Cancel</button>
                </div>

            </Form>
        </Modal >
    )
}

export default EventsForm