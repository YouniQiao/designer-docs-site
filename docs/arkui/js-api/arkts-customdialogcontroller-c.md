# CustomDialogController

自定义弹窗的控制器。 ###### 导入对象 ```ts dialogController : CustomDialogController | null = new CustomDialogController(CustomDialogControllerOptions) ``` > **说明：** > > - CustomDialogController仅在作为@CustomDialog和@Component struct成员变量，且在@Component struct内部定义时赋值才有效，具体用法可参考下方示例。 > > - 若尝试在CustomDialog中传入多个其他的Controller，以实现在CustomDialog中打开另一个或另一些CustomDialog，那么此处需要将指向自己的controller放在所有controller的后 > 面。详细用法可参考[示例1（弹出嵌套弹窗）](docroot://reference/apis-arkui/arkui-ts/ts-methods-custom-dialog-box.md#示例1弹出嵌套弹窗)。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## close

```TypeScript
close()
```

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: CustomDialogControllerOptions)
```

自定义弹窗的构造器。 > **说明：** > > 自定义弹窗的所有参数，不支持动态刷新，但可以通过设置customStyle为true，并在自定义组件上设置背景色 > [backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、背景模糊 > [backgroundBlurStyle]CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions) > 、[尺寸设置]common等属性，通过属性绑定的状态变量来实现动态刷新的效果。 > > 在CustomDialogController作为全局变量以实现全局自定义弹窗的场景下，若对controller重新赋值，则无法通过其关闭之前的弹窗。建议在重新赋值前先关闭弹窗。 > > 在自定义弹窗内拉起另一个自定义弹窗时，不建议直接关闭拉起方。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CustomDialogControllerOptions | Yes | 配置自定义弹窗的参数。 |

## getState

```TypeScript
getState(): PromptActionCommonState
```

获取自定义弹窗的状态。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| PromptActionCommonState | 返回对应的弹窗状态。 |

## open

```TypeScript
open()
```

显示自定义弹窗内容，允许多次使用，但如果弹框为SubWindow模式，则该弹框不允许再弹出SubWindow弹框。 > **说明：** > > 不支持在输入法类型窗口中使用子窗（showInSubwindow为true）的CustomDialog，详情见输入法框架的约束与限制说明 > [createPanel](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-inputmethodability-i.md#createPanel) > 。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

