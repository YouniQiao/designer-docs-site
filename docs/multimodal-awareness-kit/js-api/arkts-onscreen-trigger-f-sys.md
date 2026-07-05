# trigger

## trigger

```TypeScript
function trigger(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo>
```

Proactively triggers screen content awareness and obtains the current screen awareness result.

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_SCREEN_CONTENT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capability | OnscreenAwarenessCap | Yes | Onscreen awareness capability list. |
| options | OnscreenAwarenessOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OnscreenAwarenessInfo> | Promise used to return the onscreen awareness result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to get page content forbidden by  permission: ohos.permission.GET_SCREEN_CONTENT. |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 34000001 | Service exception. |
| 34000002 | The application or page is not supported. |

**Example**

```TypeScript
import onScreen from "@ohos.multimodalAwareness.onScreen";
let onscreenAwarenessCap: onScreen.OnscreenAwarenessCap = {
  capList: [
    'UiImage'
  ]
}

let onscreenAwarenessOptions: onScreen.OnscreenAwarenessOptions = {
  parameters: {
    "windowId": 102
  } as Record<string, Object>
}
try {
  let info: onScreen.OnscreenAwarenessInfo =
    await onScreen.trigger(onscreenAwarenessCap, onscreenAwarenessOptions);
  console.info(`trigger resultCode: ${info.resultCode}`);
} catch (err) {
  console.error('trigger failed, errCode = ' + err.code);
}

```

