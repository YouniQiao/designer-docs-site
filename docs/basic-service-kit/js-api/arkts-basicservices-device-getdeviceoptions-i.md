# GetDeviceOptions

**Since:** 3

**Deprecated since:** 6

<!--Device-unnamed-export interface GetDeviceOptions--><!--Device-unnamed-export interface GetDeviceOptions-End-->

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## Modules to Import

```TypeScript
import { DeviceResponse, GetDeviceOptions } from '@kit.BasicServicesKit';
```

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

<!--Device-GetDeviceOptions-complete?: () => void--><!--Device-GetDeviceOptions-complete?: () => void-End-->

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when the device information fails to be obtained.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 6

<!--Device-GetDeviceOptions-fail?: (data: any, code: number) => void--><!--Device-GetDeviceOptions-fail?: (data: any, code: number) => void-End-->

**System capability:** SystemCapability.Startup.SystemInfo.Lite

## success

```TypeScript
success?: (data: DeviceResponse) => void
```

Called when the device information is obtained.

**Type:** (data: DeviceResponse) => void

**Since:** 3

**Deprecated since:** 6

<!--Device-GetDeviceOptions-success?: (data: DeviceResponse) => void--><!--Device-GetDeviceOptions-success?: (data: DeviceResponse) => void-End-->

**System capability:** SystemCapability.Startup.SystemInfo.Lite

