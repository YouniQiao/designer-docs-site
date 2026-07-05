# GnssGeofenceRequest

Configuring parameters in GNSS geofence requests.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## geofenceTransitionCallback

```TypeScript
geofenceTransitionCallback: AsyncCallback<GeofenceTransition>
```

Indicates the callback for reporting the geofence transition status.

**类型：** AsyncCallback<GeofenceTransition>

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## loiterTimeMs

```TypeScript
loiterTimeMs?: int
```

Indicates time for which a device is dwelling in the geofence, in milliseconds. If the device dwelling time reaches the value specified by this parameter, a GEOFENCE_TRANSITION_EVENT_DWELL event is reported.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.Location.Location.Geofence

## geofence

```TypeScript
geofence: Geofence
```

Circular fence information.

**类型：** Geofence

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## fenceExtensionAbilityName

```TypeScript
fenceExtensionAbilityName?: string
```

Indicates the name of FenceExtensionAbility.

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.Location.Location.Geofence

## notifications

```TypeScript
notifications?: Array<NotificationRequest>
```

Indicates the geofence notifications to publish.

**类型：** Array<NotificationRequest>

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## monitorTransitionEvents

```TypeScript
monitorTransitionEvents: Array<GeofenceTransitionEvent>
```

Indicates geofence transition status monitored.

**类型：** Array<GeofenceTransitionEvent>

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

