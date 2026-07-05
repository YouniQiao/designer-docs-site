# getDistanceBetweenLocations

## getDistanceBetweenLocations

```TypeScript
function getDistanceBetweenLocations(location1: Location, location2: Location): double
```

Obtains the distance between two locations.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location1 | Location | 是 | Indicates first location. |
| location2 | Location | 是 | Indicates second location. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Returns the distance between two locations. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let location1: geoLocationManager.Location = {
    "latitude": 30.12,
    "longitude": 120.11,
    "altitude": 0,
    "accuracy": 0,
    "speed": 0,
    "timeStamp": 0,
    "direction": 0,
    "timeSinceBoot": 0,
    "additionSize": 0
  }
  let location2: geoLocationManager.Location = {
    "latitude": 30.12,
    "longitude": 120.11,
    "altitude": 0,
    "accuracy": 0,
    "speed": 0,
    "timeStamp": 0,
    "direction": 0,
    "timeSinceBoot": 0,
    "additionSize": 0
  }
  let distance = geoLocationManager.getDistanceBetweenLocations(location1, location2);
  console.info("distance:" + distance);
} catch (error) {
  console.error("getDistanceBetweenLocations: errCode" + error.code + ", errMessage" + error.message);
}

```

