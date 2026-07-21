# off (System API)

## Modules to Import

```TypeScript
import { mechanicManager } from '@kit.MechanicKit';
```

<a id="off"></a>
## off('rotationAxesStatusChange')

```TypeScript
function off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void
```

Unregister a listener for axis state changes.

**Since:** 20

<!--Device-mechanicManager-function off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void--><!--Device-mechanicManager-function off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void-End-->

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rotationAxesStatusChange' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;RotationAxesStateChangeInfo&gt; | No | Rotate axis state changes callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [33300001](../errorcode-mechanic.md#33300001-system-error) | Service exception. |

**Example**

```TypeScript
console.info('Unregister Axis Status listener');
mechanicManager.off("rotationAxesStatusChange", (result: mechanicManager.RotationAxesStateChangeInfo) => {
  console.info(`'result:' ${result}`);
});
console.info('Unregister successfully');

```

