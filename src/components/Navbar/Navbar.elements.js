import styled from 'styled-components'

export const Container = styled.div`

padding: 0px 5px;
background-color: #002322;
margin-top: 0px;

display: flex;
align-items: center;
justify-content: space-between;

.linkscontainer{
  width: 30%;

  min-width: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;
}

.links{
  width: 40%;
  margin: auto;
  padding: 0;
  background: transparent;
  color: white;
  text-decoration: none;
  cursor:pointer;

  font-family: 'Nunito', sans-serif;
  font-family: 'Righteous', cursive;

  &:hover {
    color: #f8c838;
    transition: 0.8s all ease;
}
}

.logocontainer{
  display: block;
  justify-content: center;
  align-items: center;

  text-align: center;
  align-items: center;

}

.companyname {
  color: #c1bfbf;
  margin: 2px 0px;
  color: white;
  font-family: 'Nunito', sans-serif;
  font-family: 'Righteous', cursive;

  span{
    color: #f8c838;
    font-weight: bold;
  }

  @media(max-width:920px) {
    transition: 0.8s;
    display: none; 
  }
}

.logo {
  max-heigth: auto;
  max-width: 100px;

  @media(max-width:920px) {
  position: relative;
  max-heigth: auto;
  max-width: 70px; 
  }
}

.social{
  display: block;
  width: 15%;

  justify-content: space-between;
  display:flex;
  align-items: center;
}

.usersession{

  display:flex;
  justify-content: center;
  align-items: center;
  width: 100px;

  text-align: center;
}

.cartwidget {

  display:flex;
  justify-content: center;
  align-items: center;
  width: 100px;

  text-align: center;

  color: white;
  font-family: 'Nunito', sans-serif;
  font-family: 'Righteous', cursive;
}

.burguer{
  @media(min-width:920px) {
      display: none; 
  }
}
`;

