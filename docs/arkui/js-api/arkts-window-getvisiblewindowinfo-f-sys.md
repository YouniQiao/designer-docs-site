# getVisibleWindowInfo

## getVisibleWindowInfo

```TypeScript
function getVisibleWindowInfo(): Promise<Array<WindowInfo>>
```

获取当前屏幕的可见主窗口（未退至后台的主窗口）信息。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

- API version18 and later: ohos.permission.VISIBLE_WINDOW_INFO

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;WindowInfo>> | Promise对象，返回当前可见窗口的相关信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API.  Possible cause: Need ohos.permission.VISIBLE_WINDOW_INFO permission. [since 18] |
| 202 | Permission verification failed, non-system application uses system  API. [since 12 - 17] |
| 801 | Capability not supported.  Function getVisibleWindowInfo can not work correctly due to limited device capabilities. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |

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

