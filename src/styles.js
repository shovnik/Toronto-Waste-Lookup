import styled from 'styled-components';

export const Body = styled.div`
  flex: 2;
  padding: 7px;
`;

export const Favourites = styled.div`
  background: #f7fefa;
  flex: 6;
`;

export const Name = styled.div`
  flex: 1;
  float: right;
  padding: 7px;
`;

export const Result = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
  padding: 0;
`;

export const Results = styled.ul`
  flex: 9;
`;

export const SearchBar = styled.form`
  display: flex;
  flex: 0 0 82px;
  flex-direction: row;
`;

export const SearchButton = styled.button`
  background: #23995c;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  flex: 0 0 50px;
  margin: 16px 16px 16px 0;
  text-align: center;
  transform: scaleX(-1);
`;

export const SearchIcon = styled.i`
  font-size: 40px;
`;

export const SearchInput = styled.input`
  border: solid 1px #aaaaaa;
  border-radius: 3px;
  box-shadow: 0 0 2px #aaa;
  flex: 1;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  padding: 0 5px;
  margin: 16px;
`;

export const Star = styled.div`
  color: ${props => props.active && !props.favourite ? '#aaaaaa' : '#23995c'};
  cursor: ${props => props.active ? 'pointer' : 'default'};
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  opacity: 0.9;
  text-shadow: 0 0 1px ${props => props.active && !props.favourite ? '#aaaaaa' : '#23995c'};
`;

export const StarContainer = styled.div`
  flex: 0 0 15px;
  padding: 0;
  margin: 0;
`;

export const SubTitle = styled.h2`
  color: #23995c;
  flex: 1;
  font-family: Roboto, sans-serif;
  font-weight: medium;
  letter-spacing: 0.5px;
  margin: 15px;
`;

export const Title = styled.h1`
  background-image: linear-gradient(to right, #1e5a95, #23975e);
  color: #ffffff;
  flex: 1;
  font-family: Roboto, sans-serif;
  letter-spacing: 1px;
  margin: 0;
  padding: 40px;
  text-align: center;
`;

export const TitleContainer = styled.div`
  align-text: center;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
