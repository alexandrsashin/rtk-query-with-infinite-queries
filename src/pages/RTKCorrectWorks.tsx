import { Typography, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useState, useRef, useCallback } from "react";

const { Title } = Typography;

interface DataType {
  key: number;
  id: number;
  name: string;
  age: number;
  address: string;
  email: string;
}

const CONTAINER_HEIGHT = 600;

export default function RTKCorrectWorks() {
  const generateInitialData = () => {
    const newData: DataType[] = [];
    for (let i = 0; i < 20; i++) {
      newData.push({
        key: i,
        id: i + 1,
        name: `Person ${i + 1}`,
        age: 18 + (i % 60),
        address: `Location ${i + 1}, Avenue ${i % 15}`,
        email: `person${i + 1}@test.com`,
      });
    }
    return newData;
  };

  const [data, setData] = useState<DataType[]>(generateInitialData);
  const [loading, setLoading] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const appendData = useCallback(() => {
    const newData: DataType[] = [];
    const startIndex = data.length;
    for (let i = 0; i < 20; i++) {
      const index = startIndex + i;
      newData.push({
        key: index,
        id: index + 1,
        name: `Person ${index + 1}`,
        age: 18 + (index % 60),
        address: `Location ${index + 1}, Avenue ${index % 15}`,
        email: `person${index + 1}@test.com`,
      });
    }
    setData([...data, ...newData]);
  }, [data]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    if (scrollHeight - scrollTop <= clientHeight + 100 && !loading) {
      setLoading(true);
      setTimeout(() => {
        appendData();
        setLoading(false);
      }, 500);
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 80,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 300,
    },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Title level={2}>RTK correct works</Title>
      <div
        ref={tableContainerRef}
        onScroll={handleScroll}
        style={{
          height: CONTAINER_HEIGHT,
          overflow: "auto",
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 810 }}
        />
      </div>
      {loading && (
        <div style={{ textAlign: "center", padding: "12px" }}>Loading...</div>
      )}
    </div>
  );
}
