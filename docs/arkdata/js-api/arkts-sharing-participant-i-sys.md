# Participant

端云共享的参与者。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## role

```TypeScript
role?: Role
```

参与者的角色，为邀请者或被邀请者。默认为undefined。

**Type:** Role

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## attachInfo

```TypeScript
attachInfo?: string
```

附加信息，用于扩展额外的参与者信息。如用于参与者身份校验的校验码等，默认为空字符串。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## identity

```TypeScript
identity: string
```

参与者的ID。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## privilege

```TypeScript
privilege?: Privilege
```

指定的共享数据权限。默认为Privilege的默认值。

**Type:** Privilege

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## state

```TypeScript
state?: State
```

共享的状态。默认为undefined。

**Type:** State

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

