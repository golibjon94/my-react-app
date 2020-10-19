import React, { Component } from "react";
import { Form, Button, Table, Col, Row, Modal, Container } from "react-bootstrap";
import { v1 as uuidv1 } from 'uuid';

export default class Contacts extends Component {

  state = {
    show: false,
    action: "add",
    currentData: {},
    data: []
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  };
  handleShow = () => {
    this.setState({
      show: true
    })
  };

  handleSave = (e) => {
    e.preventDefault();
    const { action, currentData, data } = this.state;
    if (action === "add") {
      this.setState((state) => ({
        data: [...state.data, { id: uuidv1(), ...state.currentData }],
        currentData: {},
        show: false
      }))
    }
    if (action === "edit") {
      let list = data.map((item) => {
        if (item.id === currentData.id) {
          item = currentData
        }
        return item;
      })
      this.setState({
        data: list,
        currentData: {},
        show: false
      })
    }



  }
  onChange = (key, value) => {
    let currentData = this.state.currentData;
    currentData[key] = value;
    this.setState({
      currentData
    })
  }
  onDelete = (dataItem) => {
    const { data } = this.state;
    this.setState(({
      data: data.filter(item => item.id !== dataItem.id)
    }))
  }
  onEdit = (dataItem) => {
    this.setState({
      show: true,
      action: "edit",
      currentData: { ...dataItem },
    })
  }
  getData = () => {
    let data = this.state.data;
    let list = [];
    if (data.length !== 0) {
      data.map((item, index) => {
        list.push(
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td><Button variant="warning" size="sm" onClick={() => this.onEdit(item)}>Edit</Button></td>
            <td><Button variant="danger" size="sm" onClick={() => this.onDelete(item)}>Delete</Button></td>
          </tr>
        )
      })
      return list;
    } else {
      return (<tr style={{ textAlign: "center" }}><td colSpan={5}>No data</td></tr>)
    }
  }

  render() {
    const { show, currentData } = this.state;
    console.log(this.state);
    return (
      <>

        <Container>
          <h1 className="text-center"> Contact us </h1>
          <Form>
            <Form.Group controlId="FormBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>We'll never share your email with anyone else</Form.Text>
            </Form.Group>

            <Form.Group controlId="FormBasicPassword">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="FormBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form>
        </Container>


        <div className="mx-3 mt-5">
          <Row>
            <Col md={12}>
              <Button variant="primary" onClick={this.handleShow} className="mb-1">
                Launch demo modal
                               </Button>
              <Modal show={show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>First name </Form.Label>
                      <Form.Control type="text" placeholder="First name " value={currentData.firstName} onChange={(e) => this.onChange('firstName', e.target.value)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" placeholder="Last name" value={currentData.lastName} onChange={(e) => this.onChange('lastName', e.target.value)} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="text" placeholder="Enter email" value={currentData.email} onChange={(e) => this.onChange('email', e.target.value)} />

                    </Form.Group>

                    <Button variant="primary" onClick={this.handleSave}>
                      Submit
                                    </Button>
                  </Form>
                </Modal.Body>

              </Modal>
            </Col>
            <Col md={12}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th colSpan={2}>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getData()}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>

      </>
    );
  }
}

