import * as React from "react";
import jetDevs from "./dataMock/MockData.json";
import {
  Container,
  ContainerLeft,
  ContainerLeftScore,
  ContainerRight,
  ContainerRightUserId,
  ContainerRightUserImage,
  ContainerRightUserName,
  ContainerUser,
} from "./style";

interface IAppData {}
const Strimer: React.FunctionComponent<IAppData> = () => {
  return (
    <Container>
      {jetDevs.map((jetDev) => {
        return (
          <ContainerUser>
            <ContainerRight>
              <ContainerRightUserId>{jetDev.userID}</ContainerRightUserId>
              <ContainerRightUserImage src={jetDev.picture} />
              <ContainerRightUserName>
                {jetDev.displayName}
              </ContainerRightUserName>
            </ContainerRight>
            <ContainerLeft>
              <ContainerLeftScore>{jetDev.score}pt</ContainerLeftScore>
            </ContainerLeft>
          </ContainerUser>
        );
      })}
    </Container>
  );
};

export default Strimer;
