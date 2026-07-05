# on

## on('steadyStandingDetect')

```TypeScript
function on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void
```

Subscribes to steady standing state events.

**Since:** 18

**System capability:** SystemCapability.MultimodalAwareness.DeviceStatus

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'steadyStandingDetect' | Yes | Event type. This field has a fixed value of steadyStandingDetect. |
| callback | Callback&lt;SteadyStandingStatus> | Yes | Callback used to return the steady standing state of the  device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 32500001 | Service exception. |
| 32500002 | Subscription failed. |

**Example**

```TypeScript
try {
   deviceStatus.on('steadyStandingDetect', (data:deviceStatus.SteadyStandingStatus) => {
      console.info('succeed to get status, now status = ' + data);
   });
} catch (err) {
   console.error('on failed, err = ' + err);
}

```

