import React, { useState } from "react";
import { url } from "./GlobalContext";

export default async function ApiCall(endPoint, apiMethod, body = "") {
  if (apiMethod == "get") {
    // console.log("called", url + endPoint);
    const res = await fetch(url + endPoint);
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(url + endPoint, {
      method: apiMethod,
      application: "json",
      body: "",
    });
    const data = await res.json();
    return data;
  }
}
