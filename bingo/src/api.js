export const AuthLogin = async (email, password) => {
  try {
    //Query
    var raw = `{\n	\"username\": \"${email}\",\n	\"password\": \"${password}\"\n}`;

    //Header
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    };

    //Fetching URL
    const req = await fetch(
      "http://staging.bingored.co:8080/userweb-0.0.1-SNAPSHOT/auth",
      requestOptions
    );
    //response
    const res = await req.json();
    return await res;
  } catch (error) {
    console.log(error);
  }
};
