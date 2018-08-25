import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles
  return (
    <Modal
      animationType='slide'
      onRequestClose={() => {}}
      visible={visible}
      transparent
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  containerStyle: {
    // Why does he need to add transparency? Doesn't the Modal's `transparent` prop already take care of that?
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
}

export { Confirm }
