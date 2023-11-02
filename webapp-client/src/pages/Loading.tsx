import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const PageLoading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div>
      <Spin indicator={antIcon} />
    </div>
  );
};
