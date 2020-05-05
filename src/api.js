const endpoint = {
  url: "http://staging.bingored.co:8080",
  gameweb: "gameweb-0.0.1-SNAPSHOT",
  userweb: "userweb-0.0.1-SNAPSHOT",
};

//Login
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
      `${endpoint.url}/${endpoint.userweb}/auth`,
      requestOptions
    );
    //response
    const res = await req.json();
    return await res;
  } catch (error) {
    console.log(error);
  }
};

//GET PROFILE
export const getProfile = async () => {
  try {
    var token = localStorage.getItem("Token");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    };

    const req = await fetch(
      `${endpoint.url}/${endpoint.userweb}/myprofile`,
      requestOptions
    );
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

//GET FIGURE LIST

export const getFigures = async () => {
  try {
    var token = localStorage.getItem("Token");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    };

    const req = await fetch(
      `${endpoint.url}/${endpoint.gameweb}/figure`,
      requestOptions
    );
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

//Get figure By Id

export const getFigureById = async (figureId) => {
  try {
    var token = localStorage.getItem("Token");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    };

    const req = await fetch(
      `${endpoint.url}/${endpoint.gameweb}/figure/${figureId}`,
      requestOptions
    );
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

//Get the Figure Modalities

export const getModalities = async () => {
  try {
    var token = localStorage.getItem("Token");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    };

    const req = await fetch(
      `${endpoint.url}/${endpoint.gameweb}/groupfigure`,
      requestOptions
    );
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

//Add Figure
export const postFigure = async (idFigure, figureName, positionsArray) => {
  try {
    var token = localStorage.getItem("Token");
    var raw = JSON.stringify({
      idFigureGroup: idFigure,
      figureName: figureName,
      positions: positionsArray,
    });
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    };

    const req = await fetch(
      `${endpoint.url}/${endpoint.gameweb}/figure`,
      requestOptions
    );
    const res = req.json();
    return res;
  } catch (error) {
    console.log("Error");
  }
};

//Edit Figure
export const editFigure = async (
  figureId,
  figureName,
  idFigureModality,
  positionsArray
) => {
  try {
    var token = localStorage.getItem("Token");
    console.log("PositionArray from editFigureHandler", positionsArray);
    var raw = JSON.stringify({
      id: figureId,
      figureName: figureName,
      idFigureGroup: idFigureModality,
      positions: positionsArray,
    });
    var requestOptions = {
      method: "PUT",
      body: raw,
      redirect: "follow",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    };
    const req = await fetch(
      `${endpoint.url}/${endpoint.gameweb}/figure/${figureId}`,
      requestOptions
    );
    const res = await req.json();
  } catch (error) {
    console.log(error);
  }
};
