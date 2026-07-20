# on

## Modules to Import

```TypeScript
import { deviceStatus } from '@kit.MultimodalAwarenessKit';
```

## on('steadyStandingDetect')

```TypeScript
function on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void
```

Subscribes to steady standing state events.

**Since:** 18

<!--Device-deviceStatus-function on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void--><!--Device-deviceStatus-function on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void-End-->

**System capability:** SystemCapability.MultimodalAwareness.DeviceStatus

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'steadyStandingDetect' | Yes | Event type. This field has a fixed value of **steadyStandingDetect**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<SteadyStandingStatus> | Yes | Callback used to return the steady standing state of the device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [32500001](../../apis-multimodalawareness-kit/errorcode-deviceStatus.md#32500001-abnormal-service) | Service exception. |
| [32500002](../../apis-multimodalawareness-kit/errorcode-deviceStatus.md#32500002-subscription-failed) | Subscription failed. |

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

