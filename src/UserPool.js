import{ CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "us-east-2_BhxYrS22b",
    ClientId: "3hqarjn19erj26noi5bv7ok91v"
}

export default new CognitoUserPool(poolData)