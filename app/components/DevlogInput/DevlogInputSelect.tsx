"use client";

import { Select } from "antd";

interface DevlogInputSelect {
  name: string;
  options: { label: string; value: string };
  submitted: boolean;
  handleSelectChange: (fields: "project" | "task", selectedOption: number) => void;
}

export default function DevlogInputSelect({ name, options, submitted, handleSelectChange }) {
  return (
    <Select
      style={{ width: "30%" }}
      optionFilterProp="label"
      options={options}
      onChange={(value) => handleSelectChange(name, value)}
      disabled={submitted}
    />
  );
}
