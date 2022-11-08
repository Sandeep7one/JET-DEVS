import * as React from "react";
import { lists } from "./@types/lists";
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
  const [lists, setLists] = React.useState(jetDevs);

  const swipingList = () => {
    let arrays: any = lists.length,
      temp,
      index;
    while (arrays > 0) {
      index = Math.floor(Math.random() * arrays);
      arrays--;

      // Swiping Lists
      temp = lists[arrays];
      lists[arrays] = arrays[index];
      arrays[index] = temp;
    }
    return lists;
  };
  // const arraySwiping = swipingList(jetDevs);
  // setLists(arraySwiping)
  // React.useEffect(() => {
  //   // swipingList()
  //   // const arraySwiping = swipingList(jetDevs);
  //   setLists(jetDevs);
  // }, []);
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
                {jetDev.score}pt
              </ContainerLeftScore>
            </ContainerLeft>
          </ContainerUser>
        );
      })}
    </Container>
  );
};

export default Strimer;
