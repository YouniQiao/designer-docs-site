# GetLocationTypeOption

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.Location.Location.Lite

## Modules to Import

```TypeScript
import { GetLocationTypeOption, SubscribeLocationOption, GeolocationResponse, GetLocationTypeResponse, GetLocationOption } from '@system.geolocation';
```

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.Location.Location.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the location types fail to be obtained.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.Location.Location.Lite

## success

```TypeScript
success?: (data: GetLocationTypeResponse) => void
```

Called when the location types are obtained.

**Type:** (data: GetLocationTypeResponse) => void

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.Location.Location.Lite

