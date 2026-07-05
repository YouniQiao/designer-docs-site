# DataReceiveProgressInfo

This interface is used to obtain the progress information of file upload or download.

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## totalSize

```TypeScript
totalSize: int
```

Total number of bytes to receive.

**类型：** int

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## receiveSize

```TypeScript
receiveSize: int
```

Number of data bytes received.

**类型：** int

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

