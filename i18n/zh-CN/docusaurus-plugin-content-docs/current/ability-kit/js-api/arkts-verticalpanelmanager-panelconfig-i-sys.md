# PanelConfig

Indicates the panel config

**起始版本：** 20

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { verticalPanelManager } from '@kit.AbilityKit';
```

## type

```TypeScript
type: VerticalType
```

The type of vertical domain

**类型：** VerticalType

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

## sourceAppInfo

```TypeScript
sourceAppInfo: Record<string, string>
```

Indicates the info about source app <p>**NOTE** <br>1. The values of the following keys are assigned by the system. Manual settings do not take effect, since the system automatically changes the values to the actual values during data transfer. -SOURCE_APP_BUNDLE_NAME: bundle name of the caller. The value is a string. -SOURCE_APP_MODULE_NAME: module name of the caller. The value is a string. -SOURCE_APP_ABILITY_NAME: ability name of the caller. The value is a string. -SOURCE_APP_WINDOW_ID: the window ID of the caller. The value is a string. -SOURCE_APP_SCREEN_MODE: the screen mode of the split screen. The value is a string. The value is "1".

**类型：** Record<string, string>

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

