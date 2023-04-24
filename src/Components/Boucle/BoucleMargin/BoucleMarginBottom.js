import React from "react";

export default function BoucleMarginBottom () {
  const Numbers = [];

  for (let i = 1; i <= 80; i++) {
    Numbers.push(<li key={i} className="li-docu">.margin-bottom{i}</li>)
  }
  return <ul className="ul-docu">{Numbers}</ul>
}