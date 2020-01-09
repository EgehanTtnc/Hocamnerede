import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const CustomButton = props => {
    if (props.icon === undefined) {
        return (
            <Button
                buttonStyle={{
                    borderColor: props.color,
                    margin: 3
                }}
                titleStyle={{
                    fontFamily: 'open-sans',
                    color: props.color
                }}
                onPress={props.onPress}
                type="outline"
                title={props.title}
            />
        )
    } else {
        return (
            <Button
                buttonStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: props.color,
                    margin: 3
                }}
                titleStyle={{
                    fontSize: 18,
                    fontFamily: 'open-sans',
                    color: props.color
                }}
                icon={
                    <Ionicons
                        name={props.icon}
                        size={24}
                        color={props.color}
                        style={props.iconLeft === true ? {
                            marginRight: 10
                        } : {
                            marginLeft: 10
                        }}
                    />
                }
                iconRight={!props.iconLeft}
                onPress={props.onPress}
                type="outline"
                title={props.title}
            />
        )
    }
}

const styles = StyleSheet.create({

})

export default CustomButton;