# InterfaceSharingStateInfo (System API)

The interface is used to notify listeners of changes in shared interface status.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { sharing } from '@ohos.net.sharing';
```

## iface

```TypeScript
iface: string
```

The specified network interface name.

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

## state

```TypeScript
state: SharingIfaceState
```

Network card sharing status.

**Type:** SharingIfaceState

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

## type

```TypeScript
type: SharingIfaceType
```

Enumerates the network sharing types of an NIC.

**Type:** SharingIfaceType

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

