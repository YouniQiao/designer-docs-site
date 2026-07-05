# promptAction

创建并显示即时反馈、对话框和操作菜单。 > **说明：** > - 本模块不支持在[UIAbility]@ohos.app.ability.UIAbility的文件声明处使用，即不能在UIAbility的生命周期中调用，需要在 创建组件实例后使用。 > > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见 > [UIContext]@ohos.arkui.UIContext说明。建议<!--Del-->在除 > [ServiceExtensionAbility](docroot://application-models/serviceextensionability-sys.md)等无UI界面的场景外，均<!--DelEnd-->使用 > UIContext中的弹窗方法。

**起始版本：** 9

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { LevelMode,ImmersiveMode,LevelOrder } from '@kit.ArkUI';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [closeCustomDialog](arkts-promptaction-closecustomdialog-f.md#closeCustomDialog-1) | 关闭自定义弹窗。 > **说明：** > > - 从API version 11开始支持，从API version 18开始废弃，建议使用[closeCustomDialog](arkts-apis-uicontext-promptaction.md#closecustomdialog12-1)替代。 closeCustomDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取 [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用closeCustomDialog可能导致 [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 12开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。 |
| [closeToast](arkts-promptaction-closetoast-f.md#closeToast-1) | 关闭即时反馈。 > **说明：** > > 直接使用closeToast可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用 UIContext中的getPromptAction方法获取 > 到PromptAction对象，再通过该对象调用 > [closeToast](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#closetoast18)实现。 |
| [openCustomDialog](arkts-promptaction-opencustomdialog-f.md#openCustomDialog-1) | 打开自定义弹窗。通过Promise返回结果。 <!--Del-->不支持在ServiceExtension中使用。<!--DelEnd--> 弹窗宽度在设备竖屏时默认为 所在窗口宽度 - 左右margin（16vp，设备为2in1时为40vp），最大默认宽度为400vp。 > **说明：** > > - 从API version 11开始支持，从API version 18开始废弃，建议使用[openCustomDialog](arkts-apis-uicontext-promptaction.md#opencustomdialog12-1)替代。 openCustomDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取 [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用openCustomDialog可能导致 [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 12开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。 |
| [openToast](arkts-promptaction-opentoast-f.md#openToast-1) | 显示即时反馈并通过Promise返回其id。 > **说明：** > > - 不支持在输入法类型窗口中使用子窗（showMode设置为TOP_MOST或者SYSTEM_TOP_MOST）的openToast，详情见输入法框架的约束与限制说明 > [createPanel](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-inputmethodability-i.md#createPanel) > 。 > > - 直接使用openToast可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用UIContext中的getPromptAction方法获 > 取到PromptAction对象，再通过该对象调用 > [openToast](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#opentoast18)实现。 |
| [showActionMenu](arkts-promptaction-showactionmenu-f.md#showActionMenu-1) | 创建并显示操作菜单，菜单响应结果使用callback异步回调返回。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu11)替代。 showActionMenu需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取 [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用showActionMenu可能导致 [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 11开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。 |
| [showActionMenu](arkts-promptaction-showactionmenu-f.md#showActionMenu-2) | 创建并显示操作菜单，菜单响应后通过Promise返回结果。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu)替代。 showActionMenu需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取 [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用showActionMenu可能导致 [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。 |
| [showDialog](arkts-promptaction-showdialog-f.md#showDialog-1) | 创建并显示对话框，对话框响应结果使用callback异步回调返回。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showDialog](arkts-apis-uicontext-promptaction.md#showdialog)替代。 showDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取[PromptAction](arkts-apis-uicontext-promptaction.md)对象， 然后通过该对象进行调用。且直接使用showDialog可能导致[UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。 |
| [showDialog](arkts-promptaction-showdialog-f.md#showDialog-2) | 创建并显示对话框，对话框通过Promise返回结果。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showDialog](arkts-apis-uicontext-promptaction.md#showdialog-1)替代。 showDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取[PromptAction](arkts-apis-uicontext-promptaction.md)对象， 然后通过该对象进行调用。且直接使用showDialog可能导致[UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。 |
| [showToast](arkts-promptaction-showtoast-f.md#showToast-1) | Creates and displays a toast. 创建并显示即时反馈。 > **说明：** > > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showToast](arkts-apis-uicontext-promptaction.md#showtoast)替代。 showToast需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取[PromptAction](arkts-apis-uicontext-promptaction.md)对象， 然后通过该对象进行调用。且直接使用showToast可能导致[UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。 > > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的 [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的 [PromptAction](arkts-apis-uicontext-promptaction.md)对象。 > > - Toast样式单一，不支持内容的自定义，具体支持能力请参考[ShowToastOptions](#showtoastoptions)提供的接口。 |

### 类

| 名称 | 描述 |
| --- | --- |
| [CommonController](arkts-promptaction-commoncontroller-c.md) | 公共控制器，可以控制promptAction相关组件。 |
| [DialogController](arkts-promptaction-dialogcontroller-c.md) | 自定义弹窗控制器，继承自[CommonController](#commoncontroller18)。 DialogController可作为UIContext弹出自定义弹窗的成员变量，具体用法可看 [openCustomDialogWithController](arkts-apis-uicontext-promptaction.md#opencustomdialogwithcontroller18)和 [presentCustomDialog](arkts-apis-uicontext-promptaction.md#presentcustomdialog18)示例。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ActionMenuOptions](arkts-promptaction-actionmenuoptions-i.md) | 操作菜单的选项。 |
| [ActionMenuSuccessResponse](arkts-promptaction-actionmenusuccessresponse-i.md) | 操作菜单的响应结果。 |
| [BaseDialogOptions](arkts-promptaction-basedialogoptions-i.md) | 弹窗的选项。 |
| [Button](arkts-promptaction-button-i.md) | 菜单中的菜单项按钮。 |
| [CustomDialogOptions](arkts-promptaction-customdialogoptions-i.md) | 自定义弹窗的内容，继承自[BaseDialogOptions](#basedialogoptions11)。 |
| [DialogOptions](arkts-promptaction-dialogoptions-i.md) | 自定义弹窗的内容，继承自[BaseDialogOptions](#basedialogoptions11)。 |
| [ShowDialogOptions](arkts-promptaction-showdialogoptions-i.md) | 对话框的选项。 |
| [ShowDialogSuccessResponse](arkts-promptaction-showdialogsuccessresponse-i.md) | 对话框的响应结果。 |
| [ShowToastOptions](arkts-promptaction-showtoastoptions-i.md) | Toast的选项。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [DialogOptionsBorderColor](arkts-promptaction-dialogoptionsbordercolor-t.md) | 表示弹窗背板的边框颜色允许的数据字段类型。 |
| [DialogOptionsBorderStyle](arkts-promptaction-dialogoptionsborderstyle-t.md) | 表示弹窗背板的边框样式允许的数据字段类型。 |
| [DialogOptionsBorderWidth](arkts-promptaction-dialogoptionsborderwidth-t.md) | 表示弹窗背板的边框宽度允许的数据字段类型。 |
| [DialogOptionsCornerRadius](arkts-promptaction-dialogoptionscornerradius-t.md) | 表示弹窗背板的圆角半径允许的数据字段类型。 |
| [DialogOptionsShadow](arkts-promptaction-dialogoptionsshadow-t.md) | 表示弹窗背板的阴影允许的数据字段类型。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CommonState](arkts-promptaction-commonstate-e.md) | 自定义弹窗的状态。 |
| [ToastShowMode](arkts-promptaction-toastshowmode-e.md) | 设置Toast的显示模式，默认显示在应用内，支持显示在子窗。 |

