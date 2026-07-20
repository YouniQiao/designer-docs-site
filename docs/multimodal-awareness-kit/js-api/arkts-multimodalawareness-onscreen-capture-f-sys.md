# capture (System API)

## Modules to Import

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## capture

```TypeScript
function capture(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>
```

Proactively triggers screen content awareness to obtain page information.

**Since:** 23

**Required permissions:** ohos.permission.GET_SCREEN_CONTENT

**Model restriction:** This API can be used only in the stage model.

<!--Device-onScreen-function capture(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>--><!--Device-onScreen-function capture(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>-End-->

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capability | [OnscreenAwarenessCap](arkts-multimodalawareness-onscreen-onscreenawarenesscap-i-sys.md) | Yes | Onscreen awareness capability list. For details, see<br> the following supported capability list. |
| options | [OnscreenAwarenessOptions](arkts-multimodalawareness-onscreen-onscreenawarenessoptions-i-sys.md) | No | Onscreen awareness parameter list. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<OnscreenAwarenessInfo[]> | Promise used to return the onscreen awareness result.<br>The returned onscreen awareness information list **OnscreenAwarenessInfo[]** contains a<br> maximum of two awareness information items. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. An attempt was made to get page content forbidden by<br> permission: ohos.permission.GET_SCREEN_CONTENT. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A non-system application uses the system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [34000001](../../apis-multimodalawareness-kit/errorcode-onScreen.md#34000001-service-exception) | Service exception. |
| [34000002](../../apis-multimodalawareness-kit/errorcode-onScreen.md#34000002-unsupported-application-or-page) | The application or page is not supported. |

