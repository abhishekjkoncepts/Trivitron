import React from "react";
import { Menu, Space } from "antd";

import { Box } from "@mui/material";
const Products = () => {
  return (
    <Box sx={{backgroundColor:"white" }}>
      <Space direction="horizontal">
        <Menu
          items={[
            {
              label: "Mobile",
              key: "Mobile",
              type: "group",
            },
            {
              label: "Android",
              key: "Android",
            },
            {
              label: "Samsung",
              key: "Samsung",
            },
            {
              label: "Nokia",
              key: "Nokia",
            },
            {
              label: "Patronics",
              key: "Patronics",
            },
            {
              label: "Refrigirators",
              key: "Refrigirators",
              type: "group",
            },
            {
              label: "Refrigirators 1",
              key: "Refrigirators 1",
            },
            {
              label: "Refrigirators 2",
              key: "Refrigirators 2",
            },
            {
              label: "Refrigirators 3",
              key: "Refrigirators 3",
            },
            {
              label: "Refrigirators 4",
              key: "Refrigirators 4",
            },
          ]}
          style={{ boxShadow: "none", border: "none" }}
        />
        <Menu
          items={[
            {
              label: "Refrigirators",
              key: "Refrigirators",
              type: "group",
            },
            {
              label: "Refrigirators 1",
              key: "Refrigirators 1",
            },
            {
              label: "Refrigirators 2",
              key: "Refrigirators 2",
            },
            {
              label: "Refrigirators 3",
              key: "Refrigirators 3",
            },
            {
              label: "Refrigirators 4",
              key: "Refrigirators 4",
            },
            {
              label: "Mobile",
              key: "Mobile",
              type: "group",
            },
            {
              label: "Android",
              key: "Android",
            },
            {
              label: "Samsung",
              key: "Samsung",
            },
            {
              label: "Nokia",
              key: "Nokia",
            },
            {
              label: "Patronics",
              key: "Patronics",
            },
          ]}
          style={{ boxShadow: "none", border: "none" }}
        />
        ,
        <Menu
          items={[
            {
              label: "Generators",
              key: "Generators",
              type: "group",
            },
            {
              label: "Generators 1",
              key: "Generators 1",
            },
            {
              label: "Generators 2",
              key: "Generators 2",
            },
            {
              label: "Generators 3",
              key: "Generators 3",
            },
            {
              label: "Generators 4",
              key: "Generators 4",
            },
            {
              label: "Generators 5",
              key: "Generators 5",
            },
            {
              label: "Generators 6",
              key: "Generators 6",
            },
          ]}
          style={{ boxShadow: "none", border: "none" }}
        />
        <Menu
          items={[
            {
              label: "Generators",
              key: "Generators",
              type: "group",
            },
            {
              label: "Generators 1",
              key: "Generators 1",
            },
            {
              label: "Generators 2",
              key: "Generators 2",
            },
            {
              label: "Generators 3",
              key: "Generators 3",
            },
            {
              label: "Generators 4",
              key: "Generators 4",
            },
            {
              label: "Generators 5",
              key: "Generators 5",
            },
            {
              label: "Generators 6",
              key: "Generators 6",
            },
          ]}
          style={{ boxShadow: "none", border: "none" }}
        />,
      
      </Space>
    </Box>
  );
};

export default Products;
