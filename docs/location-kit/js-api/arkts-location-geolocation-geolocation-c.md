# Geolocation

**Since:** 3

**Deprecated since:** 9

**Substitutes:** geoLocationManager/geoLocationManager

<!--Device-unnamed-export default class Geolocation--><!--Device-unnamed-export default class Geolocation-End-->

**System capability:** SystemCapability.Location.Location.Lite

## Modules to Import

```TypeScript
import { GetLocationTypeOption, SubscribeLocationOption, GeolocationResponse, GetLocationTypeResponse, GetLocationOption } from '@kit.LocationKit';
```

## getLocation

```TypeScript
static getLocation(options?: GetLocationOption): void
```

Obtains the geographic location.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** getCurrentLocation

**Required permissions:** ohos.permission.LOCATION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Geolocation-static getLocation(options?: GetLocationOption): void--><!--Device-Geolocation-static getLocation(options?: GetLocationOption): void-End-->

**System capability:** SystemCapability.Location.Location.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [GetLocationOption](arkts-location-geolocation-getlocationoption-i.md) | No |  |

## getLocationType

```TypeScript
static getLocationType(options?: GetLocationTypeOption): void
```

Obtains the location types supported by the system.

**Since:** 3

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-Geolocation-static getLocationType(options?: GetLocationTypeOption): void--><!--Device-Geolocation-static getLocationType(options?: GetLocationTypeOption): void-End-->

**System capability:** SystemCapability.Location.Location.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [GetLocationTypeOption](arkts-location-geolocation-getlocationtypeoption-i.md) | No |  |

## getSupportedCoordTypes

```TypeScript
static getSupportedCoordTypes(): Array<string>
```

Obtains the supported coordinate system types.

**Since:** 3

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

<!--Device-Geolocation-static getSupportedCoordTypes(): Array<string>--><!--Device-Geolocation-static getSupportedCoordTypes(): Array<string>-End-->

**System capability:** SystemCapability.Location.Location.Lite

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> |  |

## subscribe

```TypeScript
static subscribe(options: SubscribeLocationOption): void
```

Listens to the geographical location. If this method is called multiple times, the last call takes effect.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** event:locationChange

**Required permissions:** ohos.permission.LOCATION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Geolocation-static subscribe(options: SubscribeLocationOption): void--><!--Device-Geolocation-static subscribe(options: SubscribeLocationOption): void-End-->

**System capability:** SystemCapability.Location.Location.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubscribeLocationOption](arkts-location-geolocation-subscribelocationoption-i.md) | Yes |  |

## unsubscribe

```TypeScript
static unsubscribe(): void
```

Cancels listening to the geographical location.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** event:locationChange

**Required permissions:** ohos.permission.LOCATION

**Model restriction:** This API can be used only in the FA model.

<!--Device-Geolocation-static unsubscribe(): void--><!--Device-Geolocation-static unsubscribe(): void-End-->

**System capability:** SystemCapability.Location.Location.Lite

