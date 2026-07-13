# MediaKeySession

Provide functions and keep a decrypt module. Before calling an MediaKeySession method, we must
use MediaKeySystem's createMediaKeySession to get a MediaKeySession instance.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Drm.Core

## Modules to Import

```TypeScript
import { drm } from '@kit.DrmKit';
```

## checkMediaKeyStatus

```TypeScript
checkMediaKeyStatus(): MediaKeyStatus[]
```

Check the media key status

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| MediaKeyStatus[] | A list of media key status description pairs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## clearMediaKeys

```TypeScript
clearMediaKeys(): void
```

Remove media key.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## destroy

```TypeScript
destroy(): void
```

Release the resource before the session gonna be unused.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## generateMediaKeyRequest

```TypeScript
generateMediaKeyRequest(mimeType: string, initData: Uint8Array, mediaKeyType: number, options?: OptionsData[]): Promise<MediaKeyRequest>
```

Generate the media key request.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | Media type. |
| initData | Uint8Array | Yes | PSSH info. |
| mediaKeyType | number | Yes | Offline or online. |
| options | OptionsData[] | No | Optional data the application set to drm framework. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MediaKeyRequest&gt; | Promise with MediaKeyRequest used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## generateOfflineReleaseRequest

```TypeScript
generateOfflineReleaseRequest(mediaKeyId: Uint8Array): Promise<Uint8Array>
```

Generate offline media key request.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | Yes | The mediaKeyId specifies which media content's media key requestshould be generated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise with media key request in Uint8Array used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## getContentProtectionLevel

```TypeScript
getContentProtectionLevel(): ContentProtectionLevel
```

Get content protection level.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| ContentProtectionLevel | MediaKeySession content protection level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## off('keyRequired')

```TypeScript
off(type: 'keyRequired', callback?: (eventInfo: EventInfo) => void): void
```

Unregister keyRequired event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyRequired' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | No | used to listen for the key required event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## off('keyExpired')

```TypeScript
off(type: 'keyExpired', callback?: (eventInfo: EventInfo) => void): void
```

Unregister keyExpired event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyExpired' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | No | Used to listen for the key required event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## off('vendorDefined')

```TypeScript
off(type: 'vendorDefined', callback?: (eventInfo: EventInfo) => void): void
```

Unregister vendorDefined event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'vendorDefined' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | No | Used to listen for the vendor defined event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## off('expirationUpdate')

```TypeScript
off(type: 'expirationUpdate', callback?: (eventInfo: EventInfo) => void): void
```

Unregister expirationUpdate event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'expirationUpdate' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | No | Used to listen for expiration update event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## off('keysChange')

```TypeScript
off(type: 'keysChange', callback?: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void
```

Unregister keysChange event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keysChange' | Yes | Type of the drm event to listen for. |
| callback | (keyInfo: KeysInfo[], newKeyAvailable: boolean) =&gt; void | No | Used to listen for keys change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## on('keyRequired')

```TypeScript
on(type: 'keyRequired', callback: (eventInfo: EventInfo) => void): void
```

Register keyRequired event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyRequired' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | Yes | used to listen for the key required event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## on('keyExpired')

```TypeScript
on(type: 'keyExpired', callback: (eventInfo: EventInfo) => void): void
```

Register keyExpired event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyExpired' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | Yes | Used to listen for the key required event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## on('vendorDefined')

```TypeScript
on(type: 'vendorDefined', callback: (eventInfo: EventInfo) => void): void
```

Register vendorDefined event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'vendorDefined' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | Yes | Used to listen for the vendor defined event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## on('expirationUpdate')

```TypeScript
on(type: 'expirationUpdate', callback: (eventInfo: EventInfo) => void): void
```

Register expirationUpdate event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'expirationUpdate' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | Yes | Used to listen for expiration update event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## on('keysChange')

```TypeScript
on(type: 'keysChange', callback: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void
```

Register keysChange event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keysChange' | Yes | Type of the drm event to listen for. |
| callback | (keyInfo: KeysInfo[], newKeyAvailable: boolean) =&gt; void | Yes | Used to listen for keys change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

## processMediaKeyResponse

```TypeScript
processMediaKeyResponse(response: Uint8Array): Promise<Uint8Array>
```

Process the response corresponding to the media key request obtained by the application.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | Uint8Array | Yes | The response. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise with media key identifier in Uint8Array used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## processOfflineReleaseResponse

```TypeScript
processOfflineReleaseResponse(mediaKeyId: Uint8Array, response: Uint8Array): Promise<void>
```

Process offline media key response.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | Yes | The mediaKeyId specifies which media content's media key it is. |
| response | Uint8Array | Yes | The offline media key. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## requireSecureDecoderModule

```TypeScript
requireSecureDecoderModule(mimeType: string): boolean
```

Whether the encrypted content require a secure decoder or not.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | The media type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether secure decoder is required. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

## restoreOfflineMediaKeys

```TypeScript
restoreOfflineMediaKeys(mediaKeyId: Uint8Array): Promise<void>
```

Restore offline media key.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | Yes | The mediaKeyId specifies which media key should be restore. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

