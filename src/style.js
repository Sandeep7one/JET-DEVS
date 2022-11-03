import styled ,{ keyframes } from "styled-components";

export const   Container = styled.div`
margin: 15px;
`;

export const  ContainerUser = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
border-bottom: 1.5px solid whitesmoke;
`;

// export const  CONTAINERUSER = keyframes `

// `;

export const  ContainerRight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const  ContainerRightUserId = styled.span`
background-color: orange;
padding: 8px 8px;
border-radius: 50px;
`;

export const  ContainerRightUserImage = styled.img`
background-color: white;
border: 1px solid gray;
height: 2em;
width: 2em;
border-radius: 2em;
margin-left: 10px;
`;

export const  ContainerRightUserName = styled.span`
color: black;
font-weight: bold;
margin-left: 10px;
`;
export const  ContainerLeft = styled.div``;
 export const ContainerLeftScore = styled.span`
color: red;
`;
