# ThemeControl

Class ThemeControl provides the Theme management for whole Ability and pages.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { CustomColors,ThemeControl,Colors,CustomDarkColors,Theme,CustomTheme } from '@kit.ArkUI';
```

## setDefaultTheme

```TypeScript
static setDefaultTheme(theme: CustomTheme): void
```

Sets the default Theme: - for whole Ability when invoked from the Ability level code. - for the ArkUI page and for later opened pages when invoked at the ArkUI page level.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| theme | CustomTheme | 是 |  |

