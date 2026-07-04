# on

## Modules to Import

```TypeScript
import { mechanicManager } from '@ohos.distributedHardware.mechanicManager';
```

## on('attachStateChange')

```TypeScript
function on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void
```

Subscribes to device attachment state change events.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'attachStateChange' | Yes | Event type. |
| callback | Callback&lt;AttachStateChangeInfo&gt; | Yes | Callback used to return the state change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33300001](../errorcode-mechanic.md#33300001-system-error) | Service exception. |

**Example**

```TypeScript
let callback = (result: mechanicManager.AttachStateChangeInfo) => {
  console.info(`'callback result:' ${result}`);
};

console.info('Register');
mechanicManager.on("attachStateChange", callback);
console.info('Succeeded in registering callback.');

```


## on('trackingStateChange')

```TypeScript
function on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void
```

Subscribes to tracking events.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trackingStateChange' | Yes | Event type. |
| callback | Callback&lt;TrackingEventInfo&gt; | Yes | Callback used to return the tracking event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33300001](../errorcode-mechanic.md#33300001-system-error) | Service exception. |

**Example**

```TypeScript
let callback = (result: mechanicManager.TrackingEventInfo) => {
  console.info(`'callback result:' ${result}`);
};

console.info('Register');
mechanicManager.on("trackingStateChange", callback);
console.info('Succeeded in registering callback.');

```

