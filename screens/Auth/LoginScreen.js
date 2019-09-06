import React, { Component } from 'react';
import { Container, Header, Button, Content, Text, Form, Item, Input, Label } from 'native-base';
export default class LoginScreen extends Component {
    render() {
        return (
        <Container>
            <Content>
            <Form>
                <Item stackedLabel>
                    <Label>Username</Label>
                <Input />
                </Item>
                <Item stackedLabel last>
                    <Label>Password</Label>
                <Input />
                </Item>
                <Button block>
                    <Text>Login</Text>
                </Button>
            </Form>
            </Content>
        </Container>
        );
    }
}