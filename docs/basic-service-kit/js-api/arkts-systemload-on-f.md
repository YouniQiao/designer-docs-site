# on

## on('systemLoadChange')

```TypeScript
function on(type: 'systemLoadChange', callback: Callback<SystemLoadLevel>): void
```

Register system load callback for perception system load change

**Since:** 12

**System capability:** SystemCapability.ResourceSchedule.SystemLoad

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemLoadChange' | Yes | system load change type. |
| callback | Callback&lt;SystemLoadLevel> | Yes | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Callback parameter error;  2. Register a exist callback type; 3. Parameter verification failed. |

**Example**

```TypeScript
import { systemLoad } from '@kit.BasicServicesKit';

function onSystemLoadChange(res: systemLoad.SystemLoadLevel) {
    console.info(`system load changed, current level ` + res);
}

try {
    systemLoad.on('systemLoadChange', onSystemLoadChange);
    console.info(`register systemload callback succeeded. `);
} catch (err) {
    console.error(`register systemload callback failed: ` + JSON.stringify(err));
}

```

