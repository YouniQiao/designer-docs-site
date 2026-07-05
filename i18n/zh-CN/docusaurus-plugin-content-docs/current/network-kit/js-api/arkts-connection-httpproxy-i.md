# HttpProxy

Network Global Proxy Configuration Information.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## exclusionList

```TypeScript
exclusionList: Array<string>
```

Do not use a blocking list for proxy servers.

**类型：** Array<string>

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## password

```TypeScript
password?: string
```

Http proxy password.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Core

## port

```TypeScript
port: int
```

Host port.

**类型：** int

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## host

```TypeScript
host: string
```

Proxy server host name.

**类型：** string

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## username

```TypeScript
username?: string
```

Http proxy username.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Core

