# sendCommand

## sendCommand

```TypeScript
function sendCommand(command: LocationCommand, callback: AsyncCallback<void>): void
```

Send extended commands to location subsystem.

**Since:** 9

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | LocationCommand | Yes | Indicates the extended command message body. |
| callback | AsyncCallback&lt;void> | Yes | Indicates the callback for reporting the error message.  If the function fails to execute, the error message will be carried in the first parameter err of AsyncCallback,  If the function executes successfully, execute the callback function only, no data will be returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.sendCommand} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let requestInfo: geoLocationManager.LocationCommand = { 'scenario': 0x301, 'command': "command_1" };
try {
  geoLocationManager.sendCommand(requestInfo, (err) => {
    if (err) {
      console.error('sendCommand: err=' + JSON.stringify(err));
    }
  });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## sendCommand

```TypeScript
function sendCommand(command: LocationCommand): Promise<void>
```

Send extended commands to location subsystem.

**Since:** 9

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | LocationCommand | Yes | Indicates the extended command message body. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.sendCommand} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let requestInfo: geoLocationManager.LocationCommand = { 'scenario': 0x301, 'command': "command_1" };
try {
  geoLocationManager.sendCommand(requestInfo).then(() => {
    console.info('promise, sendCommand success');
  })
    .catch((error: BusinessError) => {
      console.error('promise, sendCommand: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

