# getVisibleWindowInfo (System API)

## Modules to Import

```TypeScript
import { window } from '@ohos.window';
```

## getVisibleWindowInfo

```TypeScript
function getVisibleWindowInfo(): Promise<Array<WindowInfo>>
```

Obtains information about visible main windows on the current screen. Visible main windows are main windows that are not returned to the background. This API uses a promise to return the result.

**Since:** 18

**Required permissions:** 
- API version 18+: ohos.permission.VISIBLE_WINDOW_INFO

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WindowInfo&gt;&gt; | Promise used to return the information about visible windows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API.Possible cause: Need ohos.permission.VISIBLE_WINDOW_INFO permission.<br>**Applicable version:** 18 |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed, non-system application uses systemAPI.<br>**Applicable version:** 12 - 17 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Function getVisibleWindowInfo can not work correctly due to limited device capabilities. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally.Possible cause: Internal task error. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let promise = window.getVisibleWindowInfo();
  promise.then((data) => {
    data.forEach(windowInfo=>{
      console.info(`left:${windowInfo.rect.left}`);
      console.info(`top:${windowInfo.rect.top}`);
      console.info(`width:${windowInfo.rect.width}`);
      console.info(`height:${windowInfo.rect.height}`);
      console.info(`windowId:${windowInfo.windowId}`);
      console.info(`windowStatusType:${windowInfo.windowStatusType}`);
      console.info(`abilityName:${windowInfo.abilityName}`);
      console.info(`bundleName:${windowInfo.bundleName}`);
      console.info(`isFocused:${windowInfo.isFocused}`);
    })
  }).catch((err: BusinessError) => {
    console.error('Failed to getWindowInfo. Cause: ' + JSON.stringify(err));
  });
} catch (exception) {
  console.error(`Failed to get visible window info. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

