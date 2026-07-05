# GetLocationOption

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest

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

Called when the location types fail to be obtained

**类型：** (data: string, code: number) => void

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getCurrentLocation#callback

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
success?: (data: GeolocationResponse) => void
```

Called when the geographic location is obtained.

**类型：** (data: GeolocationResponse) => void

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getCurrentLocation#callback

**系统能力：** SystemCapability.Location.Location.Lite

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**类型：** () => void

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getCurrentLocation#callback

**系统能力：** SystemCapability.Location.Location.Lite

## timeout

```TypeScript
timeout?: number
```

Timeout duration, in milliseconds. For the rich device, the default value is 30000. For the lite wearable device, the default value is 180000. The timeout duration is necessary in case no result is returned if the request to obtain the geographic location is rejected for the lack of the required permission, weak positioning signal, or incorrect location settings. After the timeout duration expires, the fail function will be called. The value is a 32-digit positive integer. If the value set is less than or equal to 0, the default value will be used.

**类型：** number

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest#timeoutMs

**系统能力：** SystemCapability.Location.Location.Lite

