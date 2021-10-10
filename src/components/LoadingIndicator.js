import Loader from 'react-loader-spinner'

const LoadingIndicator = (props) => {

    return (
        <div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h1>Loading</h1>
            <Loader type="ThreeDots" color="blue" height="50" width="50" />
        </div>
    );  
}

export default LoadingIndicator;