# off

## off('callDetailsChange')

```TypeScript
function off(type: 'callDetailsChange', callback?: Callback<CallAttributeOptions>): void
```

Unsubscribe from the callDetailsChange event.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callDetailsChange' | 是 | Event type. Indicates the callDetailsChange event to unsubscribe from. |
| callback | Callback&lt;CallAttributeOptions> | 否 | Indicates the callback to unsubscribe from  the callDetailsChange event. |

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
call.off('callDetailsChange', (data: call.CallAttributeOptions) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('callEventChange')

```TypeScript
function off(type: 'callEventChange', callback?: Callback<CallEventOptions>): void
```

Unsubscribe from the callEventChange event.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callEventChange' | 是 | Event type. Indicates the callEventChange event to unsubscribe from. |
| callback | Callback&lt;CallEventOptions> | 否 | Indicates the callback to unsubscribe from the callEventChange event. |

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
call.off('callEventChange', (data: call.CallEventOptions) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('callDisconnectedCause')

```TypeScript
function off(type: 'callDisconnectedCause', callback?: Callback<DisconnectedDetails>): void
```

Unsubscribe from the callDisconnectedCause event.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callDisconnectedCause' | 是 | Event type. Indicates the callDisconnectedCause event to unsubscribe from. |
| callback | Callback&lt;DisconnectedDetails> | 否 | Indicates the callback used to cancel  the registration monitoring for obtaining the call end reason. |

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
call.off('callDisconnectedCause', (data: call.DisconnectedDetails) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('mmiCodeResult')

```TypeScript
function off(type: 'mmiCodeResult', callback?: Callback<MmiCodeResults>): void
```

Unsubscribe from the mmiCodeResult event.

**起始版本：** 9

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'mmiCodeResult' | 是 | Event type. Indicates the mmiCodeResult event to unsubscribe from. |
| callback | Callback&lt;MmiCodeResults> | 否 | Indicates the callback used to cancel getting mmicode registered listening. |

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
call.off('mmiCodeResult', (data: call.MmiCodeResults) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('audioDeviceChange')

```TypeScript
function off(type: 'audioDeviceChange', callback?: Callback<AudioDeviceCallbackInfo>): void
```

Unsubscribe from the audioDeviceChange event.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioDeviceChange' | 是 | Event type. Indicates the audioDeviceChange event to unsubscribe from. |
| callback | Callback&lt;AudioDeviceCallbackInfo> | 否 | Indicates the callback for getting the result of Current AudioDevice. |

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
call.off('audioDeviceChange', (data: call.AudioDeviceCallbackInfo) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('postDialDelay')

```TypeScript
function off(type: 'postDialDelay', callback?: Callback<string>): void
```

Unsubscribe from the postDialDelay event.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'postDialDelay' | 是 | Event type. Indicates the postDialDelay event to unsubscribe from. |
| callback | Callback&lt;string> | 否 | Indicates the callback for getting the result of post-dial string. |

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
call.off('postDialDelay', (data: string) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('imsCallModeChange')

```TypeScript
function off(type: 'imsCallModeChange', callback?: Callback<ImsCallModeInfo>): void
```

Unsubscribe from the imsCallModeChange event.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imsCallModeChange' | 是 | Event type. Indicates the imsCallModeChange event to unsubscribe from. |
| callback | Callback&lt;ImsCallModeInfo> | 否 | Indicates the callback to unsubscribe from  the imsCallModeChange event. |

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

call.off('imsCallModeChange', (data: call.ImsCallModeInfo) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('callSessionEvent')

```TypeScript
function off(type: 'callSessionEvent', callback?: Callback<CallSessionEvent>): void
```

Unsubscribe from the callSessionEvent.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callSessionEvent' | 是 | Event type. Indicates the callSessionEventChange event to  unsubscribe from. |
| callback | Callback&lt;CallSessionEvent> | 否 | Indicates the callback to unsubscribe from  the CallSessionEvent event. |

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

call.off('callSessionEvent', (data: call.CallSessionEvent) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('peerDimensionsChange')

```TypeScript
function off(type: 'peerDimensionsChange', callback?: Callback<PeerDimensionsDetail>): void
```

Unsubscribe from the peerDimensionsChange event.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'peerDimensionsChange' | 是 | Event type. Indicates the peerDimensionsChange event to  unsubscribe from. |
| callback | Callback&lt;PeerDimensionsDetail> | 否 | Indicates the callback to unsubscribe from  peerDimensionsChange event. |

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

call.off('peerDimensionsChange', (data: call.PeerDimensionsDetail) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

## off('cameraCapabilitiesChange')

```TypeScript
function off(type: 'cameraCapabilitiesChange', callback?: Callback<CameraCapabilities>): void
```

Unsubscribe from the cameraCapabilitiesChange event.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraCapabilitiesChange' | 是 | Event type. Indicates the cameraCapabilitiesChange event  to unsubscribe from. |
| callback | Callback&lt;CameraCapabilities> | 否 | Indicates the callback to unsubscribe from  cameraCapabilitiesChange event. |

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
call.off('cameraCapabilitiesChange', (data: call.CameraCapabilities) => {
    console.info(`callback: data->${JSON.stringify(data)}`);
});

```

