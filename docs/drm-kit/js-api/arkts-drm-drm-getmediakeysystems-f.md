# getMediaKeySystems

## Modules to Import

```TypeScript
import { drm } from '@kit.DrmKit';
```

<a id="getmediakeysystems"></a>
## getMediaKeySystems

```TypeScript
function getMediaKeySystems(): MediaKeySystemDescription[]
```

Get all media key systems supported.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-drm-function getMediaKeySystems(): MediaKeySystemDescription[]--><!--Device-drm-function getMediaKeySystems(): MediaKeySystemDescription[]-End-->

**System capability:** SystemCapability.Multimedia.Drm.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MediaKeySystemDescription](arkts-drm-drm-mediakeysystemdescription-i.md)[] | The MediaKeySystem name and uuid info list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [24700101](../errorcode-drm.md#24700101-unknown-error) | All unknown errors. |
| [24700201](../errorcode-drm.md#24700201-service-exception) | Fatal service error, for example, service died. |

**Example**

```TypeScript
import { drm } from '@kit.DrmKit';

let description: drm.MediaKeySystemDescription[] = drm.getMediaKeySystems();
// Verify the returned result. description indicates the plugin information list, including the plugin names and unique IDs.
if (description.length > 0) {
  console.info(`getMediaKeySystems success, count: ${description.length}`);
  for (let i = 0; i < description.length; i++) {
    console.info(`name: ${description[i].name}, uuid: ${description[i].uuid}`);
  }
} else {
  console.info('No DRM system available');
}

```

