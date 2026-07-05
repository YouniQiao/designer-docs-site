# subscribe

## subscribe

```TypeScript
function subscribe(capability: OnscreenAwarenessCap,
                     callback: Callback<OnscreenAwarenessInfo[]>, 
                     options?: OnscreenAwarenessOptions): void
```

Enables proactive awareness on screen content and subscribes to a screen awareness result.

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
| callback | Callback&lt;OnscreenAwarenessInfo[]> | Yes | Callback function, which returns the onscreen  awareness result. The returned onscreen awareness information list OnscreenAwarenessInfo[]  contains a maximum of two awareness information items. |
| options | OnscreenAwarenessOptions | No |  |

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
   groupId: 'SmartEdge',
}

let onscreenAwarenessOptions: onScreen.OnscreenAwarenessOptions = {
   parameters: {
      "SmartEdge" : {
         "windowId":'102',
      }
   }
}
try {
   onScreen.subscribe(onscreenAwarenessCap, (info: onScreen.OnscreenAwarenessInfo[]) => {
      console.info(`subscribe resultCode: ${info[0].resultCode}`);
   }, onscreenAwarenessOptions);
} catch (err) {
   console.error('subscribe failed, errCode = ' + err.code);
}

```

