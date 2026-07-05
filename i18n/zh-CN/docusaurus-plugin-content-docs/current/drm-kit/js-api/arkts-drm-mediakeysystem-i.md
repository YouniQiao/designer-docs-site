# MediaKeySystem

Manages and record MediaKeySessions. Before calling an MediaKeySystem method, we must use getMediaKeySystem to get a MediaKeySystem instance, then we can call functions.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.Drm.Core

## 导入模块

```TypeScript
import { drm } from '@kit.DrmKit';
```

## clearOfflineMediaKeys

```TypeScript
clearOfflineMediaKeys(mediaKeyId: Uint8Array): void
```

Remove media keys corresponding to the mediaKeyId.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | 是 | The mediaKeyId specifies which media key should be cleared. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed.Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## createMediaKeySession

```TypeScript
createMediaKeySession(level: ContentProtectionLevel): MediaKeySession
```

Create a MediaKeySession instance with level.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| level | ContentProtectionLevel | 是 | Used to specify the content protection level. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaKeySession | A MediaKeySession instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.The param level exceeds reasonable range,  please use value in ContentProtectionLevel. |
| 24700101 | All unknown errors. |
| 24700104 | Meet max MediaKeySession num limit. |
| 24700201 | Fatal service error, for example, service died. |

## createMediaKeySession

```TypeScript
createMediaKeySession(level: ContentProtectionLevel): MediaKeySession | undefined
```

Create a MediaKeySession instance with level.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| level | ContentProtectionLevel | 是 | Used to specify the content protection level. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaKeySession | A MediaKeySession instance or undefined. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.The param level exceeds reasonable range,  please use value in ContentProtectionLevel. |
| 24700101 | All unknown errors. |
| 24700104 | Meet max MediaKeySession num limit. |
| 24700201 | Fatal service error, for example, service died. |

## createMediaKeySession

```TypeScript
createMediaKeySession(): MediaKeySession
```

Create a MediaKeySession instance.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaKeySession | A MediaKeySession instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700104 | Meet max MediaKeySession num limit. |
| 24700201 | Fatal service error, for example, service died. |

## createMediaKeySession

```TypeScript
createMediaKeySession(): MediaKeySession | undefined
```

Create a MediaKeySession instance.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaKeySession | A MediaKeySession instance or undefined |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700104 | Meet max MediaKeySession num limit. |
| 24700201 | Fatal service error, for example, service died. |

## destroy

```TypeScript
destroy(): void
```

Release the resource before the MediaKeySystem gonna be unused.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## generateKeySystemRequest

```TypeScript
generateKeySystemRequest(): Promise<ProvisionRequest>
```

Generate a media key system provision request.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ProvisionRequest> | Promise with ProvisionRequest used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getCertificateStatus

```TypeScript
getCertificateStatus(): CertificateStatus
```

Get certificate status of the MediaKeySystem.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CertificateStatus | Certificate Status of the MediaKeySystem instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getConfigurationByteArray

```TypeScript
getConfigurationByteArray(configName: string): Uint8Array
```

Get the specified configuration.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configName | string | 是 | Used to specify the config name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint8Array | The config value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getConfigurationString

```TypeScript
getConfigurationString(configName: string): string
```

Get the specified configuration.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configName | string | 是 | Used to specify the config name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The config value string. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Parameter verification failed,  the param's length is zero or too big(exceeds 4096 Bytes). |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getMaxContentProtectionLevel

```TypeScript
getMaxContentProtectionLevel(): ContentProtectionLevel
```

Get max content protection level the device supports.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ContentProtectionLevel | The max content protection level of the MediaKeySystem instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getOfflineMediaKeyIds

```TypeScript
getOfflineMediaKeyIds(): Uint8Array[]
```

Get the list of offline MediaKeyIds.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint8Array[] | The list of offline MediaKeyIds. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getOfflineMediaKeyStatus

```TypeScript
getOfflineMediaKeyStatus(mediaKeyId: Uint8Array): OfflineMediaKeyStatus
```

Get offline media key status corresponding to the mediaKeyId.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | 是 | The media key identifier. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OfflineMediaKeyStatus | Offline media key Status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getStatistics

```TypeScript
getStatistics(): StatisticKeyValue[]
```

Get performance statistics information.That includes currentSessionNum, version, decryptNumber, and errorDecryptNumber.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| StatisticKeyValue[] | A list that includes performance index and corresponding statistics. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## off('keySystemRequired')

```TypeScript
off(type: 'keySystemRequired', callback?: (eventInfo: EventInfo) => void): void
```

Unregister keySystemRequired events.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keySystemRequired' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for the key system required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| 24700101 | All unknown errors. |

## offKeySystemRequired

```TypeScript
offKeySystemRequired(callback?: (eventInfo: EventInfo) => void): void
```

Unregister keySystemRequired events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for the key system required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## on('keySystemRequired')

```TypeScript
on(type: 'keySystemRequired', callback: (eventInfo: EventInfo) => void): void
```

Register keySystemRequired events.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keySystemRequired' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for the key system required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| 24700101 | All unknown errors. |

## onKeySystemRequired

```TypeScript
onKeySystemRequired(callback: (eventInfo: EventInfo) => void): void
```

Register keySystemRequired events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for the key system required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## processKeySystemResponse

```TypeScript
processKeySystemResponse(response: Uint8Array): Promise<void>
```

Process the response corresponding the key system request obtained by the application.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| response | Uint8Array | 是 | Response corresponding to the request. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## setConfigurationByteArray

```TypeScript
setConfigurationByteArray(configName: string, value: Uint8Array): void
```

Set the specified configuration.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configName | string | 是 | Used to specify the config name. |
| value | Uint8Array | 是 | The value to be set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## setConfigurationString

```TypeScript
setConfigurationString(configName: string, value: string): void
```

Set the specified configuration.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| configName | string | 是 | Used to specify the config name. |
| value | string | 是 | The value to be set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

