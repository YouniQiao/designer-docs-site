# sendCommand

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

## sendCommand

```TypeScript
function sendCommand(command: LocationCommand, callback: AsyncCallback<boolean>): void
```

Send extended commands to location subsystem.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** sendCommand

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function sendCommand(command: LocationCommand, callback: AsyncCallback<boolean>): void--><!--Device-geolocation-function sendCommand(command: LocationCommand, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | [LocationCommand](arkts-location-geolocationmanager-locationcommand-i.md) | Yes | Indicates the extended Command Message Body. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Indicates the callback for reporting the send command result. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** sendCommand

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function sendCommand(command: LocationCommand): Promise<boolean>--><!--Device-geolocation-function sendCommand(command: LocationCommand): Promise<boolean>-End-->

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | [LocationCommand](arkts-location-geolocationmanager-locationcommand-i.md) | Yes | Indicates the extended Command Message Body. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let requestInfo:geolocation.LocationCommand = {'scenario': 0x301, 'command': "command_1"};
geolocation.sendCommand(requestInfo).then((result) => {
    console.info('promise, sendCommand: ' + JSON.stringify(result));
});

```

