import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function RTKCorrectWorks() {
  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Title level={2}>RTK correct works</Title>
      <Paragraph>
        This page will demonstrate RTK Query working correctly.
      </Paragraph>
    </div>
  );
}
