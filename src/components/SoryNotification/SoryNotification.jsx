import { Box } from '../Box';
import { NotificationText } from './SoryNotification.styled';

export const SoryNotification = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      fontSize="30px"
      color="#fff"
    >
      <NotificationText>Sorry.We don't have such images :(</NotificationText>
    </Box>
  );
};
