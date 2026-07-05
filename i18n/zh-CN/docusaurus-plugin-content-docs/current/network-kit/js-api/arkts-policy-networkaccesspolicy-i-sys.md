# NetworkAccessPolicy

Network policies that limit the specified UID of application to access the network.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## allowCellular

```TypeScript
allowCellular?: boolean
```

Indicate whether the application can be allowed to access the network by cellular.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## allowWiFi

```TypeScript
allowWiFi?: boolean
```

Indicate whether the application can be allowed to access the network by wifi.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## alwaysAllowCellular

```TypeScript
alwaysAllowCellular?: boolean
```

Indicate whether the application can be always allowed to access the network by cellular and users cannot set it.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## alwaysAllowWiFi

```TypeScript
alwaysAllowWiFi?: boolean
```

Indicate whether the application can be always allowed to access the network by wifi and users cannot set it.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

