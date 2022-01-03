import React, { useState, useRef } from "react";

interface Person {
  name: string;
  age: number;
}

interface Props {
  text: string;
  ok: boolean;
  int?: number;
  person?: Person;
}

const TextField: React.FC<Props> = ({ text, ok }) => {
  const [count, setCount] = useState<number | null>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1>text field</h1>
      <h3>{text}</h3>
      {ok && <h4>Ok is true</h4>}
      <input ref={inputRef} />
    </div>
  );
};

export default TextField;
