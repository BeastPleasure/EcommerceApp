import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const NewsLetter = () => {

  return (

    <Container>

        <Title> Newsletter </Title>

        <Desc> Get Timely Updates From Your Favorite Products </Desc>

        <InputContainer>

            <Input type="text" placeholder="What's Your Email?"/>

            <Button>

                <SendIcon />

            </Button>
        
        </InputContainer>

    </Container>

  );

};

export default NewsLetter;


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`