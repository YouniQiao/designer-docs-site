# @ohos.app.form.formHost

The **formHost** module provides APIs related to the widget host, which is an application that displays the widget
content and controls the position where the widget is displayed. You can use the APIs to delete, release, and update
widgets installed by the same user, and obtain widget information and status.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { formHost } from '@kit.FormKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [acquireFormData](arkts-form-acquireformdata-f-sys.md#acquireformdata-1) | Requests data from the widget provider. This API uses an asynchronous callback to return the result. |
| [acquireFormData](arkts-form-acquireformdata-f-sys.md#acquireformdata-2) | Requests data from the widget provider. This API uses a promise to return the result. |
| [acquireFormState](arkts-form-acquireformstate-f-sys.md#acquireformstate-1) | Obtains the widget state. This API uses an asynchronous callback to return the result. |
| [acquireFormState](arkts-form-acquireformstate-f-sys.md#acquireformstate-2) | Obtains the widget state. This API uses a promise to return the result. |
| [addForm](arkts-form-addform-f-sys.md#addform-1) | Add a form.You can use this method to create a theme form. |
| [castToNormalForm](arkts-form-casttonormalform-f-sys.md#casttonormalform-1) | Converts a temporary widget to a normal one. This API uses an asynchronous callback to return the result. |
| [castToNormalForm](arkts-form-casttonormalform-f-sys.md#casttonormalform-2) | Converts a temporary widget to a normal one. This API uses a promise to return the result. |
| [clearRouterProxy](arkts-form-clearrouterproxy-f-sys.md#clearrouterproxy-1) | Clears the router proxy set for widgets. This API uses an asynchronous callback to return the result. |
| [clearRouterProxy](arkts-form-clearrouterproxy-f-sys.md#clearrouterproxy-2) | Clears the router proxy set for widgets. This API uses a promise to return the result. |
| [deleteForm](arkts-form-deleteform-f-sys.md#deleteform-1) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses an asynchronous callback to return the result. |
| [deleteForm](arkts-form-deleteform-f-sys.md#deleteform-2) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses a promise to return the result. |
| [deleteInvalidForms](arkts-form-deleteinvalidforms-f-sys.md#deleteinvalidforms-1) | Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result. |
| [deleteInvalidForms](arkts-form-deleteinvalidforms-f-sys.md#deleteinvalidforms-2) | Deletes invalid widgets from the list. This API uses a promise to return the result. |
| [disableFormsUpdate](arkts-form-disableformsupdate-f-sys.md#disableformsupdate-1) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receiveupdates from the widget provider. This API uses an asynchronous callback to return the result. |
| [disableFormsUpdate](arkts-form-disableformsupdate-f-sys.md#disableformsupdate-2) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive updates from the widget provider. This API uses a promise to return the result. |
| [enableFormsUpdate](arkts-form-enableformsupdate-f-sys.md#enableformsupdate-1) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses an asynchronous callback to return the result. |
| [enableFormsUpdate](arkts-form-enableformsupdate-f-sys.md#enableformsupdate-2) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses a promise to return the result. |
| [getAllFormsInfo](arkts-form-getallformsinfo-f-sys.md#getallformsinfo-1) | Obtains the widget information provided by all applications on the device (excluding template widgets). This API uses an asynchronous callback to return the result. |
| [getAllFormsInfo](arkts-form-getallformsinfo-f-sys.md#getallformsinfo-2) | Obtains the widget information provided by all applications on the device (excluding template widgets). This API uses a promise to return the result. |
| [getAllTemplateFormsInfo](arkts-form-getalltemplateformsinfo-f-sys.md#getalltemplateformsinfo-1) | Obtains the template widget information provided by all applications on the device. This API uses a promise to return the result. |
| [getFormIdsByFormLocation](arkts-form-getformidsbyformlocation-f-sys.md#getformidsbyformlocation-1) | Obtains the list of widget IDs at a specified location on the device. This API uses a promise to return theresult. |
| [getFormsInfo](arkts-form-getformsinfo-f-sys.md#getformsinfo-1) | Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses an asynchronous callback to return the result. |
| [getFormsInfo](arkts-form-getformsinfo-f-sys.md#getformsinfo-2) | Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses an asynchronous callback to return the result. |
| [getFormsInfo](arkts-form-getformsinfo-f-sys.md#getformsinfo-3) | Obtains the widget information provided by a specified application on the device (excluding template widgets). This API uses a promise to return the result. |
| [getFormsInfo](arkts-form-getformsinfo-f-sys.md#getformsinfo-4) | Obtains the widget information provided by a specified application on the device (excluding template widgets).This API uses a promise to return the result. |
| [getTemplateFormsInfo](arkts-form-gettemplateformsinfo-f-sys.md#gettemplateformsinfo-1) | Obtains the template widget information provided by a specified application on the device. This API uses a promise to return the result. |
| [isSystemReady](arkts-form-issystemready-f-sys.md#issystemready-1) | Checks whether the system is ready. This API uses an asynchronous callback to return the result. |
| [isSystemReady](arkts-form-issystemready-f-sys.md#issystemready-2) | Checks whether the system is ready. This API uses a promise to return the result. |
| [notifyFormsEnableUpdate](arkts-form-notifyformsenableupdate-f-sys.md#notifyformsenableupdate-1) | Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result. |
| [notifyFormsEnableUpdate](arkts-form-notifyformsenableupdate-f-sys.md#notifyformsenableupdate-2) | Instructs the widgets to enable or disable updates. This API uses a promise to return the result. |
| [notifyFormsPrivacyProtected](arkts-form-notifyformsprivacyprotected-f-sys.md#notifyformsprivacyprotected-1) | Notifies that the privacy protection status of the specified widgets changes. This API uses an asynchronous callback to return the result. |
| [notifyFormsPrivacyProtected](arkts-form-notifyformsprivacyprotected-f-sys.md#notifyformsprivacyprotected-2) | Notifies that the privacy protection status of the specified widgets changes. This API uses a promise to returnthe result. |
| [notifyFormsVisible](arkts-form-notifyformsvisible-f-sys.md#notifyformsvisible-1) | Instructs the widgets to make themselves visible. This API uses an asynchronous callback to return the result. |
| [notifyFormsVisible](arkts-form-notifyformsvisible-f-sys.md#notifyformsvisible-2) | Instructs the widgets to make themselves visible. This API uses a promise to return the result. |
| [notifyInvisibleForms](arkts-form-notifyinvisibleforms-f-sys.md#notifyinvisibleforms-1) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| [notifyInvisibleForms](arkts-form-notifyinvisibleforms-f-sys.md#notifyinvisibleforms-2) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| [notifyVisibleForms](arkts-form-notifyvisibleforms-f-sys.md#notifyvisibleforms-1) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| [notifyVisibleForms](arkts-form-notifyvisibleforms-f-sys.md#notifyvisibleforms-2) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| [off](arkts-form-off-f-sys.md#off-1) | Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget &gt; is automatically uninstalled. |
| [off](arkts-form-off-f-sys.md#off-2) | Unsubscribes from the interactive widget animation request event. This API uses an asynchronous callback to return the result. |
| [off](arkts-form-off-f-sys.md#off-3) | Unsubscribes from the event of switching the interactive widget state. An interactive widget can be in the activeor inactive state. In the inactive state, the interactive widget is the same as a common widget. In the activestate, the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host toimplement interactive widget animations. This API uses an asynchronous callback to return the result. |
| [off](arkts-form-off-f-sys.md#off-4) | Unsubscribes from the event of requesting widget position and dimension. This API uses an asynchronous callback to return the result. |
| [off](arkts-form-off-f-sys.md#off-5) | Cancels Listening to the event of get live form status. |
| [offDeleteFormsCallback](arkts-form-offdeleteformscallback-f-sys.md#offdeleteformscallback-1) | Unregister the callback for deleting forms. |
| [offGetWantParamsCallback](arkts-form-offgetwantparamscallback-f-sys.md#offgetwantparamscallback-1) | Unregister callback of getting the want parameters of the form. |
| [offTemplateFormDetailInfoChange](arkts-form-offtemplateformdetailinfochange-f-sys.md#offtemplateformdetailinfochange-1) | Unsubscribes from changes in the static configuration information of template widgets. This API uses anasynchronous callback to return the result. |
| [offUpdateFormsConfigCallback](arkts-form-offupdateformsconfigcallback-f-sys.md#offupdateformsconfigcallback-1) | Unregister the callback for updating form config. |
| [on](arkts-form-on-f-sys.md#on-1) | Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget &gt; is automatically uninstalled. |
| [on](arkts-form-on-f-sys.md#on-2) | Subscribes to the interactive widget animation request event. This API uses an asynchronous callback to return the result. |
| [on](arkts-form-on-f-sys.md#on-3) | Subscribes to the event of switching the interactive widget state. An interactive widget can be in the active or inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active state, the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host toimplement interactive widget animations. This API uses an asynchronous callback to return the result. |
| [on](arkts-form-on-f-sys.md#on-4) | Subscribes to the event of requesting widget position and dimension. This API uses an asynchronous callback toreturn the result. |
| [on](arkts-form-on-f-sys.md#on-5) | Listens to the event of get live form status. |
| [onDeleteFormsCallback](arkts-form-ondeleteformscallback-f-sys.md#ondeleteformscallback-1) | Register the callback for deleting forms. |
| [onGetWantParamsCallback](arkts-form-ongetwantparamscallback-f-sys.md#ongetwantparamscallback-1) | Register callback of getting the want parameters of the form. |
| [onTemplateFormDetailInfoChange](arkts-form-ontemplateformdetailinfochange-f-sys.md#ontemplateformdetailinfochange-1) | Subscribes to changes in the static configuration information of template widgets. This API uses an asynchronouscallback to return the result. |
| [onUpdateFormsConfigCallback](arkts-form-onupdateformsconfigcallback-f-sys.md#onupdateformsconfigcallback-1) | Register the callback for updating form config. |
| [recoverForms](arkts-form-recoverforms-f-sys.md#recoverforms-1) | Recovers recycled widgets and updates their status to non-recyclable, or updates the status of widgets to non-recyclable if the widgets are not recycled. This API uses a promise to return the result. |
| [recoverForms](arkts-form-recoverforms-f-sys.md#recoverforms-2) | Recovers widgets. This API uses an asynchronous callback to return the result. |
| [recycleForms](arkts-form-recycleforms-f-sys.md#recycleforms-1) | Recycles widgets, that is, reclaiming widget memory. This API uses a promise to return the result. |
| [releaseForm](arkts-form-releaseform-f-sys.md#releaseform-1) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager still retains the widget cache and storage information. This API uses an asynchronous callback to return the result. |
| [releaseForm](arkts-form-releaseform-f-sys.md#releaseform-2) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses an asynchronous callback to return the result. |
| [releaseForm](arkts-form-releaseform-f-sys.md#releaseform-3) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses a promise to return the result. |
| [requestForm](arkts-form-requestform-f-sys.md#requestform-1) | Requests a widget update. This API uses an asynchronous callback to return the result. |
| [requestForm](arkts-form-requestform-f-sys.md#requestform-2) | Requests a widget update. This API uses a promise to return the result. |
| [requestFormWithParams](arkts-form-requestformwithparams-f-sys.md#requestformwithparams-1) | Carries parameters to request a widget update. This API uses a promise to return the result. |
| [setFormsRecyclable](arkts-form-setformsrecyclable-f-sys.md#setformsrecyclable-1) | Sets widgets to be recyclable. This API uses a promise to return the result. |
| [setFormsRecyclable](arkts-form-setformsrecyclable-f-sys.md#setformsrecyclable-2) | Sets widgets to be recyclable. This API uses an asynchronous callback to return the result. |
| [setPublishFormResult](arkts-form-setpublishformresult-f-sys.md#setpublishformresult-1) | Sets the result for the operation of adding a widget to the home screen. |
| [setRouterProxy](arkts-form-setrouterproxy-f-sys.md#setrouterproxy-1) | Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework&gt; checks whether the destination is proper and whether the widget has the redirection permission, and then &gt; triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured, &gt; in the case of router-based redirection, the widget framework does not trigger redirection for the widget.&gt; - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect. |
| [setRouterProxy](arkts-form-setrouterproxy-f-sys.md#setrouterproxy-2) | Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses a promise to return the result. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; - Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework&gt; checks whether the destination is proper and whether the widget has the redirection permission, and then &gt; triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured, &gt; in the case of router-based redirection, the widget framework does not trigger redirection for the widget.&gt;&gt; - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect. |
| [shareForm](arkts-form-shareform-f-sys.md#shareform-1) | Shares a specified widget with a remote device. This API uses an asynchronous callback to return the result. |
| [shareForm](arkts-form-shareform-f-sys.md#shareform-2) | Shares a specified widget with a remote device. This API uses a promise to return the result. |
| [updateFormLocation](arkts-form-updateformlocation-f-sys.md#updateformlocation-1) | Updates the widget location. |
| [updateFormLockedState](arkts-form-updateformlockedstate-f-sys.md#updateformlockedstate-1) | Notifies the update of the widget lock state. This API uses a promise to return the result.If an application is locked, its widget will also be locked and masked in a locked style. To use the widget, you need to enter the password set for the widget. |
| [updateFormSize](arkts-form-updateformsize-f-sys.md#updateformsize-1) | Updates the size of the widget. |
<!--DelEnd-->

