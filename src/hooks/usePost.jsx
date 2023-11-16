import { useCallback, useState } from 'react';

const usePost = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = useCallback((payload) => {
    setLoading(true);
    const options = {
      method: 'POST',
      body: JSON.stringify(payload)
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { post, data, isLoading, error };
};

export default usePost;