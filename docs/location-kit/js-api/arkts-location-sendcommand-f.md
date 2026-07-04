# sendCommand

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
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

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | LocationCommand | Yes | Indicates the extended Command Message Body. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback for reporting the send command result. |

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

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | LocationCommand | Yes | Indicates the extended Command Message Body. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let requestInfo:geolocation.LocationCommand = {'scenario': 0x301, 'command': "command_1"};
geolocation.sendCommand(requestInfo).then((result) => {
    console.info('promise, sendCommand: ' + JSON.stringify(result));
});

```

