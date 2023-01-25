import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (

    <Container>
        
        <Wrapper>

            <Left> 

                <Language> EN </Language>

                <SearchContainer>

                    <Input type="text" placeholder='What Are You Looking For?'/>

                    <SearchIcon style={{color: "gray", fontSize: 16}}/> 

                </SearchContainer>

            </Left>

            <Center> <NavbarLink to="/"> <Logo> ECOMMERCE APP </Logo> </NavbarLink> </Center>

            <Right> 

                <NavbarLink to="register"> <MenuItem> REGISTER </MenuItem> </NavbarLink>

                <NavbarLink to="login"> <MenuItem> SIGN IN </MenuItem> </NavbarLink>

                <MenuItem> 
                
                    <Badge badgeContent={4} color="primary">

                         <NavbarLink to="cart"> <ShoppingCartOutlinedIcon /> </NavbarLink>

                    </Badge>
                
                </MenuItem>

            </Right>

        </Wrapper>
        
    </Container>

  );

};

export default Navbar;


const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const NavbarLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;