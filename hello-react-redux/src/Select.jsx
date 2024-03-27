import styles from './Select.module.css';

import { useEffect, useRef, useState } from "react";


function Select({ items = [], value = "", onValueChange = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleWindowClick(event) {
      if (!rootRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={styles.Select}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div>{value}</div>
      {menuOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div key={item} onClick={() => onValueChange(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
