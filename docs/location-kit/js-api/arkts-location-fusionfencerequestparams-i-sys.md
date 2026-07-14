# FusionFenceRequestParams (System API)

Indicates fusion fence request params.

**Since:** 26.0.0

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## cellFences

```TypeScript
cellFences?: Array<CellFence>
```

Indicates CELL fence array.

**Type:** Array<CellFence>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## expirationMs

```TypeScript
expirationMs: number
```

Indicates expiration of the circular fence.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## fenceTransitionCallback

```TypeScript
fenceTransitionCallback: Callback<FusionFenceTransition>
```

Indicates the callback for reporting the fence transition status.

**Type:** Callback<FusionFenceTransition>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## fenceType

```TypeScript
fenceType: number
```

Indicates fusion fence type. This field is in bitmap format. Multiple types of fences can be transferred. The definition of each bit is as follows: [FusionFenceType](arkts-location-fusionfencetype-e-sys.md). The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## gnssFences

```TypeScript
gnssFences?: Array<GnssFence>
```

Indicates GNSS fence array.

**Type:** Array<GnssFence>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## identifier

```TypeScript
identifier: string
```

Identifier of the fusion fence. The string format should be a valid unique identifier (e.g., GUID or specific alphanumeric pattern).

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## loiterTimeMs

```TypeScript
loiterTimeMs: number
```

Indicates time for which a device is dwelling in the geofence, in milliseconds. If the device dwelling time reaches the value specified by this parameter, a GEOFENCE_TRANSITION_EVENT_DWELL event is reported. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## monitorTransitionEvents

```TypeScript
monitorTransitionEvents: number
```

Indicates geofence transition status monitored. This field is in bitmap format. The definition of each bit is as follows {@link geoLocationManager.GeofenceTransitionEvent}. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## poiLocation

```TypeScript
poiLocation: Point
```

Indicates the location of POI.

**Type:** Point

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## poiType

```TypeScript
poiType?: string
```

Indicates the type of POI.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## scene

```TypeScript
scene: FusionFenceScene
```

Indicates fusion fence scene.

**Type:** FusionFenceScene

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## wifiFences

```TypeScript
wifiFences?: Array<WifiFence>
```

Indicates Wi-Fi fence array.

**Type:** Array<WifiFence>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

