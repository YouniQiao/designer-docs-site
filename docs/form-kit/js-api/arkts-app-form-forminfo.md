# @ohos.app.form.formInfo

The **formInfo** module provides types and enums related to the widget information and state.

> **NOTE**

> - This topic describes only system APIs provided by the module. For details about its public APIs, see
> [@ohos.app.form.formInfo (formInfo)](arkts-app-form-forminfo.md).

**Since:** 9

**System capability:** SystemCapability.Ability.Form

## Modules to Import

```TypeScript
import { formInfo } from '@kit.FormKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [FormInfo](arkts-form-forminfo-i.md) | Provides information about a form. |
| [FormInfoFilter](arkts-form-forminfofilter-i.md) | The optional options used as filters to askgetFormsInfo to return formInfos from only forms that match the options. |
| [FormStateInfo](arkts-form-formstateinfo-i.md) | Provides state information about a form. |
| [OverflowInfo](arkts-form-overflowinfo-i.md) | Provides OverflowInfo about funInteraction or sceneAnimation form |
| [Rect](arkts-form-rect-i.md) | Indicates rectangle, unit is vp. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ChangeSceneAnimationStateRequest](arkts-form-changesceneanimationstaterequest-i-sys.md) | ChangeSceneAnimationStateRequest |
| [FormCustomConfig](arkts-form-formcustomconfig-i-sys.md) | FormCustomConfig |
| [FormInfo](arkts-form-forminfo-i-sys.md) | Provides information about a form. |
| [FormInfoFilter](arkts-form-forminfofilter-i-sys.md) | The optional options used as filters to askgetFormsInfo to return formInfos from only forms that match the options. |
| [FormProviderFilter](arkts-form-formproviderfilter-i-sys.md) | Information about a running form. |
| [FunInteractionParams](arkts-form-funinteractionparams-i-sys.md) | The fun interaction form params. |
| [OverflowRequest](arkts-form-overflowrequest-i-sys.md) | Provides OverflowRequest about request/cancel form's overflow |
| [PublishFormCrossBundleInfo](arkts-form-publishformcrossbundleinfo-i-sys.md) | PublishFormCrossBundleInfo |
| [PublishFormResult](arkts-form-publishformresult-i-sys.md) | The result of publish form. |
| [RunningFormInfo](arkts-form-runningforminfo-i-sys.md) | The class of a running form information. |
| [SceneAnimationParams](arkts-form-sceneanimationparams-i-sys.md) | The scene animation form params. |
| [TemplateFormDetailInfo](arkts-form-templateformdetailinfo-i-sys.md) | TemplateFormDetailInfo |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ColorMode](arkts-form-colormode-e.md) | Color mode. |
| [FormDimension](arkts-form-formdimension-e.md) | Defines the FormDimension enum. |
| [FormLocation](arkts-form-formlocation-e.md) | Enumerates the widget locations. |
| [FormParam](arkts-form-formparam-e.md) | Enumerates widget parameters. |
| [FormShape](arkts-form-formshape-e.md) | Defines the FormShape enum. |
| [FormState](arkts-form-formstate-e.md) | Provides state about a form. |
| [FormType](arkts-form-formtype-e.md) | Type of form. |
| [FormUpdateReason](arkts-form-formupdatereason-e.md) | Form update reason. |
| [LaunchReason](arkts-form-launchreason-e.md) | Indicates the launch reason of a form. |
| [VisibilityType](arkts-form-visibilitytype-e.md) | The visibility of a form. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [FormLocation](arkts-form-formlocation-e-sys.md) | Enumerates the widget locations. |
| [FormParam](arkts-form-formparam-e-sys.md) | Enumerates widget parameters. |
| [FormUsageState](arkts-form-formusagestate-e-sys.md) | Enumerates the usage statuses of a widget. |
| [PublishFormErrorCode](arkts-form-publishformerrorcode-e-sys.md) | Enumerates the result codes that may be used for the operation of adding a widget to the home screen. |
| [RenderingMode](arkts-form-renderingmode-e-sys.md) | Enumerates the rendering modes supported by the widget. |
| [SceneAnimationTriggerType](arkts-form-sceneanimationtriggertype-e-sys.md) | The trigger type of the scene animation. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [DeleteFormsCallback](arkts-form-deleteformscallback-t-sys.md) | callback for deleting the forms. |
| [GetFormRectInfoCallback](arkts-form-getformrectinfocallback-t-sys.md) | Get form rect info callback |
| [GetLiveFormStatusCallback](arkts-form-getliveformstatuscallback-t-sys.md) | Get live form status info callback |
| [GetWantParamsCallback](arkts-form-getwantparamscallback-t-sys.md) | Get want parameters callback. |
| [PublishFormCrossBundleControlCallback](arkts-form-publishformcrossbundlecontrolcallback-t-sys.md) | publish form cross bundle control callback. |
| [TemplateFormDetailInfoCallback](arkts-form-templateformdetailinfocallback-t-sys.md) | template form detail info callback. |
| [UpdateFormsConfigCallback](arkts-form-updateformsconfigcallback-t-sys.md) | Callback for updating the forms. |
<!--DelEnd-->

