# off

## off('steadyStandingDetect')

```TypeScript
function off(type: 'steadyStandingDetect', callback?: Callback<SteadyStandingStatus>): void
```

Unsubscribes from steady standing state events.

**Since:** 18

**System capability:** SystemCapability.MultimodalAwareness.DeviceStatus

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'steadyStandingDetect' | Yes | Event type. This field has a fixed value of steadyStandingDetect. |
| callback | Callback&lt;SteadyStandingStatus> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 32500001 | Service exception. |
| 32500003 | Unsubscription failed. |

**Example**

```TypeScript
try {
   deviceStatus.off('steadyStandingDetect');
} catch (err) {
   console.error('off failed, err = ' + err);
}


// Define the callback variable.
let callback : Callback<deviceStatus.SteadyStandingStatus> = (data : deviceStatus.SteadyStandingStatus) => {
   console.info('succeed to get status, now status = ' + data);
};
// Subscribe to a specific callback of steady standing state change events.
try {
   deviceStatus.on('steadyStandingDetect', callback);
} catch (err) {
   console.error('on failed, err = ' + err);
}
// Unsubscribe from the specific callback of steady standing state change events.
try {
   deviceStatus.off('steadyStandingDetect', callback);
} catch (err) {
   console.error('off failed, err = ' + err);
}

```

