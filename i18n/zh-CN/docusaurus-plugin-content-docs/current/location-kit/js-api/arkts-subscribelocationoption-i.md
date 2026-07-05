# SubscribeLocationOption

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.LocationRequest

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Lite

## 导入模块

```TypeScript
import { GetLocationTypeOption,SubscribeLocationOption,GeolocationResponse,GetLocationTypeResponse,GetLocationOption } from '@kit.LocationKit';
```

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the listening fails.

**类型：** (data: string, code: number) => void

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

## coordType

```TypeScript
coordType?: string
```

Coordinate system type. Available types can be obtained using getSupportedCoordTypes. The default type is wgs84.

**类型：** string

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

## success

```TypeScript
success: (data: GeolocationResponse) => void
```

Called whenever the geographical location changes.

**类型：** (data: GeolocationResponse) => void

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

