# Geolocation

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager

**系统能力：** SystemCapability.Location.Location.Lite

## 导入模块

```TypeScript
import { GetLocationTypeOption,SubscribeLocationOption,GeolocationResponse,GetLocationTypeResponse,GetLocationOption } from '@kit.LocationKit';
```

## getLocation

```TypeScript
static getLocation(options?: GetLocationOption): void
```

Obtains the geographic location.

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getCurrentLocation

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | GetLocationOption | 否 |  |

## getLocationType

```TypeScript
static getLocationType(options?: GetLocationTypeOption): void
```

Obtains the location types supported by the system.

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | GetLocationTypeOption | 否 |  |

## getSupportedCoordTypes

```TypeScript
static getSupportedCoordTypes(): Array<string>
```

Obtains the supported coordinate system types.

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> |  |

## subscribe

```TypeScript
static subscribe(options: SubscribeLocationOption): void
```

Listens to the geographical location. If this method is called multiple times, the last call takes effect.

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.on#event:locationChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SubscribeLocationOption | 是 |  |

## unsubscribe

```TypeScript
static unsubscribe(): void
```

Cancels listening to the geographical location.

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.off#event:locationChange

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Lite

