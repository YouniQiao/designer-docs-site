# NetworkMatchRule

The matching rules of network quota policies.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## identity

```TypeScript
identity: string
```

To specify the identity of network, such as different WLAN.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## netType

```TypeScript
netType: NetBearType
```

netType see {@link NetBearType}.

**类型：** NetBearType

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## simId

```TypeScript
simId: string
```

The ID of the target card, valid when netType is BEARER_CELLULAR.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

