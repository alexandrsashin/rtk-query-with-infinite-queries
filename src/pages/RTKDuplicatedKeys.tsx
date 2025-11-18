import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function RTKDuplicatedKeys() {
  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Title level={2}>RTK with duplicated keys</Title>
      <Paragraph>
        This page will demonstrate RTK Query with duplicated keys issue.
      </Paragraph>
    </div>
  );
}
