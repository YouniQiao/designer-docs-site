# off (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## off('callDetailsChange')

```TypeScript
function off(type: 'callDetailsChange', callback?: Callback<CallAttributeOptions>): void
```

Unsubscribe from the callDetailsChange event.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'callDetailsChange', callback?: Callback<CallAttributeOptions>): void--><!--Device-call-function off(type: 'callDetailsChange', callback?: Callback<CallAttributeOptions>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callDetailsChange' | Yes | Event type. Indicates the callDetailsChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CallAttributeOptions> | No | Indicates the callback to unsubscribe from the callDetailsChange event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
call.off('callDetailsChange', (data: call.CallAttributeOptions) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('callEventChange')

```TypeScript
function off(type: 'callEventChange', callback?: Callback<CallEventOptions>): void
```

Unsubscribe from the callEventChange event.

**Since:** 8

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'callEventChange', callback?: Callback<CallEventOptions>): void--><!--Device-call-function off(type: 'callEventChange', callback?: Callback<CallEventOptions>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callEventChange' | Yes | Event type. Indicates the callEventChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CallEventOptions> | No | Indicates the callback to unsubscribe from the callEventChange event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
call.off('callEventChange', (data: call.CallEventOptions) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('callDisconnectedCause')

```TypeScript
function off(type: 'callDisconnectedCause', callback?: Callback<DisconnectedDetails>): void
```

Unsubscribe from the callDisconnectedCause event.

**Since:** 8

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'callDisconnectedCause', callback?: Callback<DisconnectedDetails>): void--><!--Device-call-function off(type: 'callDisconnectedCause', callback?: Callback<DisconnectedDetails>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callDisconnectedCause' | Yes | Event type. Indicates the callDisconnectedCause event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<DisconnectedDetails> | No | Indicates the callback used to cancel the registration monitoring for obtaining the call end reason. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
call.off('callDisconnectedCause', (data: call.DisconnectedDetails) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('mmiCodeResult')

```TypeScript
function off(type: 'mmiCodeResult', callback?: Callback<MmiCodeResults>): void
```

Unsubscribe from the mmiCodeResult event.

**Since:** 9

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'mmiCodeResult', callback?: Callback<MmiCodeResults>): void--><!--Device-call-function off(type: 'mmiCodeResult', callback?: Callback<MmiCodeResults>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mmiCodeResult' | Yes | Event type. Indicates the mmiCodeResult event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<MmiCodeResults> | No | Indicates the callback used to cancel getting mmicode registered listening. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
call.off('mmiCodeResult', (data: call.MmiCodeResults) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('audioDeviceChange')

```TypeScript
function off(type: 'audioDeviceChange', callback?: Callback<AudioDeviceCallbackInfo>): void
```

Unsubscribe from the audioDeviceChange event.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'audioDeviceChange', callback?: Callback<AudioDeviceCallbackInfo>): void--><!--Device-call-function off(type: 'audioDeviceChange', callback?: Callback<AudioDeviceCallbackInfo>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioDeviceChange' | Yes | Event type. Indicates the audioDeviceChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AudioDeviceCallbackInfo> | No | Indicates the callback for getting the result of Current AudioDevice. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
call.off('audioDeviceChange', (data: call.AudioDeviceCallbackInfo) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('postDialDelay')

```TypeScript
function off(type: 'postDialDelay', callback?: Callback<string>): void
```

Unsubscribe from the postDialDelay event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'postDialDelay', callback?: Callback<string>): void--><!--Device-call-function off(type: 'postDialDelay', callback?: Callback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'postDialDelay' | Yes | Event type. Indicates the postDialDelay event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<string> | No | Indicates the callback for getting the result of post-dial string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
call.off('postDialDelay', (data: string) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('imsCallModeChange')

```TypeScript
function off(type: 'imsCallModeChange', callback?: Callback<ImsCallModeInfo>): void
```

Unsubscribe from the imsCallModeChange event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'imsCallModeChange', callback?: Callback<ImsCallModeInfo>): void--><!--Device-call-function off(type: 'imsCallModeChange', callback?: Callback<ImsCallModeInfo>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imsCallModeChange' | Yes | Event type. Indicates the imsCallModeChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ImsCallModeInfo> | No | Indicates the callback to unsubscribe from the imsCallModeChange event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.off('imsCallModeChange', (data: call.ImsCallModeInfo) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('callSessionEvent')

```TypeScript
function off(type: 'callSessionEvent', callback?: Callback<CallSessionEvent>): void
```

Unsubscribe from the callSessionEvent.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'callSessionEvent', callback?: Callback<CallSessionEvent>): void--><!--Device-call-function off(type: 'callSessionEvent', callback?: Callback<CallSessionEvent>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callSessionEvent' | Yes | Event type. Indicates the callSessionEventChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CallSessionEvent> | No | Indicates the callback to unsubscribe from the CallSessionEvent event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.off('callSessionEvent', (data: call.CallSessionEvent) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('peerDimensionsChange')

```TypeScript
function off(type: 'peerDimensionsChange', callback?: Callback<PeerDimensionsDetail>): void
```

Unsubscribe from the peerDimensionsChange event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'peerDimensionsChange', callback?: Callback<PeerDimensionsDetail>): void--><!--Device-call-function off(type: 'peerDimensionsChange', callback?: Callback<PeerDimensionsDetail>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'peerDimensionsChange' | Yes | Event type. Indicates the peerDimensionsChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<PeerDimensionsDetail> | No | Indicates the callback to unsubscribe from peerDimensionsChange event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.off('peerDimensionsChange', (data: call.PeerDimensionsDetail) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## off('cameraCapabilitiesChange')

```TypeScript
function off(type: 'cameraCapabilitiesChange', callback?: Callback<CameraCapabilities>): void
```

Unsubscribe from the cameraCapabilitiesChange event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function off(type: 'cameraCapabilitiesChange', callback?: Callback<CameraCapabilities>): void--><!--Device-call-function off(type: 'cameraCapabilitiesChange', callback?: Callback<CameraCapabilities>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraCapabilitiesChange' | Yes | Event type. Indicates the cameraCapabilitiesChange event to unsubscribe from. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CameraCapabilities> | No | Indicates the callback to unsubscribe from cameraCapabilitiesChange event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
call.off('cameraCapabilitiesChange', (data: call.CameraCapabilities) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

