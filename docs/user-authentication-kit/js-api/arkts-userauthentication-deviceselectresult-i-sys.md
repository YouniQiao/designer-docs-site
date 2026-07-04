---
last_update:
  date: 2026-07-04
---

# DeviceSelectResult (System API)

Returns the result of companion device selection.

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@ohos.userIAM.companionDeviceAuth';
```

## deviceKeys

```TypeScript
deviceKeys: DeviceKey[]
```

Device information list.

**Type:** DeviceKey[]

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## selectionContext

```TypeScript
selectionContext?: Uint8Array
```

Device selection context, which carries extended information in JSON format.

**Type:** Uint8Array

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

