# WindowMode

```TypeScript
export enum WindowMode
```

启动UIAbility时窗口的创建模式，类型为枚举。可配合 [startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options?: StartOptions) 方法使用。

**起始版本：** 12

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## WINDOW_MODE_UNDEFINED

```TypeScript
WINDOW_MODE_UNDEFINED = 0
```

未定义窗口模式。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## WINDOW_MODE_FULLSCREEN

```TypeScript
WINDOW_MODE_FULLSCREEN = 1
```

全屏模式。仅在2in1和Tablet设备上生效。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## WINDOW_MODE_SPLIT_PRIMARY

```TypeScript
WINDOW_MODE_SPLIT_PRIMARY = 100
```

支持应用内拉起Ability时设置为分屏，左侧分屏。仅在折叠屏和Tablet设备上生效。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## WINDOW_MODE_SPLIT_SECONDARY

```TypeScript
WINDOW_MODE_SPLIT_SECONDARY = 101
```

支持应用内拉起Ability时设置为分屏，右侧分屏。仅在折叠屏和Tablet设备上生效。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## WINDOW_MODE_FLOATING

```TypeScript
WINDOW_MODE_FLOATING = 102
```

自由悬浮形式窗口模式。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

