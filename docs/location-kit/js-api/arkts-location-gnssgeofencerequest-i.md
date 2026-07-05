# GnssGeofenceRequest

Configuring parameters in GNSS geofence requests.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## fenceExtensionAbilityName

```TypeScript
fenceExtensionAbilityName?: string
```

Indicates the name of FenceExtensionAbility.

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Location.Location.Geofence

## geofence

```TypeScript
geofence: Geofence
```

Circular fence information.

**Type:** Geofence

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## geofenceTransitionCallback

```TypeScript
geofenceTransitionCallback: AsyncCallback<GeofenceTransition>
```

Indicates the callback for reporting the geofence transition status.

**Type:** AsyncCallback<GeofenceTransition>

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## loiterTimeMs

```TypeScript
loiterTimeMs?: number
```

Indicates time for which a device is dwelling in the geofence, in milliseconds. If the device dwelling time reaches the value specified by this parameter, a GEOFENCE_TRANSITION_EVENT_DWELL event is reported.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Location.Location.Geofence

## monitorTransitionEvents

```TypeScript
monitorTransitionEvents: Array<GeofenceTransitionEvent>
```

Indicates geofence transition status monitored.

**Type:** Array<GeofenceTransitionEvent>

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## notifications

```TypeScript
notifications?: Array<NotificationRequest>
```

Indicates the geofence notifications to publish.

**Type:** Array<NotificationRequest>

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

