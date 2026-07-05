# Geofence

地理围栏的配置信息。

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## monitorEvent

```TypeScript
monitorEvent:MonitorEvent
```

围栏触发条件类型。

**Type:** MonitorEvent

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## coordinateSystemType

```TypeScript
coordinateSystemType:CoordinateSystemType
```

中心点坐标系类型。

**Type:** CoordinateSystemType

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## latitude

```TypeScript
latitude:double
```

地理围栏中心点纬度，取值范围：[-90, 90]。

**Type:** double

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## delayTime

```TypeScript
delayTime?:int
```

围栏延迟时间，单位秒，进入围栏后触发围栏的延迟时间，取值范围：[0, 300]。默认值为0。

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## radius

```TypeScript
radius:double
```

围栏半径，单位米，取值范围：[200, 2000]。

**Type:** double

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## longitude

```TypeScript
longitude:double
```

地理围栏中心点经度，取值范围：[-180, 180]。

**Type:** double

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

