import * as React from "react";
import jetDevs from "./MockData/MockData.json";
import {
  Container,
  ContainerLeft,
  ContainerLeftScore,
  ContainerRight,
  ContainerRightUserId,
  ContainerRightUserImage,
  ContainerRightUserName,
  ContainerUser,
} from "./style/style";

interface IAppData {}

const Strimer: React.FunctionComponent<IAppData> = () => {
  const [count, setCount] = React.useState(15);
  const [lists, setLists] = React.useState(
    jetDevs.sort((a, b) => {
      return a.score + b.score;
    })
  );

  const TimeInterVal = () => {
    setInterval(() => {
      setCount(count + 10);
      setLists(lists);
    }, 2000);
  };
  
  React.useEffect(() => {
    TimeInterVal();
  }, []);

  return (
    <Container>
      {lists.map((jetDev) => {
        return (
          <ContainerUser key={jetDev.userID}>
            <ContainerRight>
              <ContainerRightUserId>{jetDev.userID}</ContainerRightUserId>
              <ContainerRightUserImage src={jetDev.picture} />
              <ContainerRightUserName>
                {jetDev.displayName}
              </ContainerRightUserName>
            </ContainerRight>
            <ContainerLeft>
              <ContainerLeftScore title="Point">
                {jetDev.score * 0.5 * count}pt
              </ContainerLeftScore>
            </ContainerLeft>
          </ContainerUser>
        );
      })}
    </Container>
  );
};

export default Strimer;
