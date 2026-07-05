# isMediaKeySystemSupported

## Modules to Import

```TypeScript
import { drm } from '@ohos.multimedia.drm';
```

## isMediaKeySystemSupported

```TypeScript
function isMediaKeySystemSupported(name: string, mimeType: string, level: ContentProtectionLevel): boolean
```

Judge whether a system that specifies name, mimetype and content protection level is supported.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Used to point a Digital Right Management solution. |
| mimeType | string | Yes | Used to specifies the media type. |
| level | ContentProtectionLevel | Yes | Used to specifies the ContentProtectionLevel. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether these conditions will be met. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

**Example**

```TypeScript
import { drm } from '@kit.DrmKit';

let supported: boolean = drm.isMediaKeySystemSupported("com.clearplay.drm", "video/avc", drm.ContentProtectionLevel.CONTENT_PROTECTION_LEVEL_SW_CRYPTO);
console.info("isMediaKeySystemSupported: ", supported);

```


## isMediaKeySystemSupported

```TypeScript
function isMediaKeySystemSupported(name: string, mimeType: string): boolean
```

Judge whether a system that specifies name, mimetype is supported.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Used to point a Digital Right Management solution. |
| mimeType | string | Yes | Used to specifies the media type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether these conditions will be met. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.3.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

**Example**

```TypeScript
import { drm } from '@kit.DrmKit';

let supported: boolean = drm.isMediaKeySystemSupported("com.clearplay.drm", "video/avc");
console.info("isMediaKeySystemSupported: ", supported);

```


## isMediaKeySystemSupported

```TypeScript
function isMediaKeySystemSupported(name: string): boolean
```

Judge whether a system that specifies name is supported.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Used to point a Digital Right Management solution. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether these conditions will be met. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possibly because:1.Mandatory parameters are left unspecified. 2.Parameter verification failed,the param name's length is zero or too big(exceeds 4096 Bytes). |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

**Example**

```TypeScript
import { drm } from '@kit.DrmKit';

let supported: boolean = drm.isMediaKeySystemSupported("com.clearplay.drm");
console.info("isMediaKeySystemSupported: ", supported);

```

