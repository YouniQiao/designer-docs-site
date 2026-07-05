# @ohos.app.form.formProvider

The **formProvider** module provides APIs to obtain widget information, update widgets, and set the update time.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

## 导入模块

```TypeScript
import { formProvider } from '@kit.FormKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[activateSceneAnimation](arkts-formprovider-activatesceneanimation-f-sys.md#activateSceneAnimation-1) | Requests to activate a widget. This API takes effect only for [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a promise to return the result. An interactive widget can be in the active or inactive state. In the inactive state, the widget is the same as a common widget. In the active state, the widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement animations. |
| [cancelOverflow](arkts-formprovider-canceloverflow-f.md#cancelOverflow-1) | Cancels an animation. This API takes effect only for [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a promise to return the result. |
| [closeFormEditAbility](arkts-formprovider-closeformeditability-f.md#closeFormEditAbility-1) | Closes the widget editing page. |
| <!--DelRow-->[deactivateSceneAnimation](arkts-formprovider-deactivatesceneanimation-f-sys.md#deactivateSceneAnimation-1) | Requests to deactivate a widget. This API takes effect only for [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a promise to return the result. An interactive widget can be in the active or inactive state. In the inactive state, the widget is the same as a common widget. In the active state, the widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement animations. |
| [getFormRect](arkts-formprovider-getformrect-f.md#getFormRect-1) | Obtains the position and dimension of a widget. This API uses a promise to return the result. |
| [getFormsInfo](arkts-formprovider-getformsinfo-f.md#getFormsInfo-1) | Obtains the application's widget information that meets a filter criterion on the device. This API uses an asynchronous callback to return the result. |
| [getFormsInfo](arkts-formprovider-getformsinfo-f.md#getFormsInfo-2) | Obtains the application's widget information on the device. This API uses an asynchronous callback to return the result. |
| [getFormsInfo](arkts-formprovider-getformsinfo-f.md#getFormsInfo-3) | Obtains information about widgets that meet the criteria of the current application. This API uses a promise to return the result. |
| [getPublishedFormInfoById](arkts-formprovider-getpublishedforminfobyid-f.md#getPublishedFormInfoById-1) | Obtains the information of the widget that has been added to the home screen on the device. This API uses a promise to return the result. > **NOTE** > > This field is supported since API version 18 and deprecated since API version 20. You are advised to use > [getPublishedRunningFormInfoById]{@link formProvider.getPublishedRunningFormInfoById} instead. |
| [getPublishedFormInfos](arkts-formprovider-getpublishedforminfos-f.md#getPublishedFormInfos-1) | Obtains the information of all widgets that have been added to the home screen on the device. This API uses a promise to return the result. > **NOTE** > > This field is supported since API version 18 and deprecated since API version 20. You are advised to use > [getPublishedRunningFormInfos]{@link formProvider.getPublishedRunningFormInfos} instead. |
| [getPublishedRunningFormInfoById](arkts-formprovider-getpublishedrunningforminfobyid-f.md#getPublishedRunningFormInfoById-1) | Obtains the information of a specified widget that has been added to the home screen. This API uses a promise to return the result. |
| [getPublishedRunningFormInfos](arkts-formprovider-getpublishedrunningforminfos-f.md#getPublishedRunningFormInfos-1) | Obtains information about all widgets that have been added to the home screen. This API uses a promise to return the result. |
| <!--DelRow-->[isRequestPublishFormSupported](arkts-formprovider-isrequestpublishformsupported-f-sys.md#isRequestPublishFormSupported-1) | Checks whether a widget can be added to the widget host. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[isRequestPublishFormSupported](arkts-formprovider-isrequestpublishformsupported-f-sys.md#isRequestPublishFormSupported-2) | Checks whether a widget can be added to the widget host. This API uses a promise to return the result. |
| <!--DelRow-->[offPublishFormCrossBundleControl](arkts-formprovider-offpublishformcrossbundlecontrol-f-sys.md#offPublishFormCrossBundleControl-1) | Unsubscribes from controls on cross-bundle widget addition to the home screen. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[onPublishFormCrossBundleControl](arkts-formprovider-onpublishformcrossbundlecontrol-f-sys.md#onPublishFormCrossBundleControl-1) | Subscribes to controls on cross-bundle widget addition to the home screen. This API uses an asynchronous callback to return the result. |
| [openFormEditAbility](arkts-formprovider-openformeditability-f.md#openFormEditAbility-1) | Opens the widget editing page. |
| [openFormManager](arkts-formprovider-openformmanager-f.md#openFormManager-1) | Opens the Widget Manager page of the current application. |
| <!--DelRow-->[openFormManagerCrossBundle](arkts-formprovider-openformmanagercrossbundle-f-sys.md#openFormManagerCrossBundle-1) | Open the view of forms belonging to the specified bundle. Client to communication with FormManagerService. |
| [reloadAllForms](arkts-formprovider-reloadallforms-f.md#reloadAllForms-1) | Reloads all widgets. Invoked in the main process of the application, this API notifies the FormExtension process to perform batch updates of all widgets added to the current application. It can only be called within a [UIAbility]{@link @ohos.app.ability.UIAbility} and uses a promise to return the result. |
| [reloadForms](arkts-formprovider-reloadforms-f.md#reloadForms-1) | Reloads widgets. For widgets with the same **moduleName**, **abilityName**, and **formName** of the current application, each widget has a different widget ID after being added to the home screen for multiple times. Widget providers can use this API to batch update widgets that have different IDs but share the same **moduleName**, **abilityName**, and **formName**. Invoked in the main process of the application, this API notifies the FormExtension process to perform batch updates. It can only be called within a [UIAbility]{@link @ohos.app.ability.UIAbility} and uses a promise to return the result. |
| [requestOverflow](arkts-formprovider-requestoverflow-f.md#requestOverflow-1) | Requests an animation. This API takes effect only for [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a promise to return the result. > **NOTE** > |
| <!--DelRow-->[requestPublishForm](arkts-formprovider-requestpublishform-f-sys.md#requestPublishForm-1) | Requests to publish a widget to the widget host (usually the home screen). This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[requestPublishForm](arkts-formprovider-requestpublishform-f-sys.md#requestPublishForm-2) | Requests to publish a widget to the widget host (usually the home screen). This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[requestPublishForm](arkts-formprovider-requestpublishform-f-sys.md#requestPublishForm-3) | Requests to publish a widget to the widget host (usually the home screen). This API uses a promise to return the result. |
| [setFormNextRefreshTime](arkts-formprovider-setformnextrefreshtime-f.md#setFormNextRefreshTime-1) | Sets the next refresh time for a widget. This API uses an asynchronous callback to return the result. |
| [setFormNextRefreshTime](arkts-formprovider-setformnextrefreshtime-f.md#setFormNextRefreshTime-2) | Sets the next refresh time for a widget. This API uses a promise to return the result. |
| [updateForm](arkts-formprovider-updateform-f.md#updateForm-1) | Updates a widget. This API uses an asynchronous callback to return the result. > **NOTE** > > Starting from API version 20, when widget refresh data is updated via shared memory, the total size of the > refreshed data must not exceed 10 MB, and the number of refreshed images must not exceed 20. For API version 19 > and earlier versions, the upper limit for image files is 5, with a per-image memory limit of 2 MB. Any images > that exceed these limits will display abnormally. |
| [updateForm](arkts-formprovider-updateform-f.md#updateForm-2) | Updates a widget. This API uses a promise to return the result. > **NOTE** > > Starting from API version 20, when widget refresh data is updated via shared memory, the total size of the > refreshed data must not exceed 10 MB, and the number of refreshed images must not exceed 20. For API version 19 > and earlier versions, the upper limit for image files is 5, with a per-image memory limit of 2 MB. Any images > that exceed these limits will display abnormally. |
| <!--DelRow-->[updateTemplateFormDetailInfo](arkts-formprovider-updatetemplateformdetailinfo-f-sys.md#updateTemplateFormDetailInfo-1) | Updates the static configuration information of a specified template widget on the current device. This API uses a promise to return the result. |

