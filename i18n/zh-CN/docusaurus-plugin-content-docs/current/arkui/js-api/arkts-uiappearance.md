# @ohos.uiAppearance

用户界面外观提供获取系统外观的一些基础能力，包括获取深浅色模式、字体大小缩放比例、字体粗细缩放比例。 > **说明：** > 从API version 20开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.UiAppearance

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { uiAppearance } from '@kit.ArkUI';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getDarkMode](arkts-uiappearance-getdarkmode-f-sys.md#getDarkMode-1) | 获取系统当前的深色模式配置。 <!--Del--> > **说明：** > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请 > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) > 权限。 <!--DelEnd--> |
| <!--DelRow-->[getFontScale](arkts-uiappearance-getfontscale-f-sys.md#getFontScale-1) | 获取系统当前的字体大小缩放比例。 <!--Del--> > **说明：** > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请 > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) > 权限。 <!--DelEnd--> |
| <!--DelRow-->[getFontWeightScale](arkts-uiappearance-getfontweightscale-f-sys.md#getFontWeightScale-1) | 获取系统当前的字体粗细缩放比例。 <!--Del--> > **说明：** > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请 > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration) > 权限。 <!--DelEnd--> |
| <!--DelRow-->[setDarkMode](arkts-uiappearance-setdarkmode-f-sys.md#setDarkMode-1) | 设置系统深色模式。使用callback异步回调。 |
| <!--DelRow-->[setDarkMode](arkts-uiappearance-setdarkmode-f-sys.md#setDarkMode-2) | 设置系统深色模式。使用Promise异步回调。 |
| <!--DelRow-->[setFontScale](arkts-uiappearance-setfontscale-f-sys.md#setFontScale-1) | 设置系统字体大小。 |
| <!--DelRow-->[setFontWeightScale](arkts-uiappearance-setfontweightscale-f-sys.md#setFontWeightScale-1) | 设置系统字体粗细。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DarkMode](arkts-uiappearance-darkmode-e-sys.md) | 深色模式枚举。 | 名称 | 值 | 说明 | | -- | -- | -- | | ALWAYS_DARK | 0 | 系统始终为深色。 | | ALWAYS_LIGHT | 1 | 系统始终为浅色。 | |

