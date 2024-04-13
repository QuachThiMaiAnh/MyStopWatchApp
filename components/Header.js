import * as React from "react";
import { Appbar } from "react-native-paper";
// Heading of the app
const MyHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "gray" }}>
      <Appbar.Content title="Stopwatch" style={{ alignItems: "center" }} />
    </Appbar.Header>
  );
};
export default MyHeader;
