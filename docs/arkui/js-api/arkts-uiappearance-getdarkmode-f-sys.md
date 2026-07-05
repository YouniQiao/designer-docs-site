# getDarkMode

## getDarkMode

```TypeScript
function getDarkMode(): DarkMode
```

获取系统当前的深色模式配置。 <!--Del--> > **说明：** > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请 > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) > 权限。 <!--DelEnd-->

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.ArkUI.UiAppearance

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| DarkMode | current dark-mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. [since 10 - 19] |
| 500001 | Internal error. |

**Example**

```TypeScript
import { uiAppearance } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let darkMode = uiAppearance.getDarkMode();
  console.info('Get dark-mode ' + darkMode);
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('Get dark-mode failed, ' + message);
}

```

