# MediaKeySession

Provide functions and keep a decrypt module. Before calling an MediaKeySession method, we must use MediaKeySystem's createMediaKeySession to get a MediaKeySession instance.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Drm.Core

## 导入模块

```TypeScript
import { drm } from '@kit.DrmKit';
```

## checkMediaKeyStatus

```TypeScript
checkMediaKeyStatus(): MediaKeyStatus[]
```

Check the media key status

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaKeyStatus[] | A list of media key status description pairs. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## clearMediaKeys

```TypeScript
clearMediaKeys(): void
```

Remove media key.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## destroy

```TypeScript
destroy(): void
```

Release the resource before the session gonna be unused.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## generateMediaKeyRequest

```TypeScript
generateMediaKeyRequest(mimeType: string, initData: Uint8Array, mediaKeyType: int, options?: OptionsData[]): Promise<MediaKeyRequest>
```

Generate the media key request.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | Media type. |
| initData | Uint8Array | 是 | PSSH info. |
| mediaKeyType | int | 是 | Offline or online. |
| options | OptionsData[] | 否 | Optional data the application set to drm framework. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MediaKeyRequest> | Promise with MediaKeyRequest used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## generateOfflineReleaseRequest

```TypeScript
generateOfflineReleaseRequest(mediaKeyId: Uint8Array): Promise<Uint8Array>
```

Generate offline media key request.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | 是 | The mediaKeyId specifies which media content's media key request  should be generated. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array> | Promise with media key request in Uint8Array used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## getContentProtectionLevel

```TypeScript
getContentProtectionLevel(): ContentProtectionLevel
```

Get content protection level.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ContentProtectionLevel | MediaKeySession content protection level. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## off('keyRequired')

```TypeScript
off(type: 'keyRequired', callback?: (eventInfo: EventInfo) => void): void
```

Unregister keyRequired event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyRequired' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 否 | used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## off('keyExpired')

```TypeScript
off(type: 'keyExpired', callback?: (eventInfo: EventInfo) => void): void
```

Unregister keyExpired event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyExpired' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## off('vendorDefined')

```TypeScript
off(type: 'vendorDefined', callback?: (eventInfo: EventInfo) => void): void
```

Unregister vendorDefined event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'vendorDefined' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for the vendor defined event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## off('expirationUpdate')

```TypeScript
off(type: 'expirationUpdate', callback?: (eventInfo: EventInfo) => void): void
```

Unregister expirationUpdate event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'expirationUpdate' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for expiration update event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## off('keysChange')

```TypeScript
off(type: 'keysChange', callback?: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void
```

Unregister keysChange event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keysChange' | 是 | Type of the drm event to listen for. |
| callback | (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void | 否 | Used to listen for keys change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## offExpirationUpdate

```TypeScript
offExpirationUpdate(callback?: (eventInfo: EventInfo) => void): void
```

Unregister expirationUpdate event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for expiration update event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## offKeyExpired

```TypeScript
offKeyExpired(callback?: (eventInfo: EventInfo) => void): void
```

Unregister keyExpired event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## offKeyRequired

```TypeScript
offKeyRequired(callback?: (eventInfo: EventInfo) => void): void
```

Unregister keyRequired event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 否 | used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## offKeysChange

```TypeScript
offKeysChange(callback?: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void
```

Unregister keysChange event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void | 否 | Used to listen for keys change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## offVendorDefined

```TypeScript
offVendorDefined(callback?: (eventInfo: EventInfo) => void): void
```

Unregister vendorDefined event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 否 | Used to listen for the vendor defined event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## on('keyRequired')

```TypeScript
on(type: 'keyRequired', callback: (eventInfo: EventInfo) => void): void
```

Register keyRequired event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyRequired' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 是 | used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## on('keyExpired')

```TypeScript
on(type: 'keyExpired', callback: (eventInfo: EventInfo) => void): void
```

Register keyExpired event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyExpired' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## on('vendorDefined')

```TypeScript
on(type: 'vendorDefined', callback: (eventInfo: EventInfo) => void): void
```

Register vendorDefined event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'vendorDefined' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for the vendor defined event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## on('expirationUpdate')

```TypeScript
on(type: 'expirationUpdate', callback: (eventInfo: EventInfo) => void): void
```

Register expirationUpdate event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'expirationUpdate' | 是 | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for expiration update event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## on('keysChange')

```TypeScript
on(type: 'keysChange', callback: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void
```

Register keysChange event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keysChange' | 是 | Type of the drm event to listen for. |
| callback | (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void | 是 | Used to listen for keys change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |

## onExpirationUpdate

```TypeScript
onExpirationUpdate(callback: (eventInfo: EventInfo) => void): void
```

Register expirationUpdate event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for expiration update event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## onKeyExpired

```TypeScript
onKeyExpired(callback: (eventInfo: EventInfo) => void): void
```

Register keyExpired event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## onKeyRequired

```TypeScript
onKeyRequired(callback: (eventInfo: EventInfo) => void): void
```

Register keyRequired event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 是 | used to listen for the key required event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## onKeysChange

```TypeScript
onKeysChange(callback: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void
```

Register keysChange event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void | 是 | Used to listen for keys change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## onVendorDefined

```TypeScript
onVendorDefined(callback: (eventInfo: EventInfo) => void): void
```

Register vendorDefined event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (eventInfo: EventInfo) => void | 是 | Used to listen for the vendor defined event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 24700101 | All unknown errors. |

## processMediaKeyResponse

```TypeScript
processMediaKeyResponse(response: Uint8Array): Promise<Uint8Array>
```

Process the response corresponding to the media key request obtained by the application.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| response | Uint8Array | 是 | The response. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array> | Promise with media key identifier in Uint8Array used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## processOfflineReleaseResponse

```TypeScript
processOfflineReleaseResponse(mediaKeyId: Uint8Array, response: Uint8Array): Promise<void>
```

Process offline media key response.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | 是 | The mediaKeyId specifies which media content's media key it is. |
| response | Uint8Array | 是 | The offline media key. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## requireSecureDecoderModule

```TypeScript
requireSecureDecoderModule(mimeType: string): boolean
```

Whether the encrypted content require a secure decoder or not.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | The media type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether secure decoder is required. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

## restoreOfflineMediaKeys

```TypeScript
restoreOfflineMediaKeys(mediaKeyId: Uint8Array): Promise<void>
```

Restore offline media key.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Drm.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | 是 | The mediaKeyId specifies which media key should be restore. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possibly because:  1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.  3.Parameter verification failed. |
| 24700101 | All unknown errors. |
| 24700201 | Fatal service error, for example, service died. |

