# MediaKeySystem

Manages and record MediaKeySessions. Before calling an MediaKeySystem method, we must use getMediaKeySystem to get a MediaKeySystem instance, then we can call functions.

**Since:** 14

<!--Device-drm-interface MediaKeySystem--><!--Device-drm-interface MediaKeySystem-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

## Modules to Import

```TypeScript
import { drm } from '@kit.DrmKit';
```

<a id="clearofflinemediakeys"></a>
## clearOfflineMediaKeys

```TypeScript
clearOfflineMediaKeys(mediaKeyId: Uint8Array): void
```

Remove media keys corresponding to the mediaKeyId.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-clearOfflineMediaKeys(mediaKeyId: Uint8Array): void--><!--Device-MediaKeySystem-clearOfflineMediaKeys(mediaKeyId: Uint8Array): void-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | Yes | The mediaKeyId specifies which media key should be cleared. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed.Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="createmediakeysession"></a>
## createMediaKeySession

```TypeScript
createMediaKeySession(level: ContentProtectionLevel): MediaKeySession
```

Create a MediaKeySession instance with level.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-createMediaKeySession(level: ContentProtectionLevel): MediaKeySession--><!--Device-MediaKeySystem-createMediaKeySession(level: ContentProtectionLevel): MediaKeySession-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | [ContentProtectionLevel](arkts-drm-drm-contentprotectionlevel-e.md) | Yes | Used to specify the content protection level. |

**Return value:**

| Type | Description |
| --- | --- |
| [MediaKeySession](arkts-drm-drm-mediakeysession-i.md) | A MediaKeySession instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.The param level exceeds reasonable range,please use value in ContentProtectionLevel. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700104](../errorcode-drm.md#24700104-too-many-mediakeysession-instances) | Meet max MediaKeySession num limit. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="createmediakeysession-1"></a>
## createMediaKeySession

```TypeScript
createMediaKeySession(): MediaKeySession
```

Create a MediaKeySession instance.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-createMediaKeySession(): MediaKeySession--><!--Device-MediaKeySystem-createMediaKeySession(): MediaKeySession-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MediaKeySession](arkts-drm-drm-mediakeysession-i.md) | A MediaKeySession instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700104](../errorcode-drm.md#24700104-too-many-mediakeysession-instances) | Meet max MediaKeySession num limit. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="destroy"></a>
## destroy

```TypeScript
destroy(): void
```

Release the resource before the MediaKeySystem gonna be unused.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-destroy(): void--><!--Device-MediaKeySystem-destroy(): void-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="generatekeysystemrequest"></a>
## generateKeySystemRequest

```TypeScript
generateKeySystemRequest(): Promise<ProvisionRequest>
```

Generate a media key system provision request.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-generateKeySystemRequest(): Promise<ProvisionRequest>--><!--Device-MediaKeySystem-generateKeySystemRequest(): Promise<ProvisionRequest>-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ProvisionRequest&gt; | Promise with ProvisionRequest used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="getcertificatestatus"></a>
## getCertificateStatus

```TypeScript
getCertificateStatus(): CertificateStatus
```

Get certificate status of the MediaKeySystem.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-getCertificateStatus(): CertificateStatus--><!--Device-MediaKeySystem-getCertificateStatus(): CertificateStatus-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| [CertificateStatus](arkts-drm-drm-certificatestatus-e.md) | Certificate Status of the MediaKeySystem instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="getconfigurationbytearray"></a>
## getConfigurationByteArray

```TypeScript
getConfigurationByteArray(configName: string): Uint8Array
```

Get the specified configuration.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-getConfigurationByteArray(configName: string): Uint8Array--><!--Device-MediaKeySystem-getConfigurationByteArray(configName: string): Uint8Array-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configName | string | Yes | Used to specify the config name. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | The config value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="getconfigurationstring"></a>
## getConfigurationString

```TypeScript
getConfigurationString(configName: string): string
```

Get the specified configuration.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-getConfigurationString(configName: string): string--><!--Device-MediaKeySystem-getConfigurationString(configName: string): string-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configName | string | Yes | Used to specify the config name. |

**Return value:**

| Type | Description |
| --- | --- |
| string | The config value string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Parameter verification failed,the param's length is zero or too big(exceeds 4096 Bytes). |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="getmaxcontentprotectionlevel"></a>
## getMaxContentProtectionLevel

```TypeScript
getMaxContentProtectionLevel(): ContentProtectionLevel
```

Get max content protection level the device supports.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-getMaxContentProtectionLevel(): ContentProtectionLevel--><!--Device-MediaKeySystem-getMaxContentProtectionLevel(): ContentProtectionLevel-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ContentProtectionLevel](arkts-drm-drm-contentprotectionlevel-e.md) | The max content protection level of the MediaKeySystem instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="getofflinemediakeyids"></a>
## getOfflineMediaKeyIds

```TypeScript
getOfflineMediaKeyIds(): Uint8Array[]
```

Get the list of offline MediaKeyIds.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-getOfflineMediaKeyIds(): Uint8Array[]--><!--Device-MediaKeySystem-getOfflineMediaKeyIds(): Uint8Array[]-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array[] | The list of offline MediaKeyIds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="getofflinemediakeystatus"></a>
## getOfflineMediaKeyStatus

```TypeScript
getOfflineMediaKeyStatus(mediaKeyId: Uint8Array): OfflineMediaKeyStatus
```

Get offline media key status corresponding to the mediaKeyId.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-getOfflineMediaKeyStatus(mediaKeyId: Uint8Array): OfflineMediaKeyStatus--><!--Device-MediaKeySystem-getOfflineMediaKeyStatus(mediaKeyId: Uint8Array): OfflineMediaKeyStatus-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaKeyId | Uint8Array | Yes | The media key identifier. |

**Return value:**

| Type | Description |
| --- | --- |
| [OfflineMediaKeyStatus](arkts-drm-drm-offlinemediakeystatus-e.md) | Offline media key Status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="getstatistics"></a>
## getStatistics

```TypeScript
getStatistics(): StatisticKeyValue[]
```

Get performance statistics information.That includes currentSessionNum, version, decryptNumber,and errorDecryptNumber.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-getStatistics(): StatisticKeyValue[]--><!--Device-MediaKeySystem-getStatistics(): StatisticKeyValue[]-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| [StatisticKeyValue](arkts-drm-drm-statistickeyvalue-i.md)[] | A list that includes performance index and corresponding statistics. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="off"></a>
## off('keySystemRequired')

```TypeScript
off(type: 'keySystemRequired', callback?: (eventInfo: EventInfo) => void): void
```

Unregister keySystemRequired events.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-off(type: 'keySystemRequired', callback?: (eventInfo: EventInfo) => void): void--><!--Device-MediaKeySystem-off(type: 'keySystemRequired', callback?: (eventInfo: EventInfo) => void): void-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keySystemRequired' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | No | Used to listen for the key system required event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

<a id="on"></a>
## on('keySystemRequired')

```TypeScript
on(type: 'keySystemRequired', callback: (eventInfo: EventInfo) => void): void
```

Register keySystemRequired events.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-on(type: 'keySystemRequired', callback: (eventInfo: EventInfo) => void): void--><!--Device-MediaKeySystem-on(type: 'keySystemRequired', callback: (eventInfo: EventInfo) => void): void-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keySystemRequired' | Yes | Type of the drm event to listen for. |
| callback | (eventInfo: EventInfo) =&gt; void | Yes | Used to listen for the key system required event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |

<a id="processkeysystemresponse"></a>
## processKeySystemResponse

```TypeScript
processKeySystemResponse(response: Uint8Array): Promise<void>
```

Process the response corresponding the key system request obtained by the application.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-processKeySystemResponse(response: Uint8Array): Promise<void>--><!--Device-MediaKeySystem-processKeySystemResponse(response: Uint8Array): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | Uint8Array | Yes | Response corresponding to the request. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="setconfigurationbytearray"></a>
## setConfigurationByteArray

```TypeScript
setConfigurationByteArray(configName: string, value: Uint8Array): void
```

Set the specified configuration.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-setConfigurationByteArray(configName: string, value: Uint8Array): void--><!--Device-MediaKeySystem-setConfigurationByteArray(configName: string, value: Uint8Array): void-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configName | string | Yes | Used to specify the config name. |
| value | Uint8Array | Yes | The value to be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

<a id="setconfigurationstring"></a>
## setConfigurationString

```TypeScript
setConfigurationString(configName: string, value: string): void
```

Set the specified configuration.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaKeySystem-setConfigurationString(configName: string, value: string): void--><!--Device-MediaKeySystem-setConfigurationString(configName: string, value: string): void-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configName | string | Yes | Used to specify the config name. |
| value | string | Yes | The value to be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

