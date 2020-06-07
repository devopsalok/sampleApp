import React from "react";
import { Input } from "antd";
import { AimOutlined } from "@ant-design/icons";
import { useLocation } from "../../../utils/CustomHooks/useLocation";

export default function LocationFinder() {
  const { latitude, longitude, error } = useLocation();
  console.log(latitude, longitude, error);
  return (
    <Input
      className="location-input"
      size="large"
      placeholder="Enter location"
      prefix={<AimOutlined />}
    />
  );
}
