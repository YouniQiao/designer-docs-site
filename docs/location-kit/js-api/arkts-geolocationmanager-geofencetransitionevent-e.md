# GeofenceTransitionEvent

```TypeScript
export enum GeofenceTransitionEvent
```

Enum for geofence transition status.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_ENTER

```TypeScript
GEOFENCE_TRANSITION_EVENT_ENTER = 1
```

The device is within the geofence.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_EXIT

```TypeScript
GEOFENCE_TRANSITION_EVENT_EXIT = 2
```

The device is out of the geofence.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_DWELL

```TypeScript
GEOFENCE_TRANSITION_EVENT_DWELL = 4
```

The device is in the geographical fence for a period of time.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_APPROACHING_GEOFENCE

```TypeScript
GEOFENCE_TRANSITION_EVENT_APPROACHING_GEOFENCE = 8
```

The device is approaching the geofence.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## GEOFENCE_TRANSITION_EVENT_LEAVING_GEOFENCE

```TypeScript
GEOFENCE_TRANSITION_EVENT_LEAVING_GEOFENCE = 16
```

The device is leaving the geofence.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

## GEOFENCE_TRANSITION_EVENT_NEAR_WANDER

```TypeScript
GEOFENCE_TRANSITION_EVENT_NEAR_WANDER = 32
```

The device is approaching the fence from the outside and already very near to it for long time.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

