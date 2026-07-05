# NetSpecifier

Provides an instance that bear data network capabilities.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## netCapabilities

```TypeScript
netCapabilities: NetCapabilities
```

The transmission capacity and support of the network's global proxy storage data network.

**类型：** NetCapabilities

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## bearerPrivateIdentifier

```TypeScript
bearerPrivateIdentifier?: string
```

Network identifier, the identifier for Wi Fi networks is "wifi", and the identifier for cellular networks is "simId1" (corresponding to SIM card 1).

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

