import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-w6ncwz3db6fkw2hx.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck