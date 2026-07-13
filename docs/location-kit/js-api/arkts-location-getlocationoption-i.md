# GetLocationOption

**Since:** 3

**Deprecated since:** 9

**Substitutes:** CurrentLocationRequest

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Lite

## Modules to Import

```TypeScript
import { GetLocationTypeOption, SubscribeLocationOption, GeolocationResponse, GetLocationTypeResponse, GetLocationOption } from '@kit.LocationKit';
```

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** callback

**System capability:** SystemCapability.Location.Location.Lite

## coordType

```TypeScript
coordType?: string
```

Coordinate system type. Available types can be obtained using getSupportedCoordTypes.
The default type is wgs84.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.Location.Location.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the location types fail to be obtained

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** callback

**System capability:** SystemCapability.Location.Location.Lite

## success

```TypeScript
success?: (data: GeolocationResponse) => void
```

Called when the geographic location is obtained.

**Type:** (data: GeolocationResponse) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** callback

**System capability:** SystemCapability.Location.Location.Lite

## timeout

```TypeScript
timeout?: number
```

Timeout duration, in milliseconds.
For the rich device, the default value is 30000.
For the lite wearable device, the default value is 180000.
The timeout duration is necessary in case no result is returned if the request to obtain the geographic location is rejected for the lack of the required permission, weak positioning signal, or incorrect location settings. After the timeout duration expires, the fail function will be called.
The value is a 32-digit positive integer.
If the value set is less than or equal to 0, the default value will be used.

**Type:** number

**Since:** 3

**Deprecated since:** 9

**Substitutes:** timeoutMs

**System capability:** SystemCapability.Location.Location.Lite

