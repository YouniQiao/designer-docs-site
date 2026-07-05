# getFontWeightScale

## getFontWeightScale

```TypeScript
function getFontWeightScale(): number
```

获取系统当前的字体粗细缩放比例。 <!--Del--> > **说明：** > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请 > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) > 权限。 <!--DelEnd-->

**Since:** 12

**Required permissions:** 

- API version12  to  19: ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.ArkUI.UiAppearance

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | current font-weight-scale. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. [since 12 - 19] |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12 - 19] |
| 500001 | Internal error. |

**Example**

```TypeScript
import { uiAppearance } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let fontWeightScale = uiAppearance.getFontWeightScale();
  console.info('Get fontWeightScale ' + fontWeightScale);
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('Get fontWeightScale failed, ' + message);
}

```

