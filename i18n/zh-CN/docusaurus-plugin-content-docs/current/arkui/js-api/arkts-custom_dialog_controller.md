# custom_dialog_controller

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [CustomDialogController](arkts-customdialogcontroller-c.md) | 自定义弹窗的控制器。 ###### 导入对象 ```ts dialogController : CustomDialogController | null = new CustomDialogController(CustomDialogControllerOptions) ``` > **说明：** > > - CustomDialogController仅在作为@CustomDialog和@Component struct成员变量，且在@Component struct内部定义时赋值才有效，具体用法可参考下方示例。 > > - 若尝试在CustomDialog中传入多个其他的Controller，以实现在CustomDialog中打开另一个或另一些CustomDialog，那么此处需要将指向自己的controller放在所有controller的后 > 面。详细用法可参考[示例1（弹出嵌套弹窗）](docroot://reference/apis-arkui/arkui-ts/ts-methods-custom-dialog-box.md#示例1弹出嵌套弹窗)。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CustomDialogControllerOptions](arkts-customdialogcontrolleroptions-i.md) | 自定义弹窗的样式。 > **说明：** > > - 按下返回键和ESC键时会让弹窗退出。 > > - 弹窗在避让软键盘时到达极限高度之后会压缩高度。 > > 需要注意：高度压缩生效在外层容器上，如果容器根节点中的子组件设置了较大的固定高度，由于容器默认不裁剪，依然可能存在超出屏幕显示的情况。 > > - 自定义弹窗仅适用于简单提示场景，不能替代页面使用。弹窗避让软键盘时，与软键盘之间存在16vp的安全间距。 > > - 为了达成良好的视觉体验，弹窗的显示和关闭存在默认动画，动画时长不同设备间可能存在差异。 > > 需要注意：在动画播放过程中，页面不响应触摸、滑动、点击操作。关闭默认弹窗动画效果可设置openAnimation和closeAnimation的duration为0。 > > - 当前，ArkUI弹出框默认为非页面级弹出框，在页面路由跳转时，如果开发者未调用close方法将其关闭，弹出框将不会自动关闭。若需实现在跳转页面时覆盖弹出框的场景，可以使用 > [组件导航子页面显示类型的弹窗类型](docroot://ui/arkts-navigation-navdestination.md#页面显示类型)或者 > [页面级弹出框](docroot://ui/arkts-embedded-dialog.md)。 |
| [DismissDialogAction](arkts-dismissdialogaction-i.md) | Dialog关闭的信息。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [PromptActionCommonState](arkts-promptactioncommonstate-t.md) | 自定义弹窗的状态。 |

