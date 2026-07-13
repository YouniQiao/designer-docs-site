# unregisterConversationListener (System API)

## Modules to Import

```TypeScript
import { conversation } from '@kit.DistributedServiceKit';
```

## unregisterConversationListener

```TypeScript
function unregisterConversationListener(bundleName: string, abilityName: string): void
```

Unregisters the conversation listener for the specified bundle and ability. After calling this API, the
application will no longer receive messages. If no listener was previously registered for the given bundle
and ability, this API returns success without any effect.

**Since:** 26.1.0

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Name of the bundle whose listener will be unregistered. |
| abilityName | string | Yes | Name of the ability within the bundle whose listener will be unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. The application does not have the required permission toaccess distributed data. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. The bundleName or abilityName is invalid or empty. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2000001](../../apis-distributedservice-kit/errorcode-conversation.md#2000001-internal-error) | Internal error. |

