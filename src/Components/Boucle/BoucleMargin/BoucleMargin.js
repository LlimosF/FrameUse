import React from "react";

export default function BoucleMargin () {
  const Numbers = [];

  for (let i = 1; i <= 80; i++) {
    Numbers.push(<li key={i} className="li-docu">.margin{i}</li>)
  }
  return <ul className="ul-docu">{Numbers}</ul>
}