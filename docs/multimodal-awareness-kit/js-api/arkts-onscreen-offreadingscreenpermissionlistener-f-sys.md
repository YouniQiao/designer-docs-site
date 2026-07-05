# offReadingScreenPermissionListener

## offReadingScreenPermissionListener

```TypeScript
function offReadingScreenPermissionListener(callback?: Callback<ReadingScreenPermissionStatus>): void
```

Disables the screen content access permission monitoring.

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_SCREEN_CONTENT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ReadingScreenPermissionStatus> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to get page content forbidden by  permission: ohos.permission.GET_SCREEN_CONTENT. |
| 202 | Permission check failed. A nonsystem application uses the system API. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 34000001 | Service exception. |

**Example**

```TypeScript
import onScreen from "@ohos.multimodalAwareness.onScreen";
try {
  onScreen.offReadingScreenPermissionListener();
  console.info(`offReadingScreenPermissionListener succeeded.`);
} catch (err) {
  console.error('offReadingScreenPermissionListener failed, errCode = ' + err.code);
}

```

