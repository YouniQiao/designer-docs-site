# interact (System API)

## Modules to Import

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## interact

```TypeScript
function interact(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>
```

Proactively triggers screen behavior interaction to identify screen behaviors and return behavior receipts. For
<br> example, after a link is clicked, the system accurately jumps to the specified paragraph and
<br> highlights the text based on the receipt information.

**Since:** 23

**Required permissions:** ohos.permission.GET_SCREEN_CONTENT

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capability | OnscreenAwarenessCap | Yes | Onscreen awareness capability list. For details, see the following<br> supported capability list. |
| options | OnscreenAwarenessOptions | No | Onscreen awareness parameter list. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OnscreenAwarenessInfo[]&gt; | Promise used to return the onscreen awareness result. The returned<br> onscreen awareness information list **OnscreenAwarenessInfo[]** contains a maximum of two awareness<br> information items. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. An attempt was made to get page content forbidden by<br> permission: ohos.permission.GET_SCREEN_CONTENT. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [34000001](../../apis-multimodalawareness-kit/errorcode-onScreen.md#34000001-service-exception) | Service exception. |
| [34000002](../../apis-multimodalawareness-kit/errorcode-onScreen.md#34000002-unsupported-application-or-page) | The application or page is not supported. |

