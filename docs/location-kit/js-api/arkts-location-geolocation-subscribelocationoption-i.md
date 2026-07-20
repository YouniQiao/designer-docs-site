# SubscribeLocationOption

**Since:** 3

**Deprecated since:** 9

**Substitutes:** LocationRequest

**Required permissions:** ohos.permission.LOCATION

<!--Device-unnamed-export interface SubscribeLocationOption--><!--Device-unnamed-export interface SubscribeLocationOption-End-->

**System capability:** SystemCapability.Location.Location.Lite

## Modules to Import

```TypeScript
import { GetLocationTypeOption, SubscribeLocationOption, GeolocationResponse, GetLocationTypeResponse, GetLocationOption } from '@kit.LocationKit';
```

## coordType

```TypeScript
coordType?: string
```

Coordinate system type. Available types can be obtained using getSupportedCoordTypes.The default type is wgs84.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeLocationOption-coordType?: string--><!--Device-SubscribeLocationOption-coordType?: string-End-->

**System capability:** SystemCapability.Location.Location.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the listening fails.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeLocationOption-fail?: (data: string, code: number) => void--><!--Device-SubscribeLocationOption-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Location.Location.Lite

## success

```TypeScript
success: (data: GeolocationResponse) => void
```

Called whenever the geographical location changes.

**Type:** (data: GeolocationResponse) => void

**Since:** 3

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-SubscribeLocationOption-success: (data: GeolocationResponse) => void--><!--Device-SubscribeLocationOption-success: (data: GeolocationResponse) => void-End-->

**System capability:** SystemCapability.Location.Location.Lite

