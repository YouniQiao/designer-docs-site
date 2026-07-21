# promptAction

This module provides API for creating and displaying toasts, dialog boxes, and action menus.

> **NOTE**  
>  
> - This module cannot be used in the file declaration of the [UIAbility](../../apis-ability-kit/arkts-apis/arkts-app-ability-uiability.md). In  
> other words, the APIs of this module can be used only after a component instance is created; they cannot be called  
> in the lifecycle of the UIAbility.  
>  
> - The functionality of this module depends on UI context. This means that the APIs of this module cannot be used  
> where [the UI context is ambiguous](docroot://ui/arkts-global-interface.md#ambiguous-ui-context). For details, see  
> [UIContext](arkts-arkui-uicontext.md). It is recommended that you use the dialog box APIs provided by  
> **UIContext**<!--Del-->, except for UI-less scenarios such as  
> [ServiceExtensionAbility](docroot://application-models/serviceextensionability-sys.md)<!--DelEnd-->.

**Since:** 9

<!--Device-unnamed-declare namespace promptAction--><!--Device-unnamed-declare namespace promptAction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode, ImmersiveMode, LevelOrder } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [showToast](arkts-arkui-promptaction-showtoast-f.md#showtoast) | Creates and displays a toast. |
| [openToast](arkts-arkui-promptaction-opentoast-f.md#opentoast) | Shows a toast. This API uses a promise to return the toast ID. |
| [closeToast](arkts-arkui-promptaction-closetoast-f.md#closetoast) | Closes the specified toast. |
| [showDialog](arkts-arkui-promptaction-showdialog-f.md#showdialog) | Creates and displays a dialog box. This API uses an asynchronous callback to return the result. |
| [showDialog](arkts-arkui-promptaction-showdialog-f.md#showdialog-1) | Creates and displays a dialog box in the given settings. This API uses a promise to return the result. |
| [openCustomDialog](arkts-arkui-promptaction-opencustomdialog-f.md#opencustomdialog) | Opens a custom dialog box. This API uses a promise to return the result.  <!--Del-->This API cannot be used in **ServiceExtension**.<!--DelEnd-->  By default, the width of the dialog box in portrait mode is the width of the window where it is located minus the left and right margins (40 vp for 2-in-1 devices and 16 vp for other devices), and the maximum width is 400 vp. |
| [closeCustomDialog](arkts-arkui-promptaction-closecustomdialog-f.md#closecustomdialog) | Closes the specified custom dialog box. |
| [showActionMenu](arkts-arkui-promptaction-showactionmenu-f.md#showactionmenu) | Creates and displays an action menu. This API uses an asynchronous callback to return the result. |
| [showActionMenu](arkts-arkui-promptaction-showactionmenu-f.md#showactionmenu-1) | Creates and displays an action menu in the given settings. This API uses a promise to return the result. |

### Classes

| Name | Description |
| --- | --- |
| [CommonController](arkts-arkui-promptaction-commoncontroller-c.md) | Implements a common controller for managing components related to **promptAction**. |
| [DialogController](arkts-arkui-promptaction-dialogcontroller-c.md) | Implements a custom dialog controller that inherits from [CommonController](#commoncontroller18).  It can be used as a member variable of **UIContext** to display custom dialog boxes. For specific usage,see the examples for [openCustomDialogWithController](arkts-apis-uicontext-promptaction.md#opencustomdialogwithcontroller18)and [presentCustomDialog](arkts-apis-uicontext-promptaction.md#presentcustomdialog18). |

### Interfaces

| Name | Description |
| --- | --- |
| [ShowToastOptions](arkts-arkui-promptaction-showtoastoptions-i.md) |  |
| [Button](arkts-arkui-promptaction-button-i.md) | Describes the menu item button in the action menu. |
| [ShowDialogSuccessResponse](arkts-arkui-promptaction-showdialogsuccessresponse-i.md) | Describes the dialog box response result. |
| [ShowDialogOptions](arkts-arkui-promptaction-showdialogoptions-i.md) | Describes the options for showing the dialog box. |
| [BaseDialogOptions](arkts-arkui-promptaction-basedialogoptions-i.md) | Defines the options of the dialog box. |
| [CustomDialogOptions](arkts-arkui-promptaction-customdialogoptions-i.md) | Extends [BaseDialogOptions](#basedialogoptions11) to provide enhanced customization capabilities for the dialog box. |
| [DialogOptions](arkts-arkui-promptaction-dialogoptions-i.md) | Extends [BaseDialogOptions](#basedialogoptions11) to provide enhanced customization capabilities for the dialog box. |
| [ActionMenuSuccessResponse](arkts-arkui-promptaction-actionmenusuccessresponse-i.md) | Describes the action menu response result. |
| [ActionMenuOptions](arkts-arkui-promptaction-actionmenuoptions-i.md) | Describes the options for showing the action menu. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ShowDialogOptions](arkts-arkui-promptaction-showdialogoptions-i-sys.md) | Describes the options for showing the dialog box. |
| [BaseDialogOptions](arkts-arkui-promptaction-basedialogoptions-i-sys.md) | Defines the options of the dialog box. |
| [ActionMenuOptions](arkts-arkui-promptaction-actionmenuoptions-i-sys.md) | Describes the options for showing the action menu. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ToastShowMode](arkts-arkui-promptaction-toastshowmode-e.md) | Enumerates display modes for toasts. By default, the toast is displayed within the application and supports display in subwindows. |
| [CommonState](arkts-arkui-promptaction-commonstate-e.md) | Enumerates states of the custom dialog box. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ToastShowMode](arkts-arkui-promptaction-toastshowmode-e-sys.md) | Enumerates display modes for toasts. By default, the toast is displayed within the application and supports display in subwindows. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [DialogOptionsCornerRadius](arkts-arkui-promptaction-dialogoptionscornerradius-t.md) | Defines the allowed data types for specifying the background corner radius of a dialog box. |
| [DialogOptionsBorderWidth](arkts-arkui-promptaction-dialogoptionsborderwidth-t.md) | Defines the allowed data types for specifying the background border width of a dialog box. |
| [DialogOptionsBorderColor](arkts-arkui-promptaction-dialogoptionsbordercolor-t.md) | Defines the allowed data types for specifying the background border color of a dialog box. |
| [DialogOptionsBorderStyle](arkts-arkui-promptaction-dialogoptionsborderstyle-t.md) | Defines the allowed data types for specifying the background border style of a dialog box. |
| [DialogOptionsShadow](arkts-arkui-promptaction-dialogoptionsshadow-t.md) | Defines the allowed data types for specifying the background shadow of a dialog box. |

