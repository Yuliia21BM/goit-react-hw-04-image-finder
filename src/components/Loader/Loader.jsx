import { MutatingDots } from 'react-loader-spinner';
import { Box } from '../Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <MutatingDots
        height="150"
        width="150"
        color="#790964"
        secondaryColor="#fff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        alignSelf="center"
      />
    </Box>
  );
};
