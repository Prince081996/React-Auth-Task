import auth0 from "auth0-js";
import params from "../auth0-param.json";

export const auth0Client =  new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: "token id_token",
  })

export const accessToken = ()=> {
    const token = localStorage.getItem("token")
    console.log(token)
    console.log(typeof token)
    return token
}