# ChannelInfo

打开代理通道函数的入参，包括对端设备的MAC地址和监听服务的UUID。

**Since:** 20

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { proxyChannelManager } from '@kit.DistributedServiceKit';
```

## peerDevAddr

```TypeScript
peerDevAddr: string
```

对端设备的MAC地址。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## linkType

```TypeScript
linkType: LinkType
```

代理通道的链路类型。

**Type:** LinkType

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## peerUuid

```TypeScript
peerUuid: string
```

对端监听的服务的UUID。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

