import Loader from "react-loader-spinner";

interface Props
{
    isVisible: boolean
}

export const Spinner: React.FC<Props> = (props: Props) => {
    return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={props.isVisible}
          timeout={5000} //3 secs
        />
      );   
}