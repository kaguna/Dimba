import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Body, Title, Right, Left, DatePicker, Text, View, Icon } from 'native-base';

export default class PickDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        return (
            <SafeAreaView>
                <View style={{ flexDirection: 'row'}}>
                    <Left/>

                    <Body>
                        <Title>Matches</Title>
                        <Text>
                            {this.state.chosenDate.toString().substr(4, 12)}
                        </Text>
                    </Body>

                    <Right>
                        <TouchableOpacity
                            onPress={() => this.setState({ picker: !this.state.picker })}>
                            <Text>Day</Text>
                        </TouchableOpacity>
                    </Right>
                    {this.renderPicker()}
                </View>
            </SafeAreaView>
        );
    }

    renderPicker() {
        if (this.state.picker) {
            return (
                <DatePicker
                    style={{ width: 200 }}
                    ref={picker => {
                        this.datePicker = picker;
                    }}
                    date={this.state.date}
                    mode="date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2020-12-12"
                    confirmBtnText="OK"
                    cancelBtnText="Cancel"
                    onDateChange={date => {
                        this.setState({ date: date });
                    }}
                />
            );
        }
    }
}