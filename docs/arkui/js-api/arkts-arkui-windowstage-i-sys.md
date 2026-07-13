# WindowStage

Implements a window manager, which manages each basic window unit, that is, [Window](arkts-window.md) instance.

Before calling any of the following APIs, you must use
[onWindowStageCreate()](../../apis-ability-kit/arkts-apis/arkts-ability-uiability-c.md#onwindowstagecreate-1) to create a WindowStage
instance.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## disableWindowDecor

```TypeScript
disableWindowDecor(): void
```

Disables window decorators.

When window decorators are disabled and the main window transitions into full-screen mode, hovering the cursor
over the hot zone of the top window's title bar will cause a floating title bar to appear. To prevent the
floating title bar from appearing, call
[setTitleAndDockHoverShown()](arkts-arkui-window-i.md#settitleanddockhovershown-1).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 12 and later |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    console.info('disableWindowDecor');
    windowStage.disableWindowDecor();
  }
};

```

## removeImageForRecent

```TypeScript
removeImageForRecent(): Promise<void>
```

Removes the image that the application has set to be displayed in the multitasking view and on dock hover. The
change will be effective the next time you check the application widget in the multitasking view. This API
uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 
- API version 26.0.0+: ohos.permission.MANAGE_RECENT_SNAPSHOT

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not havethe permission required or a non-system application calls the API.<br>**Applicable version:** 26.0.0 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 22 - 24 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setImageForRecent

```TypeScript
setImageForRecent(imageResource: number | image.PixelMap, value: ImageFit): Promise<void>
```

Sets the image displayed in the multitasking view and on dock hover. This API uses a promise to return the result.

> **NOTE**
>
> Before calling this API, you are advised to complete page loading via
> [loadContent](arkts-arkui-window-i.md#loadcontent-1) or
> [setUIContent](arkts-arkui-window-i.md#setuicontent-2). If this API is called before the application
> completes page loading, the intended functionality does not take effect. As a result, only the application's
> launch page is displayed in the multitasking view.

**Since:** 26.0.0

**Required permissions:** 
- API version 26.0.0+: ohos.permission.MANAGE_RECENT_SNAPSHOT

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageResource | number \| image.PixelMap | Yes | imageResourceId or pixelMap for recent image.imageResourceId Value Range: [0x1000000, 0xffffffff]. |
| value | ImageFit | Yes | Sets the zoom type of an image. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not havethe permission required or a non-system application calls the API.<br>**Applicable version:** 26.0.0 and later |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 22 - 24 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause:1. The window is not created or destroyed.2. The WindowStage is running in the background.3. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause:1. Invalid parameter range. 2. Invalid parameter length. |

## setImageForRecent

```TypeScript
setImageForRecent(imgResourceId: number, value: ImageFit): Promise<void>
```

Sets the image displayed in the multitasking view. This API uses a promise to return the result.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imgResourceId | number | Yes | Resource ID of the custom image. The image must be stored in the**resources/base/media** directory and its resource ID can be obtained using the **$r** resource access mode.For example, to obtain the resource ID of the startIcon image, use the following: $r("app.media.startIcon").id. |
| value | ImageFit | Yes | Fill mode of the custom image. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause:1. Invalid parameter range. 2. Invalid parameter length. 3. Incorrect parameter format. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    let imgResourceId = $r("app.media.startIcon").id
    try {
      let promise = windowStage.setImageForRecent(imgResourceId, ImageFit.Fill);
      promise.then(() => {
        console.info(`Succeeded in setting image for recent`);
      }).catch((err: BusinessError) => {
        console.error(`Failed to set image for recent. Cause code: ${err.code}, message: ${err.message}`);
      });
    } catch (exception) {
      console.error(`Failed to set image for recent.`);
    }
  }
};

```

## setShowOnLockScreen

```TypeScript
setShowOnLockScreen(showOnLockScreen: boolean): void
```

Sets whether to display the window of the application on the lock screen.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| showOnLockScreen | boolean | Yes | Whether to display the window on the lock screen. **true** to display,**false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    console.info('onWindowStageCreate');
    try {
      windowStage.setShowOnLockScreen(true);
    } catch (exception) {
      console.error(`Failed to show on lockscreen. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
};

```

