import { useEffect, useState } from "react";

function Clock({ delay = 1000 }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  return <div className="Clock">Il est {now.toLocaleTimeString()}</div>;
}

export default Clock;
