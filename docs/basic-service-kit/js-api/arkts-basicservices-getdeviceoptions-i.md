# GetDeviceOptions

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## Modules to Import

```TypeScript
import { DeviceResponse, GetDeviceOptions } from '@system.device';
```

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when the device information fails to be obtained.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## success

```TypeScript
success?: (data: DeviceResponse) => void
```

Called when the device information is obtained.

**Type:** (data: DeviceResponse) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.Startup.SystemInfo.Lite

