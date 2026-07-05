# off

## off('systemLoadChange')

```TypeScript
function off(type: 'systemLoadChange', callback?: Callback<SystemLoadLevel>): void
```

Unregister system load callback for perception system load change

**Since:** 12

**System capability:** SystemCapability.ResourceSchedule.SystemLoad

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemLoadChange' | Yes | system load change type. |
| callback | Callback&lt;SystemLoadLevel> | No | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Callback parameter error;  2. Unregister type has not register; 3. Parameter verification failed. |

**Example**

```TypeScript
import { systemLoad } from '@kit.BasicServicesKit';

function onSystemLoadChange(res: systemLoad.SystemLoadLevel) {
    console.info(`system load changed, current level ` + res);
}

try {
    systemLoad.off('systemLoadChange', onSystemLoadChange);
    console.info(`unregister systemload callback succeeded:. `);
} catch (err) {
    console.error(`unregister systemload callback failed: ` + JSON.stringify(err));
}

```

