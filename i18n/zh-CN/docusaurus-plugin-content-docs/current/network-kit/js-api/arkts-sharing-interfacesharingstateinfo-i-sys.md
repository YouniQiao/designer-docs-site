# InterfaceSharingStateInfo

The interface is used to notify listeners of changes in shared interface status.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

## iface

```TypeScript
iface: string
```

The specified network interface name.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

## state

```TypeScript
state: SharingIfaceState
```

Network card sharing status.

**类型：** SharingIfaceState

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type: SharingIfaceType
```

Enumerates the network sharing types of an NIC.

**类型：** SharingIfaceType

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

**系统接口：** 此接口为系统接口。

