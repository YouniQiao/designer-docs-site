# @ohos.app.form.formInfo

The **formInfo** module provides types and enums related to the widget information and state. > **NOTE** > - This topic describes only system APIs provided by the module. For details about its public APIs, see > [@ohos.app.form.formInfo (formInfo)]{@link @ohos.app.form.formInfo:formInfo}.

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
| <!--DelRow-->[ChangeSceneAnimationStateRequest](arkts-forminfo-changesceneanimationstaterequest-i-sys.md) | ChangeSceneAnimationStateRequest |
| <!--DelRow-->[FormCustomConfig](arkts-forminfo-formcustomconfig-i-sys.md) | FormCustomConfig |
| [FormInfo](arkts-forminfo-forminfo-i.md) | Provides information about a form. |
| [FormInfoFilter](arkts-forminfo-forminfofilter-i.md) | The optional options used as filters to ask getFormsInfo to return formInfos from only forms that match the options. |
| <!--DelRow-->[FormProviderFilter](arkts-forminfo-formproviderfilter-i-sys.md) | Information about a running form. |
| [FormStateInfo](arkts-forminfo-formstateinfo-i.md) | Provides state information about a form. |
| <!--DelRow-->[FunInteractionParams](arkts-forminfo-funinteractionparams-i-sys.md) | The fun interaction form params. |
| [OverflowInfo](arkts-forminfo-overflowinfo-i.md) | Provides OverflowInfo about funInteraction or sceneAnimation form |
| <!--DelRow-->[OverflowRequest](arkts-forminfo-overflowrequest-i-sys.md) | Provides OverflowRequest about request/cancel form's overflow |
| <!--DelRow-->[PublishFormCrossBundleInfo](arkts-forminfo-publishformcrossbundleinfo-i-sys.md) | PublishFormCrossBundleInfo |
| <!--DelRow-->[PublishFormResult](arkts-forminfo-publishformresult-i-sys.md) | The result of publish form. |
| [Rect](arkts-forminfo-rect-i.md) | Indicates rectangle, unit is vp. |
| <!--DelRow-->[RunningFormInfo](arkts-forminfo-runningforminfo-i-sys.md) | The class of a running form information. |
| <!--DelRow-->[SceneAnimationParams](arkts-forminfo-sceneanimationparams-i-sys.md) | The scene animation form params. |
| <!--DelRow-->[TemplateFormDetailInfo](arkts-forminfo-templateformdetailinfo-i-sys.md) | TemplateFormDetailInfo |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[DeleteFormsCallback](arkts-forminfo-deleteformscallback-t-sys.md) | callback for deleting the forms. |
| <!--DelRow-->[GetFormRectInfoCallback](arkts-forminfo-getformrectinfocallback-t-sys.md) | Get form rect info callback |
| <!--DelRow-->[GetLiveFormStatusCallback](arkts-forminfo-getliveformstatuscallback-t-sys.md) | Get live form status info callback |
| <!--DelRow-->[GetWantParamsCallback](arkts-forminfo-getwantparamscallback-t-sys.md) | Get want parameters callback. |
| <!--DelRow-->[PublishFormCrossBundleControlCallback](arkts-forminfo-publishformcrossbundlecontrolcallback-t-sys.md) | publish form cross bundle control callback. |
| <!--DelRow-->[TemplateFormDetailInfoCallback](arkts-forminfo-templateformdetailinfocallback-t-sys.md) | template form detail info callback. |
| <!--DelRow-->[UpdateFormsConfigCallback](arkts-forminfo-updateformsconfigcallback-t-sys.md) | Callback for updating the forms. |

### Enums

| Name | Description |
| --- | --- |
| [ColorMode](arkts-forminfo-colormode-e.md) | Color mode. |
| [FormDimension](arkts-forminfo-formdimension-e.md) | Defines the FormDimension enum. |
| <!--DelRow-->[FormLocation](arkts-forminfo-formlocation-e-sys.md) | Enumerates the widget locations. |
| [FormParam](arkts-forminfo-formparam-e.md) | Enumerates widget parameters. |
| [FormShape](arkts-forminfo-formshape-e.md) | Defines the FormShape enum. |
| [FormState](arkts-forminfo-formstate-e.md) | Provides state about a form. |
| [FormType](arkts-forminfo-formtype-e.md) | Type of form. |
| [FormUpdateReason](arkts-forminfo-formupdatereason-e.md) | Form update reason. |
| <!--DelRow-->[FormUsageState](arkts-forminfo-formusagestate-e-sys.md) | Enumerates the usage statuses of a widget. |
| [LaunchReason](arkts-forminfo-launchreason-e.md) | Indicates the launch reason of a form. |
| <!--DelRow-->[PublishFormErrorCode](arkts-forminfo-publishformerrorcode-e-sys.md) | Enumerates the result codes that may be used for the operation of adding a widget to the home screen. |
| <!--DelRow-->[RenderingMode](arkts-forminfo-renderingmode-e-sys.md) | Enumerates the rendering modes supported by the widget. |
| <!--DelRow-->[SceneAnimationTriggerType](arkts-forminfo-sceneanimationtriggertype-e-sys.md) | The trigger type of the scene animation. |
| [VisibilityType](arkts-forminfo-visibilitytype-e.md) | The visibility of a form. |

