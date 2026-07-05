# setFontScale

## setFontScale

```TypeScript
function setFontScale(fontScale: number): Promise<void>
```

设置系统字体大小。

**Since:** 12

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.ArkUI.UiAppearance

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontScale | number | Yes | indicates the font-scale to set |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 500001 | Internal error. |

**Example**

```TypeScript
import { uiAppearance } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let fontScale = 10;

try {
    uiAppearance.setFontScale(fontScale).then(() => {
      console.info('Set fontScale successfully.');
    }).catch((error:Error) => {
      console.error('Set fontScale failed, ' + error.message);
    });
} catch (error) {
    let message = (error as BusinessError).message;
    console.error('Set fontScale failed, ' + message);
}

```

