# @ohos.app.form.formHost

The **formHost** module provides APIs related to the widget host, which is an application that displays the widget content and controls the position where the widget is displayed. You can use the APIs to delete, release, and update widgets installed by the same user, and obtain widget information and status.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { formHost } from '@kit.FormKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[acquireFormData](arkts-formhost-acquireformdata-f-sys.md#acquireFormData-1) | Requests data from the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[acquireFormData](arkts-formhost-acquireformdata-f-sys.md#acquireFormData-2) | Requests data from the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[acquireFormState](arkts-formhost-acquireformstate-f-sys.md#acquireFormState-1) | Obtains the widget state. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[acquireFormState](arkts-formhost-acquireformstate-f-sys.md#acquireFormState-2) | Obtains the widget state. This API uses a promise to return the result. |
| <!--DelRow-->[addForm](arkts-formhost-addform-f-sys.md#addForm-1) | Add a form. You can use this method to create a theme form. |
| <!--DelRow-->[castToNormalForm](arkts-formhost-casttonormalform-f-sys.md#castToNormalForm-1) | Converts a temporary widget to a normal one. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[castToNormalForm](arkts-formhost-casttonormalform-f-sys.md#castToNormalForm-2) | Converts a temporary widget to a normal one. This API uses a promise to return the result. |
| <!--DelRow-->[clearRouterProxy](arkts-formhost-clearrouterproxy-f-sys.md#clearRouterProxy-1) | Clears the router proxy set for widgets. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[clearRouterProxy](arkts-formhost-clearrouterproxy-f-sys.md#clearRouterProxy-2) | Clears the router proxy set for widgets. This API uses a promise to return the result. |
| <!--DelRow-->[deleteForm](arkts-formhost-deleteform-f-sys.md#deleteForm-1) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[deleteForm](arkts-formhost-deleteform-f-sys.md#deleteForm-2) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses a promise to return the result. |
| <!--DelRow-->[deleteInvalidForms](arkts-formhost-deleteinvalidforms-f-sys.md#deleteInvalidForms-1) | Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[deleteInvalidForms](arkts-formhost-deleteinvalidforms-f-sys.md#deleteInvalidForms-2) | Deletes invalid widgets from the list. This API uses a promise to return the result. |
| <!--DelRow-->[disableFormsUpdate](arkts-formhost-disableformsupdate-f-sys.md#disableFormsUpdate-1) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive updates from the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[disableFormsUpdate](arkts-formhost-disableformsupdate-f-sys.md#disableFormsUpdate-2) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive updates from the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[enableFormsUpdate](arkts-formhost-enableformsupdate-f-sys.md#enableFormsUpdate-1) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[enableFormsUpdate](arkts-formhost-enableformsupdate-f-sys.md#enableFormsUpdate-2) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[getAllFormsInfo](arkts-formhost-getallformsinfo-f-sys.md#getAllFormsInfo-1) | Obtains the widget information provided by all applications on the device (excluding template widgets). This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[getAllFormsInfo](arkts-formhost-getallformsinfo-f-sys.md#getAllFormsInfo-2) | Obtains the widget information provided by all applications on the device (excluding template widgets). This API uses a promise to return the result. |
| <!--DelRow-->[getAllTemplateFormsInfo](arkts-formhost-getalltemplateformsinfo-f-sys.md#getAllTemplateFormsInfo-1) | Obtains the template widget information provided by all applications on the device. This API uses a promise to return the result. |
| <!--DelRow-->[getFormIdsByFormLocation](arkts-formhost-getformidsbyformlocation-f-sys.md#getFormIdsByFormLocation-1) | Obtains the list of widget IDs at a specified location on the device. This API uses a promise to return the result. |
| <!--DelRow-->[getFormsInfo](arkts-formhost-getformsinfo-f-sys.md#getFormsInfo-1) | Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[getFormsInfo](arkts-formhost-getformsinfo-f-sys.md#getFormsInfo-2) | Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[getFormsInfo](arkts-formhost-getformsinfo-f-sys.md#getFormsInfo-3) | Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses a promise to return the result. |
| <!--DelRow-->[getFormsInfo](arkts-formhost-getformsinfo-f-sys.md#getFormsInfo-4) | Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses a promise to return the result. |
| <!--DelRow-->[getTemplateFormsInfo](arkts-formhost-gettemplateformsinfo-f-sys.md#getTemplateFormsInfo-1) | Obtains the template widget information provided by a specified application on the device. This API uses a promise to return the result. |
| <!--DelRow-->[isSystemReady](arkts-formhost-issystemready-f-sys.md#isSystemReady-1) | Checks whether the system is ready. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[isSystemReady](arkts-formhost-issystemready-f-sys.md#isSystemReady-2) | Checks whether the system is ready. This API uses a promise to return the result. |
| <!--DelRow-->[notifyFormsEnableUpdate](arkts-formhost-notifyformsenableupdate-f-sys.md#notifyFormsEnableUpdate-1) | Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyFormsEnableUpdate](arkts-formhost-notifyformsenableupdate-f-sys.md#notifyFormsEnableUpdate-2) | Instructs the widgets to enable or disable updates. This API uses a promise to return the result. |
| <!--DelRow-->[notifyFormsPrivacyProtected](arkts-formhost-notifyformsprivacyprotected-f-sys.md#notifyFormsPrivacyProtected-1) | Notifies that the privacy protection status of the specified widgets changes. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyFormsPrivacyProtected](arkts-formhost-notifyformsprivacyprotected-f-sys.md#notifyFormsPrivacyProtected-2) | Notifies that the privacy protection status of the specified widgets changes. This API uses a promise to return the result. |
| <!--DelRow-->[notifyFormsVisible](arkts-formhost-notifyformsvisible-f-sys.md#notifyFormsVisible-1) | Instructs the widgets to make themselves visible. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyFormsVisible](arkts-formhost-notifyformsvisible-f-sys.md#notifyFormsVisible-2) | Instructs the widgets to make themselves visible. This API uses a promise to return the result. |
| <!--DelRow-->[notifyInvisibleForms](arkts-formhost-notifyinvisibleforms-f-sys.md#notifyInvisibleForms-1) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyInvisibleForms](arkts-formhost-notifyinvisibleforms-f-sys.md#notifyInvisibleForms-2) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[notifyVisibleForms](arkts-formhost-notifyvisibleforms-f-sys.md#notifyVisibleForms-1) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyVisibleForms](arkts-formhost-notifyvisibleforms-f-sys.md#notifyVisibleForms-2) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[off](arkts-formhost-off-f-sys.md#off-1) | Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled. |
| <!--DelRow-->[off](arkts-formhost-off-f-sys.md#off-2) | Unsubscribes from the interactive widget animation request event. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[off](arkts-formhost-off-f-sys.md#off-3) | Unsubscribes from the event of switching the interactive widget state. An interactive widget can be in the active or inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active state, the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement interactive widget animations. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[off](arkts-formhost-off-f-sys.md#off-4) | Unsubscribes from the event of requesting widget position and dimension. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[off](arkts-formhost-off-f-sys.md#off-5) | Cancels Listening to the event of get live form status. |
| <!--DelRow-->[offChangeSceneAnimationState](arkts-formhost-offchangesceneanimationstate-f-sys.md#offChangeSceneAnimationState-1) | Cancels listening to the event of change scene animation state. You can use this method to cancel listening to the event of change scene animation state. |
| <!--DelRow-->[offDeleteFormsCallback](arkts-formhost-offdeleteformscallback-f-sys.md#offDeleteFormsCallback-1) | Unregister the callback for deleting forms. |
| <!--DelRow-->[offFormOverflow](arkts-formhost-offformoverflow-f-sys.md#offFormOverflow-1) | Cancels listening to the event of formOverflow. You can use this method to cancel listening to the event of formOverflow. |
| <!--DelRow-->[offFormUninstall](arkts-formhost-offformuninstall-f-sys.md#offFormUninstall-1) | Cancels listening to the event of uninstall form. You can use this method to cancel listening to the event of uninstall form. |
| <!--DelRow-->[offGetFormRect](arkts-formhost-offgetformrect-f-sys.md#offGetFormRect-1) | Cancels listening to the event of get form rect. You can use this method to cancel listening to the event of get form rect. |
| <!--DelRow-->[offGetLiveFormStatus](arkts-formhost-offgetliveformstatus-f-sys.md#offGetLiveFormStatus-1) | Cancels Listening to the event of get live form status. |
| <!--DelRow-->[offGetWantParamsCallback](arkts-formhost-offgetwantparamscallback-f-sys.md#offGetWantParamsCallback-1) | Unregister callback of getting the want parameters of the form. |
| <!--DelRow-->[offTemplateFormDetailInfoChange](arkts-formhost-offtemplateformdetailinfochange-f-sys.md#offTemplateFormDetailInfoChange-1) | Unsubscribes from changes in the static configuration information of template widgets. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[offUpdateFormsConfigCallback](arkts-formhost-offupdateformsconfigcallback-f-sys.md#offUpdateFormsConfigCallback-1) | Unregister the callback for updating form config. |
| <!--DelRow-->[on](arkts-formhost-on-f-sys.md#on-1) | Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled. |
| <!--DelRow-->[on](arkts-formhost-on-f-sys.md#on-2) | Subscribes to the interactive widget animation request event. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[on](arkts-formhost-on-f-sys.md#on-3) | Subscribes to the event of switching the interactive widget state. An interactive widget can be in the active or inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active state, the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement interactive widget animations. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[on](arkts-formhost-on-f-sys.md#on-4) | Subscribes to the event of requesting widget position and dimension. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[on](arkts-formhost-on-f-sys.md#on-5) | Listens to the event of get live form status. |
| <!--DelRow-->[onChangeSceneAnimationState](arkts-formhost-onchangesceneanimationstate-f-sys.md#onChangeSceneAnimationState-1) | Listens to the event of change scene animation state. You can use this method to listen to the event of change scene animation state. |
| <!--DelRow-->[onDeleteFormsCallback](arkts-formhost-ondeleteformscallback-f-sys.md#onDeleteFormsCallback-1) | Register the callback for deleting forms. |
| <!--DelRow-->[onFormOverflow](arkts-formhost-onformoverflow-f-sys.md#onFormOverflow-1) | Listens to the event of formOverflow. You can use this method to listen to the event of formOverflow. |
| <!--DelRow-->[onFormUninstall](arkts-formhost-onformuninstall-f-sys.md#onFormUninstall-1) | Listens to the event of uninstall form. You can use this method to listen to the event of uninstall form. |
| <!--DelRow-->[onGetFormRect](arkts-formhost-ongetformrect-f-sys.md#onGetFormRect-1) | Listens to the event of get form rect. You can use this method to listen to the event of get form rect. |
| <!--DelRow-->[onGetLiveFormStatus](arkts-formhost-ongetliveformstatus-f-sys.md#onGetLiveFormStatus-1) | Listens to the event of get live form status. |
| <!--DelRow-->[onGetWantParamsCallback](arkts-formhost-ongetwantparamscallback-f-sys.md#onGetWantParamsCallback-1) | Register callback of getting the want parameters of the form. |
| <!--DelRow-->[onTemplateFormDetailInfoChange](arkts-formhost-ontemplateformdetailinfochange-f-sys.md#onTemplateFormDetailInfoChange-1) | Subscribes to changes in the static configuration information of template widgets. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[onUpdateFormsConfigCallback](arkts-formhost-onupdateformsconfigcallback-f-sys.md#onUpdateFormsConfigCallback-1) | Register the callback for updating form config. |
| <!--DelRow-->[recoverForms](arkts-formhost-recoverforms-f-sys.md#recoverForms-1) | Recovers recycled widgets and updates their status to non-recyclable, or updates the status of widgets to non- recyclable if the widgets are not recycled. This API uses a promise to return the result. |
| <!--DelRow-->[recoverForms](arkts-formhost-recoverforms-f-sys.md#recoverForms-2) | Recovers widgets. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[recycleForms](arkts-formhost-recycleforms-f-sys.md#recycleForms-1) | Recycles widgets, that is, reclaiming widget memory. This API uses a promise to return the result. |
| <!--DelRow-->[releaseForm](arkts-formhost-releaseform-f-sys.md#releaseForm-1) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager still retains the widget cache and storage information. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[releaseForm](arkts-formhost-releaseform-f-sys.md#releaseForm-2) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[releaseForm](arkts-formhost-releaseform-f-sys.md#releaseForm-3) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses a promise to return the result. |
| <!--DelRow-->[requestForm](arkts-formhost-requestform-f-sys.md#requestForm-1) | Requests a widget update. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[requestForm](arkts-formhost-requestform-f-sys.md#requestForm-2) | Requests a widget update. This API uses a promise to return the result. |
| <!--DelRow-->[requestFormWithParams](arkts-formhost-requestformwithparams-f-sys.md#requestFormWithParams-1) | Carries parameters to request a widget update. This API uses a promise to return the result. |
| <!--DelRow-->[setFormsRecyclable](arkts-formhost-setformsrecyclable-f-sys.md#setFormsRecyclable-1) | Sets widgets to be recyclable. This API uses a promise to return the result. |
| <!--DelRow-->[setFormsRecyclable](arkts-formhost-setformsrecyclable-f-sys.md#setFormsRecyclable-2) | Sets widgets to be recyclable. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[setPublishFormResult](arkts-formhost-setpublishformresult-f-sys.md#setPublishFormResult-1) | Sets the result for the operation of adding a widget to the home screen. |
| <!--DelRow-->[setRouterProxy](arkts-formhost-setrouterproxy-f-sys.md#setRouterProxy-1) | Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses an asynchronous callback to return the result. > **NOTE** > > Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework > checks whether the destination is proper and whether the widget has the redirection permission, and then > triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured, > in the case of router-based redirection, the widget framework does not trigger redirection for the widget. > - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect. |
| <!--DelRow-->[setRouterProxy](arkts-formhost-setrouterproxy-f-sys.md#setRouterProxy-2) | Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses a promise to return the result. This API uses a promise to return the result. > **NOTE** > > - Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework > checks whether the destination is proper and whether the widget has the redirection permission, and then > triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured, > in the case of router-based redirection, the widget framework does not trigger redirection for the widget. > > - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect. |
| <!--DelRow-->[shareForm](arkts-formhost-shareform-f-sys.md#shareForm-1) | Shares a specified widget with a remote device. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[shareForm](arkts-formhost-shareform-f-sys.md#shareForm-2) | Shares a specified widget with a remote device. This API uses a promise to return the result. |
| <!--DelRow-->[updateFormLocation](arkts-formhost-updateformlocation-f-sys.md#updateFormLocation-1) | Updates the widget location. |
| <!--DelRow-->[updateFormLockedState](arkts-formhost-updateformlockedstate-f-sys.md#updateFormLockedState-1) | Notifies the update of the widget lock state. This API uses a promise to return the result. If an application is locked, its widget will also be locked and masked in a locked style. To use the widget, you need to enter the password set for the widget. |
| <!--DelRow-->[updateFormSize](arkts-formhost-updateformsize-f-sys.md#updateFormSize-1) | Updates the size of the widget. |

