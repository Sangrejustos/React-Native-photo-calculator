import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Separator = () => (
    <View style={styles.separator} />
);

export const Common = () => {

    const [factor, setFactor] = useState(1.0)
    const [price, setPrice] = useState(0.0)
    const [isVisible, setVisible] = useState(false)

    const calculate = () => {
        return Math.round(price * factor)
    }

    return(
        <View>
            <View style={styles.inputWrapper}>
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
            </View>
            <Separator/>
            <View style={styles.inputWrapper}>
                <RNPickerSelect
                    placeholder={
                        {label: 'Выберите размер', value:null}
                    }
                    onValueChange={(value) => setPrice(parseFloat(value))}
                    items={[
                        { label: '3x4', value: '12.0' },
                        { label: '3,5x4,5', value: '15.75' },
                        { label: '4x6', value: '24.0' },
                        { label: '10x15', value: '150.0' },
                        { label: '15x20', value: '300.0' },
                        { label: '20x30', value: '600.0' },
                        { label: '30x40', value: '1200.0' },
                    ]}
                />
            </View>

            <Separator/>

            <Button title="Показать стоимость" onPress={() => setVisible(!isVisible)}/>

            {isVisible && <Text style={styles.text}>
                {"Стоимость печати: " + calculate() + " рублей"}
            </Text>}

        </View>
    )

}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    inputWrapper: {
        marginTop:10,
    },

    text: {
        paddingLeft: 5,
        marginTop: 15,
        fontSize: 18,
    }
})