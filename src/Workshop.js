import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Separator = () => (
    <View style={styles.separator} />
);

export const Workshop = () => {
    const [height, setHeight] = useState(0.0)
    const [width, setWidth] = useState(0.0)
    const [isVisible, setVisible] = useState(false)
    const [factor, setFactor] = useState(1.0)

    const calculate = () => {
        return(
            Math.round((height)*(width)*factor)
        )
    }

    return(
        <View style={styles.container}>

            <RNPickerSelect
                placeholder={
                    {label: 'Выберите тип бумаги', value:'0.0'}
                }
                onValueChange={(value) => setFactor(parseFloat(value))}
                items={[
                    { label: 'Тисненая', value: '1.1' },
                    { label: 'Матовая', value: '1.5' },
                    { label: 'Глянцевая', value: '2.1' },
                ]}
            />

            <Text style={styles.text}>Введите высоту (см)</Text>
            <TextInput
                keyboardType="number-pad"
                style={ styles.input }
                placeholder='Введите высоту (см)'
                onChangeText={newHeight => setHeight(newHeight)}
            />
            <Separator/>
            <Text style={styles.text}>Введите ширину (см)</Text>
            <TextInput
                keyboardType="number-pad"
                style={ styles.input }
                placeholder='Введите ширину (см)'
                onChangeText={newWidth => setWidth(newWidth)}
            />
            <Separator/>

            <Button title="Показать стоимость" onPress={ () => setVisible(!isVisible)}
            />

            { isVisible && <Text style={styles.text}>
                    {"Стоимость печати: " + calculate() + " рублей"}
                </Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop:30,
    },
    input: {
        height: 45,
        marginBottom: 2,
        paddingLeft: 5,
    },

    text: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 18,
    },

    separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

})