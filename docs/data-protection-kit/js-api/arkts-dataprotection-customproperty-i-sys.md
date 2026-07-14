# CustomProperty (System API)

Represents a custom policy.

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## enterprise

```TypeScript
enterprise: string
```

JSON string of an enterprise custom policy. The value contains a maximum of 4,194,304 bytes. If the value is out of range, error code 401 is thrown.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

