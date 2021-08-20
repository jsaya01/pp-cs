import Amplify, { API } from 'aws-amplify';

Amplify.configure({
    // OPTIONAL - if your API requires authentication 
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-2:21a43261-471d-4806-8b53-9e9644d21a7c',
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_BhxYrS22b', 
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '3hqarjn19erj26noi5bv7ok91vs',
    },
    API: {
        endpoints: [
            {
                name: "NFL",
                endpoint: "https://medkpinmsk.execute-api.us-east-2.amazonaws.com/dev/pools/sport/NFL/true",
                service: "lambda",
                region: "us-east-2"
            }          
        ]
    }
});

export default Amplify