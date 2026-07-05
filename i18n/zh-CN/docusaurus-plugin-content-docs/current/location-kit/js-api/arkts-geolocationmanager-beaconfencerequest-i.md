# BeaconFenceRequest

Configuring parameters in BeaconFence request.

**起始版本：** 20

**系统能力：** SystemCapability.Location.Location.Geofence

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## beacon

```TypeScript
beacon: BeaconFence
```

Beacon fence information.

**类型：** BeaconFence

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Geofence

## transitionCallback

```TypeScript
transitionCallback?: Callback<GeofenceTransition>
```

Indicates the callback for reporting the BeaconFence transition status.

**类型：** Callback<GeofenceTransition>

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Geofence

## fenceExtensionAbilityName

```TypeScript
fenceExtensionAbilityName?: string
```

Indicates the name of FenceExtensionAbility.

**类型：** string

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Geofence

