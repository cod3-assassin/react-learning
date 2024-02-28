import React from "react";

const ChildrenProps = () => {
  return (
    <div>
      <Card title={"First Card"}>
        <p>This is the Content of the Card</p>
        <p>Hello From Children</p>
      </Card>
    </div>
  );
};

export default ChildrenProps;

const Card = ({ title, children }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{children}</p>
    </div>
  );
};
