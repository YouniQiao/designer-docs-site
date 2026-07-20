# off

## Modules to Import

```TypeScript
import { mechanicManager } from '@kit.MechanicKit';
```

## off('attachStateChange')

```TypeScript
function off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void
```

Unsubscribes from device attachment state change events.

**Since:** 20

<!--Device-mechanicManager-function off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void--><!--Device-mechanicManager-function off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void-End-->

**System capability:** SystemCapability.Mechanic.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'attachStateChange' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AttachStateChangeInfo> | No | Callback used to return the state change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33300001](../errorcode-mechanic.md#33300001-system-error) | Service exception. |

**Example**

```TypeScript
let callback = (result: mechanicManager.AttachStateChangeInfo) => {
  console.info(`'callback result:' ${result}`);
};

console.info('Unregister');
mechanicManager.off("attachStateChange", callback);
console.info('Succeeded in unregistering callback.');

```


## off('trackingStateChange')

```TypeScript
function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void
```

Unsubscribes from tracking events.

**Since:** 20

<!--Device-mechanicManager-function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void--><!--Device-mechanicManager-function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void-End-->

**System capability:** SystemCapability.Mechanic.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trackingStateChange' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<TrackingEventInfo> | No | Callback used to return the tracking event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33300001](../errorcode-mechanic.md#33300001-system-error) | Service exception. |

**Example**

```TypeScript
let callback = (result: mechanicManager.TrackingEventInfo) => {
  console.info(`'callback result:' ${result}`);
};

console.info('Unregister');
mechanicManager.off("trackingStateChange", callback);
console.info('Succeeded in unregistering callback.');

```

