# GetLocationTypeOption

**Since:** 3

**Deprecated since:** 9

<!--Device-unnamed-export interface GetLocationTypeOption--><!--Device-unnamed-export interface GetLocationTypeOption-End-->

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

**Model restriction:** This API can be used only in the FA model.

<!--Device-GetLocationTypeOption-complete?: () => void--><!--Device-GetLocationTypeOption-complete?: () => void-End-->

**System capability:** SystemCapability.Location.Location.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the location types fail to be obtained.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-GetLocationTypeOption-fail?: (data: string, code: number) => void--><!--Device-GetLocationTypeOption-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Location.Location.Lite

## success

```TypeScript
success?: (data: GetLocationTypeResponse) => void
```

Called when the location types are obtained.

**Type:** (data: GetLocationTypeResponse) => void

**Since:** 3

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-GetLocationTypeOption-success?: (data: GetLocationTypeResponse) => void--><!--Device-GetLocationTypeOption-success?: (data: GetLocationTypeResponse) => void-End-->

**System capability:** SystemCapability.Location.Location.Lite

