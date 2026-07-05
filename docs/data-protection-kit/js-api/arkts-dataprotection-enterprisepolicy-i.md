# EnterprisePolicy

Represents an enterprise custom policy.

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { dlpPermission } from '@ohos.dlpPermission';
```

## policyString

```TypeScript
policyString: string
```

JSON string of an enterprise custom policy. The value contains a maximum of 4,194,304 bytes. If the value is out of range, error code 19100001 is thrown.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

