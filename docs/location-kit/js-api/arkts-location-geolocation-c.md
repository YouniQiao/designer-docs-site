# Geolocation

**Since:** 3

**Deprecated since:** 9

**Substitutes:** geoLocationManager/geoLocationManager

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

**System capability:** SystemCapability.Location.Location.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GetLocationOption | No |  |

## getLocationType

```TypeScript
static getLocationType(options?: GetLocationTypeOption): void
```

Obtains the location types supported by the system.

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.Location.Location.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GetLocationTypeOption | No |  |

## getSupportedCoordTypes

```TypeScript
static getSupportedCoordTypes(): Array<string>
```

Obtains the supported coordinate system types.

**Since:** 3

**Deprecated since:** 9

**System capability:** SystemCapability.Location.Location.Lite

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; |  |

## subscribe

```TypeScript
static subscribe(options: SubscribeLocationOption): void
```

Listens to the geographical location. If this method is called multiple times, the last call takes effect.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** event:locationChange

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubscribeLocationOption | Yes |  |

## unsubscribe

```TypeScript
static unsubscribe(): void
```

Cancels listening to the geographical location.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** event:locationChange

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Lite

