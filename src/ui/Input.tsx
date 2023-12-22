import React from "react";

interface Props {
  onChange: (value: string) => void;
}

export default function Input({ onChange }: Props) {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search"
    />
  );
}
