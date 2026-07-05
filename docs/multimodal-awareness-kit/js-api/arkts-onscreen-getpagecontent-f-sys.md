# getPageContent

## getPageContent

```TypeScript
function getPageContent(options?: ContentOptions): Promise<PageContent>
```

Obtains the onscreen content when a window is displayed on the screen.

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_SCREEN_CONTENT

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ContentOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageContent> | Indicates the promise which carries retrieved page content |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to get page content forbidden by  permission: ohos.permission.GET_SCREEN_CONTENT. |
| 202 | Permission check failed. A non-system application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 34000001 | Service exception. |
| 34000002 | The application or page is not supported. |
| 34000003 | The window ID is invalid. Possible causes: 1. window id is not passed  when screen is splited. 2. passed window id is not on screen or floating. |
| 34000004 | The page is not ready. |
| 34000006 | The request timed out. |

