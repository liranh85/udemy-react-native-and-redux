import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import _ from 'lodash'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { Button, Card, CardSection, Confirm } from './common'

class EmployeeEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onSavePress() {
    const { name, phone, shift, employee, employeeSave } = this.props
    employeeSave({ name, phone, shift, uid: employee.uid })
  }

  onTextPress() {
    const { name, phone, shift } = this.props
    Communications.text(phone, `Hi ${name}, your upcoming shift is on ${shift}`)
  }

  onAcceptDelete() {
    const { employeeDelete, employee: { uid } } = this.props
    employeeDelete({ uid })
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSavePress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>Fire Employee</Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAcceptDelete.bind(this)}
          onDecline={() => this.setState({ showModal: false })}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit)
