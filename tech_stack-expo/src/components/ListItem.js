import React, { Component } from 'react'
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { library, expanded } = this.props
    const { description } = library.item
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const { titleStyle } = styles
    const {id, title } = this.props.library.item

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.selectedLibraryId === ownProps.library.item.id
  }
}

export default connect(mapStateToProps, actions)(ListItem)
