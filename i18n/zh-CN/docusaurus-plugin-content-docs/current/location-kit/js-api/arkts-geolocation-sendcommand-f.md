# sendCommand

## sendCommand

```TypeScript
function sendCommand(command: LocationCommand, callback: AsyncCallback<boolean>): void
```

Send extended commands to location subsystem.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.sendCommand

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | LocationCommand | 是 | Indicates the extended Command Message Body. |
| callback | AsyncCallback&lt;boolean> | 是 | Indicates the callback for reporting the send command result. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let requestInfo:geolocation.LocationCommand = {'scenario': 0x301, 'command': "command_1"};
geolocation.sendCommand(requestInfo, (err, result) => {
    if (err) {
        console.info('sendCommand: err=' + JSON.stringify(err));
    }
    if (result) {
        console.info('sendCommand: result=' + JSON.stringify(result));
    }
});

```

## sendCommand

```TypeScript
function sendCommand(command: LocationCommand): Promise<boolean>
```

Send extended commands to location subsystem.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.sendCommand

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | LocationCommand | 是 | Indicates the extended Command Message Body. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let requestInfo:geolocation.LocationCommand = {'scenario': 0x301, 'command': "command_1"};
geolocation.sendCommand(requestInfo).then((result) => {
    console.info('promise, sendCommand: ' + JSON.stringify(result));
});

```

