# getMediaKeySystemUuid

## Modules to Import

```TypeScript
import { drm } from '@kit.DrmKit';
```

## getMediaKeySystemUuid

```TypeScript
function getMediaKeySystemUuid(name: string): string
```

Get a MediaKeySystem's UUID.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-drm-function getMediaKeySystemUuid(name: string): string--><!--Device-drm-function getMediaKeySystemUuid(name: string): string-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | The Digital Right Management solution name. |

**Return value:**

| Type | Description |
| --- | --- |
| string | The MediaKeySystem uuid. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed.Possibly because:<br>1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

**Example**

```TypeScript
import { drm } from '@kit.DrmKit';

let uuid: string = drm.getMediaKeySystemUuid("com.clearplay.drm");
console.info("getMediaKeySystemUuid: ", uuid);

```

