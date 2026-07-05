# GeofenceTransitionEvent

```TypeScript
export enum GeofenceTransitionEvent
```

Enum for geofence transition status.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_ENTER

```TypeScript
GEOFENCE_TRANSITION_EVENT_ENTER = 1
```

The device is within the geofence.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_EXIT

```TypeScript
GEOFENCE_TRANSITION_EVENT_EXIT = 2
```

The device is out of the geofence.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_DWELL

```TypeScript
GEOFENCE_TRANSITION_EVENT_DWELL = 4
```

The device is in the geographical fence for a period of time.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geofence

## GEOFENCE_TRANSITION_EVENT_APPROACHING_GEOFENCE

```TypeScript
GEOFENCE_TRANSITION_EVENT_APPROACHING_GEOFENCE = 8
```

The device is approaching the geofence.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Geofence

**系统接口：** 此接口为系统接口。

## GEOFENCE_TRANSITION_EVENT_LEAVING_GEOFENCE

```TypeScript
GEOFENCE_TRANSITION_EVENT_LEAVING_GEOFENCE = 16
```

The device is leaving the geofence.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Geofence

**系统接口：** 此接口为系统接口。

## GEOFENCE_TRANSITION_EVENT_NEAR_WANDER

```TypeScript
GEOFENCE_TRANSITION_EVENT_NEAR_WANDER = 32
```

The device is approaching the fence from the outside and already very near to it for long time.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Geofence

**系统接口：** 此接口为系统接口。

