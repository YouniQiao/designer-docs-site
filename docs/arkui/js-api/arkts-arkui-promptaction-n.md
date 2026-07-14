# promptAction

This module provides API for creating and displaying toasts, dialog boxes, and action menus. > **NOTE** > > - This module cannot be used in the file declaration of the [UIAbility](../../apis-ability-kit/arkts-apis/arkts-app-ability-uiability.md). In > other words, the APIs of this module can be used only after a component instance is created; they cannot be called > in the lifecycle of the UIAbility. > > - The functionality of this module depends on UI context. This means that the APIs of this module cannot be used > where [the UI context is ambiguous](../../../../ui/arkts-global-interface.md#ambiguous-ui-context). For details, see > [UIContext](arkts-arkui-uicontext.md). It is recommended that you use the dialog box APIs provided by > **UIContext**<!--Del-->, except for UI-less scenarios such as > [ServiceExtensionAbility](../../../../application-models/serviceextensionability-sys.md)<!--DelEnd-->.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode, ImmersiveMode, LevelOrder } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [showToast](arkts-arkui-showtoast-f.md#showtoast-1) | Creates and displays a toast. &gt; **NOTE** &gt; &gt; - This API is supported since API version 9 and deprecated since API version 18. You are advised to use [showToast](arkts-apis-uicontext-promptaction.md#showtoast) instead. Before calling this API, you need to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object using the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) method in [UIContext](arkts-apis-uicontext-uicontext.md). Directly using **showToast** can lead to the issue of [ambiguous UI context](../../ui/arkts-global-interface.md#ambiguous-ui-context). &gt; &gt; - Since API version 10, you can use the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) API in [UIContext](arkts-apis-uicontext-uicontext.md) to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object associated with the current UI context. &gt; &gt; - The toast has a fixed style and does not support content customization. For specific supported capabilities, see [ShowToastOptions](#showtoastoptions). |
| [openToast](arkts-arkui-opentoast-f.md#opentoast-1) | Shows a toast. This API uses a promise to return the toast ID. &gt; **NOTE** &gt; &gt; - Subwindows with **showMode** set to **TOP_MOST** or **SYSTEM_TOP_MOST** do not support **openToast** in input &gt; method type windows. For details, see the constraints in the input method framework &gt; [createPanel](../../apis-ime-kit/arkts-apis/arkts-ime-inputmethodability-i.md#createpanel-2) &gt; . &gt; &gt; - Directly using **openToast** can lead to the issue of &gt; [ambiguous UI context](../../../../ui/arkts-global-interface.md#ambiguous-ui-context). To avoid this, obtain the &gt; **PromptAction** object using the **getPromptAction** API in **UIContext** and then call the &gt; [openToast](arkts-arkui-promptaction-c.md#opentoast-1) API through this object. |
| [closeToast](arkts-arkui-closetoast-f.md#closetoast-1) | Closes the specified toast. &gt; **NOTE** &gt; &gt; Directly using **closeToast** can lead to the issue of &gt; [ambiguous UI context](../../../../ui/arkts-global-interface.md#ambiguous-ui-context). To avoid this, obtain the &gt; **PromptAction** object using the **getPromptAction** API in **UIContext** and then call the &gt; [closeToast](arkts-arkui-promptaction-c.md#closetoast-1) API through this object. |
| [showDialog](arkts-arkui-showdialog-f.md#showdialog-1) | Creates and displays a dialog box. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - This API is supported since API version 9 and deprecated since API version 18. You are advised to use [showDialog](arkts-apis-uicontext-promptaction.md#showdialog) instead. Before calling this API, you need to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object using the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) method in [UIContext](arkts-apis-uicontext-uicontext.md). Directly using **showDialog** can lead to the issue of [ambiguous UI context](../../ui/arkts-global-interface.md#ambiguous-ui-context). &gt; &gt; - Since API version 10, you can use the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) API in [UIContext](arkts-apis-uicontext-uicontext.md) to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object associated with the current UI context. |
| [showDialog](arkts-arkui-showdialog-f.md#showdialog-2) | Creates and displays a dialog box in the given settings. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; - This API is supported since API version 9 and deprecated since API version 18. You are advised to use [showDialog](arkts-apis-uicontext-promptaction.md#showdialog-1) instead. Before calling this API, you need to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object using the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) method in [UIContext](arkts-apis-uicontext-uicontext.md). Directly using **showDialog** can lead to the issue of [ambiguous UI context](../../ui/arkts-global-interface.md#ambiguous-ui-context). &gt; &gt; - Since API version 10, you can use the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) API in [UIContext](arkts-apis-uicontext-uicontext.md) to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object associated with the current UI context. |
| [openCustomDialog](arkts-arkui-opencustomdialog-f.md#opencustomdialog-1) | Opens a custom dialog box. This API uses a promise to return the result. &lt;!--Del--&gt;This API cannot be used in **ServiceExtension**.&lt;!--DelEnd--&gt; By default, the width of the dialog box in portrait mode is the width of the window where it is located minus the left and right margins (40 vp for 2-in-1 devices and 16 vp for other devices), and the maximum width is 400 vp. &gt; **NOTE** &gt; &gt; - This API is supported since API version 11 and deprecated since API version 18. You are advised to use [openCustomDialog](arkts-apis-uicontext-promptaction.md#opencustomdialog12-1) instead. Before calling this API, you need to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object using the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) method in [UIContext](arkts-apis-uicontext-uicontext.md). Directly using **openCustomDialog** can lead to the issue of [ambiguous UI context](../../ui/arkts-global-interface.md#ambiguous-ui-context). &gt; &gt; - Since API version 12, you can use the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) API in [UIContext](arkts-apis-uicontext-uicontext.md) to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object associated with the current UI context. |
| [closeCustomDialog](arkts-arkui-closecustomdialog-f.md#closecustomdialog-1) | Closes the specified custom dialog box. &gt; **NOTE** &gt; &gt; - This API is supported since API version 11 and deprecated since API version 18. You are advised to use [closeCustomDialog](arkts-apis-uicontext-promptaction.md#closecustomdialog12-1) instead. Before calling this API, you need to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object using the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) method in [UIContext](arkts-apis-uicontext-uicontext.md). Directly using **closeCustomDialog** can lead to the issue of [ambiguous UI context](../../ui/arkts-global-interface.md#ambiguous-ui-context). &gt; &gt; - Since API version 12, you can use the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) API in [UIContext](arkts-apis-uicontext-uicontext.md) to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object associated with the current UI context. |
| [showActionMenu](arkts-arkui-showactionmenu-f.md#showactionmenu-1) | Creates and displays an action menu. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - This API is supported since API version 9 and deprecated since API version 18. You are advised to use [showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu11) instead. Before calling this API, you need to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object using the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) method in [UIContext](arkts-apis-uicontext-uicontext.md). Directly using **showActionMenu** can lead to the issue of [ambiguous UI context](../../ui/arkts-global-interface.md#ambiguous-ui-context). &gt; &gt; - Since API version 11, you can use the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) API in [UIContext](arkts-apis-uicontext-uicontext.md) to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object associated with the current UI context. |
| [showActionMenu](arkts-arkui-showactionmenu-f.md#showactionmenu-2) | Creates and displays an action menu in the given settings. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; - This API is supported since API version 9 and deprecated since API version 18. You are advised to use [showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu) instead. Before calling this API, you need to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object using the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) method in [UIContext](arkts-apis-uicontext-uicontext.md). Directly using **showActionMenu** can lead to the issue of [ambiguous UI context](../../ui/arkts-global-interface.md#ambiguous-ui-context). &gt; &gt; - Since API version 10, you can use the [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction) API in [UIContext](arkts-apis-uicontext-uicontext.md) to obtain the [PromptAction](arkts-apis-uicontext-promptaction.md) object associated with the current UI context. |

### Classes

| Name | Description |
| --- | --- |
| [CommonController](arkts-arkui-commoncontroller-c.md) | Implements a common controller for managing components related to **promptAction**. |
| [DialogController](arkts-arkui-dialogcontroller-c.md) | Implements a custom dialog controller that inherits from [CommonController](#commoncontroller18). It can be used as a member variable of **UIContext** to display custom dialog boxes. For specific usage, see the examples for [openCustomDialogWithController](arkts-apis-uicontext-promptaction.md#opencustomdialogwithcontroller18) and [presentCustomDialog](arkts-apis-uicontext-promptaction.md#presentcustomdialog18). |

### Interfaces

| Name | Description |
| --- | --- |
| [ShowToastOptions](arkts-arkui-showtoastoptions-i.md) |  |
| [Button](arkts-arkui-button-i.md) | Describes the menu item button in the action menu. |
| [ShowDialogSuccessResponse](arkts-arkui-showdialogsuccessresponse-i.md) | Describes the dialog box response result. |
| [ShowDialogOptions](arkts-arkui-showdialogoptions-i.md) | Describes the options for showing the dialog box. |
| [BaseDialogOptions](arkts-arkui-basedialogoptions-i.md) | Defines the options of the dialog box. |
| [CustomDialogOptions](arkts-arkui-customdialogoptions-i.md) | Extends [BaseDialogOptions](#basedialogoptions11) to provide enhanced customization capabilities for the dialog box. |
| [DialogOptions](arkts-arkui-dialogoptions-i.md) | Extends [BaseDialogOptions](#basedialogoptions11) to provide enhanced customization capabilities for the dialog box. |
| [ActionMenuSuccessResponse](arkts-arkui-actionmenusuccessresponse-i.md) | Describes the action menu response result. |
| [ActionMenuOptions](arkts-arkui-actionmenuoptions-i.md) | Describes the options for showing the action menu. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ShowDialogOptions](arkts-arkui-showdialogoptions-i-sys.md) | Describes the options for showing the dialog box. |
| [BaseDialogOptions](arkts-arkui-basedialogoptions-i-sys.md) | Defines the options of the dialog box. |
| [ActionMenuOptions](arkts-arkui-actionmenuoptions-i-sys.md) | Describes the options for showing the action menu. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ToastShowMode](arkts-arkui-toastshowmode-e.md) | Enumerates display modes for toasts. By default, the toast is displayed within the application and supports display in subwindows. |
| [CommonState](arkts-arkui-commonstate-e.md) | Enumerates states of the custom dialog box. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ToastShowMode](arkts-arkui-toastshowmode-e-sys.md) | Enumerates display modes for toasts. By default, the toast is displayed within the application and supports display in subwindows. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [DialogOptionsCornerRadius](arkts-arkui-dialogoptionscornerradius-t.md) | Defines the allowed data types for specifying the background corner radius of a dialog box. |
| [DialogOptionsBorderWidth](arkts-arkui-dialogoptionsborderwidth-t.md) | Defines the allowed data types for specifying the background border width of a dialog box. |
| [DialogOptionsBorderColor](arkts-arkui-dialogoptionsbordercolor-t.md) | Defines the allowed data types for specifying the background border color of a dialog box. |
| [DialogOptionsBorderStyle](arkts-arkui-dialogoptionsborderstyle-t.md) | Defines the allowed data types for specifying the background border style of a dialog box. |
| [DialogOptionsShadow](arkts-arkui-dialogoptionsshadow-t.md) | Defines the allowed data types for specifying the background shadow of a dialog box. |

