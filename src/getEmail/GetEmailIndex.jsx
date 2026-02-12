
import EmailId from "./EmailId";
import { GoogleOAuthProvider } from "@react-oauth/google";

function GetEmailIndex() {
  return (
     <GoogleOAuthProvider clientId="PASTE_YOUR_CLIENT_ID_HERE">
           <EmailId/>
        </GoogleOAuthProvider>
  )
}

export default GetEmailIndex;
