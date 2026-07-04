---
last_update:
  date: 2026-07-04
---

# GetStatusOptions

Object that contains the API calling result.

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## Modules to Import

```TypeScript
import { GetStatusOptions, BatteryResponse } from '@system.battery';
```

## complete

```TypeScript
complete?: () => void
```

Called when an API call is complete.

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when an API call has failed. **data** indicates the error information, and **code** indicates the error code.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## success

```TypeScript
success?: (data: BatteryResponse) => void
```

Called when an API call is successful. **data** is a return value of the [BatteryResponse](#batteryresponsedeprecated) type.

**Type:** (data: BatteryResponse) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

