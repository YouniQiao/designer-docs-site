# setFontWeightScale

## setFontWeightScale

```TypeScript
function setFontWeightScale(fontWeightScale: number): Promise<void>
```

设置系统字体粗细。

**Since:** 12

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.ArkUI.UiAppearance

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontWeightScale | number | Yes | indicates the font-weight-scale to set |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 500001 | Internal error. |

**Example**

```TypeScript
import { uiAppearance } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let fontWeightScale = 1;

try {
    uiAppearance.setFontWeightScale(fontWeightScale).then(() => {
      console.info('Set fontWeightScale successfully.');
    }).catch((error:Error) => {
      console.error('Set fontWeightScale failed, ' + error.message);
    });
} catch (error) {
    let message = (error as BusinessError).message;
    console.error('Set fontWeightScale failed, ' + message);
}

```

