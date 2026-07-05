# PanelStartCallback

The callback of start vertical panel.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { verticalPanelManager } from '@kit.AbilityKit';
```

## onError

```TypeScript
onError: OnErrorFn
```

Called when some error occurred except disconnected from UIAbility or UIExtensionAbility.

**类型：** OnErrorFn

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

## onResult

```TypeScript
onResult?: OnResultFn
```

Called when UIExtensionAbility terminate with result.

**类型：** OnResultFn

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

