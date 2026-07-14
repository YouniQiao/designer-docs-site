# @ohos.application.formHost

The **formHost** module provides APIs related to the widget host, which is an application that displays the widget content and controls the position where the widget is displayed. You can use the APIs to delete, release, and update widgets installed by the same user, and obtain widget information and status.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [formHost:formHost](arkts-app-form-formhost.md)

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [acquireFormState](arkts-form-acquireformstate-depr-f-sys.md#acquireformstate-1) | Obtains the widget state. This API uses an asynchronous callback to return the result. |
| [acquireFormState](arkts-form-acquireformstate-depr-f-sys.md#acquireformstate-2) | Obtains the widget state. This API uses a promise to return the result. |
| [castTempForm](arkts-form-casttempform-depr-f-sys.md#casttempform-1) | Converts a temporary widget to a normal one. This API uses an asynchronous callback to return the result. |
| [castTempForm](arkts-form-casttempform-depr-f-sys.md#casttempform-2) | Converts a temporary widget to a normal one. This API uses a promise to return the result. |
| [deleteForm](arkts-form-deleteform-depr-f-sys.md#deleteform-1) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses an asynchronous callback to return the result. |
| [deleteForm](arkts-form-deleteform-depr-f-sys.md#deleteform-2) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses a promise to return the result. |
| [deleteInvalidForms](arkts-form-deleteinvalidforms-depr-f-sys.md#deleteinvalidforms-1) | Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result. |
| [deleteInvalidForms](arkts-form-deleteinvalidforms-depr-f-sys.md#deleteinvalidforms-2) | Deletes invalid widgets from the list. This API uses a promise to return the result. |
| [disableFormsUpdate](arkts-form-disableformsupdate-depr-f-sys.md#disableformsupdate-1) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive updates from the widget provider. This API uses an asynchronous callback to return the result. |
| [disableFormsUpdate](arkts-form-disableformsupdate-depr-f-sys.md#disableformsupdate-2) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive updates from the widget provider. This API uses a promise to return the result. |
| [enableFormsUpdate](arkts-form-enableformsupdate-depr-f-sys.md#enableformsupdate-1) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses an asynchronous callback to return the result. |
| [enableFormsUpdate](arkts-form-enableformsupdate-depr-f-sys.md#enableformsupdate-2) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses a promise to return the result. |
| [getAllFormsInfo](arkts-form-getallformsinfo-depr-f-sys.md#getallformsinfo-1) | Obtains the widget information provided by all applications on the device. This API uses an asynchronous callback to return the result. |
| [getAllFormsInfo](arkts-form-getallformsinfo-depr-f-sys.md#getallformsinfo-2) | Obtains the widget information provided by all applications on the device. This API uses a promise to return the result. |
| [getFormsInfo](arkts-form-getformsinfo-depr-f-sys.md#getformsinfo-1) | Obtains the widget information provided by a given application on the device. This API uses an asynchronous callback to return the result. |
| [getFormsInfo](arkts-form-getformsinfo-depr-f-sys.md#getformsinfo-2) | Obtains the widget information provided by a given application on the device. This API uses an asynchronous callback to return the result. |
| [getFormsInfo](arkts-form-getformsinfo-depr-f-sys.md#getformsinfo-3) | Obtains the widget information provided by a given application on the device. This API uses a promise to return the result. |
| [isSystemReady](arkts-form-issystemready-depr-f-sys.md#issystemready-1) | Checks whether the system is ready. This API uses an asynchronous callback to return the result. |
| [isSystemReady](arkts-form-issystemready-depr-f-sys.md#issystemready-2) | Checks whether the system is ready. This API uses a promise to return the result. |
| [notifyFormsEnableUpdate](arkts-form-notifyformsenableupdate-depr-f-sys.md#notifyformsenableupdate-1) | Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result. |
| [notifyFormsEnableUpdate](arkts-form-notifyformsenableupdate-depr-f-sys.md#notifyformsenableupdate-2) | Instructs the widgets to enable or disable updates. This API uses a promise to return the result. |
| [notifyFormsVisible](arkts-form-notifyformsvisible-depr-f-sys.md#notifyformsvisible-1) | Instructs the widgets to make themselves visible. This API uses an asynchronous callback to return the result. |
| [notifyFormsVisible](arkts-form-notifyformsvisible-depr-f-sys.md#notifyformsvisible-2) | Instructs the widgets to make themselves visible. This API uses a promise to return the result. |
| [notifyInvisibleForms](arkts-form-notifyinvisibleforms-depr-f-sys.md#notifyinvisibleforms-1) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| [notifyInvisibleForms](arkts-form-notifyinvisibleforms-depr-f-sys.md#notifyinvisibleforms-2) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| [notifyVisibleForms](arkts-form-notifyvisibleforms-depr-f-sys.md#notifyvisibleforms-1) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| [notifyVisibleForms](arkts-form-notifyvisibleforms-depr-f-sys.md#notifyvisibleforms-2) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| [off](arkts-form-off-depr-f-sys.md#off-1) | Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget &gt; is automatically uninstalled. |
| [on](arkts-form-on-depr-f-sys.md#on-1) | Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget &gt; is automatically uninstalled. |
| [releaseForm](arkts-form-releaseform-depr-f-sys.md#releaseform-1) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager still retains the widget cache and storage information. This API uses an asynchronous callback to return the result. |
| [releaseForm](arkts-form-releaseform-depr-f-sys.md#releaseform-2) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses an asynchronous callback to return the result. |
| [releaseForm](arkts-form-releaseform-depr-f-sys.md#releaseform-3) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses a promise to return the result. |
| [requestForm](arkts-form-requestform-depr-f-sys.md#requestform-1) | Requests a widget update. This API uses an asynchronous callback to return the result. |
| [requestForm](arkts-form-requestform-depr-f-sys.md#requestform-2) | Requests a widget update. This API uses a promise to return the result. |
<!--DelEnd-->

