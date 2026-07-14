# Geofence (System API)

Defines the configuration of a geofence.

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## coordinateSystemType

```TypeScript
coordinateSystemType:CoordinateSystemType
```

Coordinate system type of the center point.

**Type:** CoordinateSystemType

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## delayTime

```TypeScript
delayTime?:number
```

Delay time from geofence entry to event trigger, in seconds. The value ranges from 0 to 300. The default value is **0**.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## latitude

```TypeScript
latitude:number
```

Latitude of the geofence center. The value ranges from -90 to 90.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## longitude

```TypeScript
longitude:number
```

Longitude of the geofence center. The value ranges from -180 to 180.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## monitorEvent

```TypeScript
monitorEvent:MonitorEvent
```

Event type for monitoring a geofence.

**Type:** MonitorEvent

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## radius

```TypeScript
radius:number
```

Geofence radius, in meters. The value ranges from 200 to 2000.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

