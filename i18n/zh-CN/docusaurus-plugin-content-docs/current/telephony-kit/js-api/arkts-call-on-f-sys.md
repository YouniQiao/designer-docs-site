# on

## on('callDetailsChange')

```TypeScript
function on(type: 'callDetailsChange', callback: Callback<CallAttributeOptions>): void
```

Subscribe to the callDetailsChange event.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callDetailsChange' | 是 | Event type. Indicates the callDetailsChange event to be subscribed to. |
| callback | Callback&lt;CallAttributeOptions> | 是 | Indicates the callback for getting the result of call details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callEventChange' | 是 | Event type. Indicates the callEventChange event to be subscribed to. |
| callback | Callback&lt;CallEventOptions> | 是 | Indicates the callback for getting the call event id. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callDisconnectedCause' | 是 | Event type. Indicates the callDisconnectedCause event to be subscribed to. |
| callback | Callback&lt;DisconnectedDetails> | 是 | Indicates the callback for getting the call disconnection reason. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'mmiCodeResult' | 是 | Event type. Indicates the mmiCodeResult event to be subscribed to. |
| callback | Callback&lt;MmiCodeResults> | 是 | Indicates the callback for getting the result of MMI code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioDeviceChange' | 是 | Event type. Indicates the audioDeviceChange event to be subscribed to. |
| callback | Callback&lt;AudioDeviceCallbackInfo> | 是 | Indicates the callback for getting the result of Current AudioDevice. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'postDialDelay' | 是 | Event type. Indicates the postDialDelay event to be subscribed to. |
| callback | Callback&lt;string> | 是 | Indicates the callback for getting the result of post-dial string. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imsCallModeChange' | 是 | Event type. Indicates the imsCallModeChange event to be subscribed to. |
| callback | Callback&lt;ImsCallModeInfo> | 是 | Indicates the callback for  getting the result of ImsCallModeInfo details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callSessionEvent' | 是 | Event type. Indicates the callSessionEvent  event to be subscribed to. |
| callback | Callback&lt;CallSessionEvent> | 是 | Indicates the callback for  getting the result of CallSessionEvent. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'peerDimensionsChange' | 是 | Event type. Indicates the peerDimensionsChange event  to be subscribed to. |
| callback | Callback&lt;PeerDimensionsDetail> | 是 | Indicates the callback for  getting the result of PeerDimensionsDetail details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraCapabilitiesChange' | 是 | Event type. Indicates the cameraCapabilitiesChange event  to be subscribed to. |
| callback | Callback&lt;CameraCapabilities> | 是 | Indicates the callback for  getting the result of CameraCapabilities details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
call.on('cameraCapabilitiesChange', (data: call.CameraCapabilities) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

