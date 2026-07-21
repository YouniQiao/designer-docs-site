# off

## Modules to Import

```TypeScript
import { systemLoad } from '@kit.BasicServicesKit';
```

<a id="off"></a>
## off('systemLoadChange')

```TypeScript
function off(type: 'systemLoadChange', callback?: Callback<SystemLoadLevel>): void
```

Disables listening for system load level changes. This API uses an asynchronous callback to return the result.

**Since:** 12

<!--Device-systemLoad-function off(type: 'systemLoadChange', callback?: Callback<SystemLoadLevel>): void--><!--Device-systemLoad-function off(type: 'systemLoadChange', callback?: Callback<SystemLoadLevel>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.SystemLoad

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemLoadChange' | Yes | Change type. This parameter has a fixed value of **systemLoadChange**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SystemLoadLevel&gt; | No | Callback used to return the system load level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Callback parameter error;<br> 2. Unregister type has not register; 3. Parameter verification failed. |

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

