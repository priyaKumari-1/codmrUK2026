

import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
 
function EmailId() {
  const [email, setEmail] = useState("");
 
  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
 
    // Decode JWT to get email
    const payload = JSON.parse(atob(token.split(".")[1]));
    setEmail(payload.email);
  };
 
  return (
<div style={{ padding: "40px"}}>
<p>Auto Email Fill Form</p>
 
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => alert("Login Failed")}
      />
 
      <br /><br />
 
      <input
        type="email"
        value={email}
        placeholder="Email will auto-fill"
        style={{ padding: "10px", width: "300px"}}
        readOnly
      />
</div>
  );
}
 
export default EmailId;