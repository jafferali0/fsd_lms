import React, { useEffect, useState } from "react";
import "./Table.css";
import ApiCall from "../ApiCall";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Table() {
  const [data, setData] = useState([]);
  const { type } = useParams();
  console.log(type);

  async function getData() {
    const data = await ApiCall("/data", "get");
    switch (type) {
      case "Html-5":
        setData(data.filter((ele) => ele.module == "HTML"));
        break;
      case "CSS-3":
        setData(data.filter((ele) => ele.module == "CSS"));
        break;
      case "Bootstrap-5":
        setData(data.filter((ele) => ele.module == "bootstrap"));
        break;
      case "JavaScript":
        setData(data.filter((ele) => ele.module == "JavaScript"));
        break;
      case "React-Js":
        setData(data.filter((ele) => ele.module == "React"));
        break;
      case "Node-Js":
        setData(data.filter((ele) => ele.module == "Node.js"));
        break;
      case "Express-Js":
        setData(data.filter((ele) => ele.module == "Express"));
        break;
      case "Mongo-Db":
        setData(data.filter((ele) => ele.module == "MongoDB"));
        break;
      default:
        setData(data);
    }
  }

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <>
      <NavBar />
      <table className="main-table" border={"1px"}>
        <thead>
          <tr className="thead">
            <th className="r1">Date</th>
            <th className="r2">Topic/Title</th>
            <th className="r3">Module</th>
            <th className="r4">Uploaded By</th>
            <th className="r5">Comment</th>
            <th className="r6">File</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr>
                <td>{ele.date}</td>
                <td>{ele.title}</td>
                <td>{ele.module}</td>
                <td>{ele.uploadedBy}</td>
                <td title={ele.comment}>{ele.comment.slice(0, 100) + "..."}</td>
                <td>📁</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Footer />
    </>
  );
}
