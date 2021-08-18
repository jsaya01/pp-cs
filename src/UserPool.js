import{ CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "ap-south-1_6amWpG3N9",
    ClientId: "3k3h143t1d5c92ttg77jvcs6oc",
    region:"ap-south-1"
}


export default new CognitoUserPool(poolData)