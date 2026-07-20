# sendableResourceToResource

## Modules to Import

```TypeScript
import { sendableResourceManager } from '@kit.LocalizationKit';
```

## sendableResourceToResource

```TypeScript
export function sendableResourceToResource(resource: SendableResource): Resource
```

Converts a **SendableResource** object to a **Resource** object.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-sendableResourceManager-export function sendableResourceToResource(resource: SendableResource): Resource--><!--Device-sendableResourceManager-export function sendableResourceToResource(resource: SendableResource): Resource-End-->

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resource | [SendableResource](arkts-localization-sendableresourcemanager-sendableresource-t.md) | Yes | **SendableResource** object. |

**Return value:**

| Type | Description |
| --- | --- |
| [Resource](arkts-localization-resource-resource-i.md) | **Resource** object after conversion. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;2.Parameter verification failed. |

**Example**

```TypeScript
// Resource file path: src/main/resources/base/element/string.json
{
  "string": [
    {
      "name": "test",
      "value": "I'm a test string resource."
    }
  ]
}

```

```TypeScript
import { sendableResourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let resource: sendableResourceManager.Resource = sendableResourceManager.sendableResourceToResource(sendableResourceManager.resourceToSendableResource($r('app.string.test')));
} catch (error) {
    let code = (error as BusinessError).code;
    let message = (error as BusinessError).message;
    console.error(`sendableResourceToResource failed, error code: ${code}, message: ${message}.`);
}

```

