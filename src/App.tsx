import * as React from 'react';
import data from "./data.json";
import styled ,{ keyframes } from "styled-components";

const CONTAINER = styled.div`
  margin: 15px;
`;

const CONTAINERUSER = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1.5px solid whitesmoke;
`;

// const CONTAINERUSER = keyframes `
  
// `;

const CONTAINERIGHT = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CONTAINERIGHTUSERID = styled.span`
  background-color: orange;
  padding: 8px 8px;
  border-radius: 50px;
`;

const CONTAINERIGHTUSERIMAGE = styled.img`
  background-color: white;
  border: 1px solid gray;
  height: 2em;
  width: 2em;
  border-radius: 2em;
  margin-left: 10px;
`;

const CONTAINERIGHTUSERNAME = styled.span`
  color: black;
  font-weight: bold;
  margin-left: 10px;
`;
const CONTAINERLEFT = styled.div``;
const CONTAINERLEFTSCORE = styled.span`
  color: red;
`;



interface IAppData {

}
const App: React.FunctionComponent<IAppData>  = () => {
  return (
    <CONTAINER>
      {data.map((jetDev) => {       
        return (
          <CONTAINERUSER>
            <CONTAINERIGHT>
              <CONTAINERIGHTUSERID>{jetDev.userID}</CONTAINERIGHTUSERID>
              <CONTAINERIGHTUSERIMAGE src={jetDev.picture} />
              <CONTAINERIGHTUSERNAME>
                {jetDev.displayName}
              </CONTAINERIGHTUSERNAME>
            </CONTAINERIGHT>
            <CONTAINERLEFT>
              <CONTAINERLEFTSCORE>{jetDev.score}pt</CONTAINERLEFTSCORE>
            </CONTAINERLEFT>
          </CONTAINERUSER>
        );
      })}
    </CONTAINER>
  );
};

export default App;

