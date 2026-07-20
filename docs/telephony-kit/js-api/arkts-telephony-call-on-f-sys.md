# on (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## on('callDetailsChange')

```TypeScript
function on(type: 'callDetailsChange', callback: Callback<CallAttributeOptions>): void
```

Subscribe to the callDetailsChange event.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'callDetailsChange', callback: Callback<CallAttributeOptions>): void--><!--Device-call-function on(type: 'callDetailsChange', callback: Callback<CallAttributeOptions>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callDetailsChange' | Yes | Event type. Indicates the callDetailsChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CallAttributeOptions> | Yes | Indicates the callback for getting the result of call details. |

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
call.on('callDetailsChange', (data: call.CallAttributeOptions) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('callEventChange')

```TypeScript
function on(type: 'callEventChange', callback: Callback<CallEventOptions>): void
```

Subscribe to the callEventChange event.

**Since:** 8

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'callEventChange', callback: Callback<CallEventOptions>): void--><!--Device-call-function on(type: 'callEventChange', callback: Callback<CallEventOptions>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callEventChange' | Yes | Event type. Indicates the callEventChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CallEventOptions> | Yes | Indicates the callback for getting the call event id. |

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
call.on('callEventChange', (data: call.CallEventOptions) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('callDisconnectedCause')

```TypeScript
function on(type: 'callDisconnectedCause', callback: Callback<DisconnectedDetails>): void
```

Subscribe to the callDisconnectedCause event.

**Since:** 8

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'callDisconnectedCause', callback: Callback<DisconnectedDetails>): void--><!--Device-call-function on(type: 'callDisconnectedCause', callback: Callback<DisconnectedDetails>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callDisconnectedCause' | Yes | Event type. Indicates the callDisconnectedCause event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<DisconnectedDetails> | Yes | Indicates the callback for getting the call disconnection reason. |

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
call.on('callDisconnectedCause', (data: call.DisconnectedDetails) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('mmiCodeResult')

```TypeScript
function on(type: 'mmiCodeResult', callback: Callback<MmiCodeResults>): void
```

Subscribe to the mmiCodeResult event.

**Since:** 9

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'mmiCodeResult', callback: Callback<MmiCodeResults>): void--><!--Device-call-function on(type: 'mmiCodeResult', callback: Callback<MmiCodeResults>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mmiCodeResult' | Yes | Event type. Indicates the mmiCodeResult event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<MmiCodeResults> | Yes | Indicates the callback for getting the result of MMI code. |

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
call.on('mmiCodeResult', (data: call.MmiCodeResults) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('audioDeviceChange')

```TypeScript
function on(type: 'audioDeviceChange', callback: Callback<AudioDeviceCallbackInfo>): void
```

Subscribe to the audioDeviceChange event.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'audioDeviceChange', callback: Callback<AudioDeviceCallbackInfo>): void--><!--Device-call-function on(type: 'audioDeviceChange', callback: Callback<AudioDeviceCallbackInfo>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioDeviceChange' | Yes | Event type. Indicates the audioDeviceChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AudioDeviceCallbackInfo> | Yes | Indicates the callback for getting the result of Current AudioDevice. |

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
call.on('audioDeviceChange', (data: call.AudioDeviceCallbackInfo) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('postDialDelay')

```TypeScript
function on(type: 'postDialDelay', callback: Callback<string>): void
```

Subscribe to the postDialDelay event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'postDialDelay', callback: Callback<string>): void--><!--Device-call-function on(type: 'postDialDelay', callback: Callback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'postDialDelay' | Yes | Event type. Indicates the postDialDelay event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<string> | Yes | Indicates the callback for getting the result of post-dial string. |

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
call.on('postDialDelay', (data: string) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('imsCallModeChange')

```TypeScript
function on(type: 'imsCallModeChange', callback: Callback<ImsCallModeInfo>): void
```

Subscribe to the imsCallModeChange event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'imsCallModeChange', callback: Callback<ImsCallModeInfo>): void--><!--Device-call-function on(type: 'imsCallModeChange', callback: Callback<ImsCallModeInfo>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imsCallModeChange' | Yes | Event type. Indicates the imsCallModeChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ImsCallModeInfo> | Yes | Indicates the callback for getting the result of ImsCallModeInfo details. |

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

call.on('imsCallModeChange', (data: call.ImsCallModeInfo) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('callSessionEvent')

```TypeScript
function on(type: 'callSessionEvent', callback: Callback<CallSessionEvent>): void
```

Subscribe to the callSessionEvent.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'callSessionEvent', callback: Callback<CallSessionEvent>): void--><!--Device-call-function on(type: 'callSessionEvent', callback: Callback<CallSessionEvent>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callSessionEvent' | Yes | Event type. Indicates the callSessionEvent event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CallSessionEvent> | Yes | Indicates the callback for getting the result of CallSessionEvent. |

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

call.on('callSessionEvent', (data: call.CallSessionEvent) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('peerDimensionsChange')

```TypeScript
function on(type: 'peerDimensionsChange', callback: Callback<PeerDimensionsDetail>): void
```

Subscribe to the peerDimensionsChange event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'peerDimensionsChange', callback: Callback<PeerDimensionsDetail>): void--><!--Device-call-function on(type: 'peerDimensionsChange', callback: Callback<PeerDimensionsDetail>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'peerDimensionsChange' | Yes | Event type. Indicates the peerDimensionsChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<PeerDimensionsDetail> | Yes | Indicates the callback for getting the result of PeerDimensionsDetail details. |

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

call.on('peerDimensionsChange', (data: call.PeerDimensionsDetail) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```


## on('cameraCapabilitiesChange')

```TypeScript
function on(type: 'cameraCapabilitiesChange', callback: Callback<CameraCapabilities>): void
```

Subscribe to the cameraCapabilitiesChange event.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function on(type: 'cameraCapabilitiesChange', callback: Callback<CameraCapabilities>): void--><!--Device-call-function on(type: 'cameraCapabilitiesChange', callback: Callback<CameraCapabilities>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraCapabilitiesChange' | Yes | Event type. Indicates the cameraCapabilitiesChange event to be subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CameraCapabilities> | Yes | Indicates the callback for getting the result of CameraCapabilities details. |

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
call.on('cameraCapabilitiesChange', (data: call.CameraCapabilities) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

