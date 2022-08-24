import axios from "axios";
import React, { useState } from "react";
// import axios from "axios";
// import cheerio from "cheerio";

export function Main() {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(true);
  const [keyword, setKeyword] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get("http://localhost:4000/data");
  //       setData(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const handleReq = async (e) => {
    e.preventDefault();
    const newKeyword = {
      keyword,
    };
    try {
      await axios.post("/data", newKeyword);
      // window.location.replace("http://localhost:3000/scraper");
    } catch (error) {
      console.log("error with posting");
    }
  };

  return (
    <div>
      <header>Scraper: Nothing here yet</header>
      <form id="newtask" onSubmit={handleReq}>
        <div class="form-group">
          <label for="author">Keyword</label>
          <input
            type="text"
            class="form-control"
            id="author"
            placeholder="Enter a keyword"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success btn-default pull-left">
            <span class="glyphicon glyphicon-off"></span> Sumbit
          </button>
        </div>
      </form>
    </div>
  );
}
