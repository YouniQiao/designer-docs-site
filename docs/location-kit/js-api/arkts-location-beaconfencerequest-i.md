# BeaconFenceRequest

Configuring parameters in BeaconFence request.

**Since:** 20

**System capability:** SystemCapability.Location.Location.Geofence

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## beacon

```TypeScript
beacon: BeaconFence
```

Beacon fence information.

**Type:** BeaconFence

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Location.Location.Geofence

## fenceExtensionAbilityName

```TypeScript
fenceExtensionAbilityName?: string
```

Indicates the name of FenceExtensionAbility.

**Type:** string

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Location.Location.Geofence

## transitionCallback

```TypeScript
transitionCallback?: Callback<GeofenceTransition>
```

Indicates the callback for reporting the BeaconFence transition status.

**Type:** Callback<GeofenceTransition>

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Location.Location.Geofence

