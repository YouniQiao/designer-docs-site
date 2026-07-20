# offReadingScreenPermissionListener (System API)

## Modules to Import

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## offReadingScreenPermissionListener

```TypeScript
function offReadingScreenPermissionListener(callback?: Callback<ReadingScreenPermissionStatus>): void
```

Disables the screen content access permission monitoring.

**Since:** 23

**Required permissions:** ohos.permission.GET_SCREEN_CONTENT

**Model restriction:** This API can be used only in the stage model.

<!--Device-onScreen-function offReadingScreenPermissionListener(callback?: Callback<ReadingScreenPermissionStatus>): void--><!--Device-onScreen-function offReadingScreenPermissionListener(callback?: Callback<ReadingScreenPermissionStatus>): void-End-->

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ReadingScreenPermissionStatus> | No | Callback to unregister. If this parameter<br> is not passed, all callbacks of the event are unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. An attempt was made to get page content forbidden by<br> permission: ohos.permission.GET_SCREEN_CONTENT. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission check failed. A nonsystem application uses the system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [34000001](../../apis-multimodalawareness-kit/errorcode-onScreen.md#34000001-service-exception) | Service exception. |

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

