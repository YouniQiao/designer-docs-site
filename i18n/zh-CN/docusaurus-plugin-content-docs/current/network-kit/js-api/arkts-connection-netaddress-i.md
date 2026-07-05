# NetAddress

Defines a network address.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## address

```TypeScript
address: string
```

Network address.

**类型：** string

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## port

```TypeScript
port?: int
```

Port number. The value ranges from 0 to 65535.

**类型：** int

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## family

```TypeScript
family?: int
```

Address family identifier. The value is 1 for IPv4 and 2 for IPv6. The default value is 1.

**类型：** int

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

