# @ohos.nearlink.dataTransfer

提供操作和管理星闪数据传输的方法。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NearLink.Base

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [connect](arkts-datatransfer-connect-f.md#connect-1) | 连接服务端。如果连接成功，则可以向服务端发送数据。 |
| [createPort](arkts-datatransfer-createport-f.md#createPort-1) | 通过UUID创建可以接收数据的星闪端口。 |
| [destroyPort](arkts-datatransfer-destroyport-f.md#destroyPort-1) | 根据UUID销毁监听端口并释放相关资源。 |
| [disconnect](arkts-datatransfer-disconnect-f.md#disconnect-1) | 断开或停止与服务端的连接。 |
| [getConnectionState](arkts-datatransfer-getconnectionstate-f.md#getConnectionState-1) | 获取数据传输的连接状态。 |
| [offConnectionStateChanged](arkts-datatransfer-offconnectionstatechanged-f.md#offConnectionStateChanged-1) | 取消订阅连接状态变更事件。 |
| [offReadData](arkts-datatransfer-offreaddata-f.md#offReadData-1) | 取消订阅从端口读取数据的事件。 |
| [onConnectionStateChanged](arkts-datatransfer-onconnectionstatechanged-f.md#onConnectionStateChanged-1) | 订阅连接状态变化事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 |
| [onReadData](arkts-datatransfer-onreaddata-f.md#onReadData-1) | 订阅从端口读取数据事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 |
| [writeData](arkts-datatransfer-writedata-f.md#writeData-1) | 根据地址和UUID写入数据。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ConnectionParams](arkts-datatransfer-connectionparams-i.md) | 连接参数。 |
| [ConnectionResult](arkts-datatransfer-connectionresult-i.md) | 连接结果的参数说明。 |
| [ConnectionStateParams](arkts-datatransfer-connectionstateparams-i.md) | 获取连接状态所需的参数。 |
| [DataParams](arkts-datatransfer-dataparams-i.md) | 数据参数说明。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ConnectionState](arkts-datatransfer-connectionstate-t.md) | 连接状态。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [TransferMode](arkts-datatransfer-transfermode-e.md) | 数据传输模式。 |

