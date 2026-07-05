# setDarkMode

## setDarkMode

```TypeScript
function setDarkMode(mode: DarkMode, callback: AsyncCallback<void>): void
```

设置系统深色模式。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.ArkUI.UiAppearance

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | DarkMode | Yes | indicates the dark-mode to set |
| callback | AsyncCallback&lt;void> | Yes | the callback of setDarkMode |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 500001 | Internal error. |

**Example**

```TypeScript
import { uiAppearance } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  uiAppearance.setDarkMode(uiAppearance.DarkMode.ALWAYS_DARK, (error) => {
    if (error) {
      console.error('Set dark-mode failed, ' + error.message);
    } else {
      console.info('Set dark-mode successfully.');
    }
  })
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('Set dark-mode failed, ' + message);
}

```

## setDarkMode

```TypeScript
function setDarkMode(mode: DarkMode): Promise<void>
```

设置系统深色模式。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.ArkUI.UiAppearance

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | DarkMode | Yes | indicates the dark-mode to set |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 500001 | Internal error. |

**Example**

```TypeScript
import { uiAppearance } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  uiAppearance.setDarkMode(uiAppearance.DarkMode.ALWAYS_DARK).then(() => {
    console.info('Set dark-mode successfully.');
  }).catch((error: Error) => {
    console.error('Set dark-mode failed, ' + error.message);
  });
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('Set dark-mode failed, ' + message);
}

```

