const { useState, useEffect } = require("react");

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(url)
          .then((data) => data.json())
          .then((JSONData) => {
            setData(JSONData);
            setLoading(true);
          });
      } catch (e) {
        setError(e);
        setLoading(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
