# StartOptions

StartOptions可以作为启动UIAbility接口（例如 [startAbility()]./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>) ）的入参，用于指定目标UIAbility启动时的选项，包括但不局限于窗口模式、目标UIAbility启动时所在的屏幕等。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { StartOptions } from '@kit.AbilityKit';
```

## minWindowHeight

```TypeScript
minWindowHeight?: int
```

窗口最小的高度，单位为vp，可以通过[getWindowLimitsVP]@ohos.window.d.ts:window.getWindowLimitsVP获得当前窗口的尺寸限制。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 17

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## maxWindowHeight

```TypeScript
maxWindowHeight?: int
```

窗口最大的高度，单位为vp，可以通过[getWindowLimitsVP]@ohos.window.d.ts:window.getWindowLimitsVP获得当前窗口的尺寸限制。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 17

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowHeight

```TypeScript
windowHeight?: int
```

窗口的高度，单位为px。 取值范围为[minWindowHeight, maxWindowHeight]，取值范围单位为vp，可参考[vp2px](../../apis-arkui/arkts-apis/arkts-uicontext-c.md#vp2px)换算为对应的px值 。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## withAnimation

```TypeScript
withAnimation?: boolean
```

启动UIAbility时是否具有动画效果。 传入true时，跟随系统默认动画效果。传入false时，表示关闭启动UIAbility动画效果，仅在[自由窗口状态](docroot://windowmanager/window-terminology.md#自由窗口)的情况下 生效。 此参数不填时，默认为undefined，跟随系统默认动画效果。 从<!--RP2-->OpenHarmony 6.1<!--RP2End-->开始支持。

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startWindowIcon

```TypeScript
startWindowIcon?: image.PixelMap
```

启动当前应用的UIAbility时，启动页所显示的图标。如果未配置该字段，则默认采用module.json5文件中startWindowIcon字段的配置。 **约束：** - 启动其他应用的UIAbility时，该字段不生效。 - 该功能仅在2in1和Tablet设备上生效。 - 仅在[UIAbilityContext.startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility中生效。 - 图片数据大小限制为600MB。

**Type:** image.PixelMap

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowCreateParams

```TypeScript
windowCreateParams?: window.WindowCreateParams
```

启动UIAbility时的窗口参数。

**Type:** window.WindowCreateParams

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## splitRatio

```TypeScript
splitRatio?: window.SplitRatioPreference
```

分屏比首选项的类型。

**Type:** window.SplitRatioPreference

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## minWindowWidth

```TypeScript
minWindowWidth?: int
```

窗口最小的宽度，单位为vp，可以通过[getWindowLimitsVP]@ohos.window.d.ts:window.getWindowLimitsVP获得当前窗口的尺寸限制。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 17

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowMode

```TypeScript
windowMode?: int
```

启动UIAbility时的窗口模式，详见[WindowMode]./@ohos.app.ability.AbilityConstant:AbilityConstant.WindowMode。

**Type:** int

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## hideStartWindow

```TypeScript
hideStartWindow?: boolean
```

启动当前应用的UIAbility时，控制是否隐藏窗口的启动页，true表示隐藏启动页，false表示不隐藏启动页。启动页介绍和规格详见 [StartWindow](docroot://quick-start/module-configuration-file.md#startwindow标签)。 **约束：** 1.该功能仅在2in1设备和自由多窗模式下的Tablet设备上生效。 2.该功能仅在启动当前应用的UIAbility时生效。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startWindowBackgroundColor

```TypeScript
startWindowBackgroundColor?: string
```

启动当前应用的UIAbility时，启动页所显示的背景颜色。固定为ARGB格式, 如：`#E5FFFFFF`。如果未配置该字段，则默认采用module.json5文件中startWindowBackground字段的配置。 **约束：** - 启动其他应用的UIAbility时，该字段不生效。 - 该功能仅在2in1和Tablet设备上生效。 - 仅在[UIAbilityContext.startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility中生效。

**Type:** string

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowTop

```TypeScript
windowTop?: int
```

以指定displayId的屏幕的左顶点为原点，窗口在y轴方向偏移量，单位为px，值为正表示在原点下方，值为负表示在原点上方。该参数为整数，非整数将向下取整。当窗口顶部超出指定displayId的屏幕区域时，限制窗口在指定 displayId的屏幕范围内可见。配置该字段时，建议同时配置windowLeft。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## supportWindowModes

```TypeScript
supportWindowModes?: Array<bundleManager.SupportWindowMode>
```

启动UIAbility时，指定窗口是否显示最大化/窗口化/分屏按键。如果未配置该字段，则默认采用该UIAbility对应的 [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中 [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)的supportWindowMode字段取值。 - FULL_SCREEN：支持全屏模式。 - FLOATING：支持悬浮窗模式。 - SPLIT：支持分屏模式。通常需要配合FULL_SCREEN或FLOATING一起使用，不建议只配置SPLIT。当仅配置SPLIT时，2in1设备上的窗口默认为悬浮窗模式，支持进入分屏模式；Tablet设备上的窗口默认为全屏模 式，支持进入分屏模式。 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下同时配置FULL_SCREEN和SPLIT时，如果应用的 [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)小于15，窗口将以悬浮窗模式启动；如果应用的 [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)大于等于15，窗口将以全屏模式启动。 **约束：** <!--RP1-->该功能仅在2in1和Tablet设备上生效。<!--RP1End-->

**Type:** Array<bundleManager.SupportWindowMode>

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowLeft

```TypeScript
windowLeft?: int
```

以指定displayId的屏幕的左顶点为原点，窗口在x轴方向偏移量，单位为px，值为正表示在原点右侧，值为负表示在原点左侧。该参数为整数，非整数将向下取整。当窗口左顶点超出指定displayId的屏幕区域时，限制窗口在指定 displayId的屏幕范围内可见。配置该字段时，建议同时配置windowTop。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startupVisibility

```TypeScript
startupVisibility?: contextConstant.StartupVisibility
```

UIAbility启动后的可见性。当用户设置目标UIAbility为不可见时，目标UIAbility的窗口不会显示在前台，dock栏也不会有图标，同时目标UIAbility的onForeground生命周期不会被调用。 **约束：** 1.该功能仅在2in1和Tablet设备上生效。 2.仅在[UIAbilityContext.startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility中生效。 3.processMode和startupVisibility必须同时设置。

**Type:** contextConstant.StartupVisibility

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## maxWindowWidth

```TypeScript
maxWindowWidth?: int
```

窗口最大的宽度，单位为vp，可以通过[getWindowLimitsVP]@ohos.window.d.ts:window.getWindowLimitsVP获得当前窗口的尺寸限制。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 17

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## processMode

```TypeScript
processMode?: contextConstant.ProcessMode
```

UIAbility启动后的进程模式。 **约束：** 1.该功能仅在2in1和Tablet设备上生效。 2.仅在[UIAbilityContext.startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility中生效。 3.processMode和startupVisibility必须同时设置。

**Type:** contextConstant.ProcessMode

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## displayId

```TypeScript
displayId?: long
```

屏幕ID，取值为大于等于-1的整数。 - 取值为-1，表示当前屏幕。 - 取值为0，表示主屏幕。 - 取值为正整数，表示指定ID的屏幕。 **说明**： 从API version 14开始，默认值是-1，即当前屏幕。 在API version 14之前版本，默认值为0，即主屏幕。

**Type:** long

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## completionHandler

```TypeScript
completionHandler?: CompletionHandler
```

拉起应用结果的操作类，用于处理拉起应用的结果。

**Type:** CompletionHandler

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowWidth

```TypeScript
windowWidth?: int
```

窗口的宽度，单位为px。 取值范围为[minWindowWidth, maxWindowWidth]，取值范围单位为vp，可参考[vp2px](../../apis-arkui/arkts-apis/arkts-uicontext-c.md#vp2px)换算为对应的px值。 **约束：** 该功能仅在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下生效。

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowFocused

```TypeScript
windowFocused?: boolean
```

窗口是否获焦。默认是true，表示窗口获焦。 **约束：** 1.该功能仅在2in1和Tablet设备上生效。 2.仅在[UIAbilityContext.startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility中生效。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

