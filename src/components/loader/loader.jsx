import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContainer } from './loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
      <p>Loading</p>
    </LoaderContainer>
  );
};
