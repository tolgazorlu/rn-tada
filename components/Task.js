import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Task({content}) {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.taskContent}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    taskContent: {
        fontSize: 15
    },
})