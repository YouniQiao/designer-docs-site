# @ohos.application.formHost

The **formHost** module provides APIs related to the widget host, which is an application that displays the widget content and controls the position where the widget is displayed. You can use the APIs to delete, release, and update widgets installed by the same user, and obtain widget information and status.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[acquireFormState](arkts-formhost-acquireformstate-f-sys.md#acquireFormState-1) | Obtains the widget state. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[acquireFormState](arkts-formhost-acquireformstate-f-sys.md#acquireFormState-2) | Obtains the widget state. This API uses a promise to return the result. |
| <!--DelRow-->[castTempForm](arkts-formhost-casttempform-f-sys.md#castTempForm-1) | Converts a temporary widget to a normal one. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[castTempForm](arkts-formhost-casttempform-f-sys.md#castTempForm-2) | Converts a temporary widget to a normal one. This API uses a promise to return the result. |
| <!--DelRow-->[deleteForm](arkts-formhost-deleteform-f-sys.md#deleteForm-1) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[deleteForm](arkts-formhost-deleteform-f-sys.md#deleteForm-2) | Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses a promise to return the result. |
| <!--DelRow-->[deleteInvalidForms](arkts-formhost-deleteinvalidforms-f-sys.md#deleteInvalidForms-1) | Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[deleteInvalidForms](arkts-formhost-deleteinvalidforms-f-sys.md#deleteInvalidForms-2) | Deletes invalid widgets from the list. This API uses a promise to return the result. |
| <!--DelRow-->[disableFormsUpdate](arkts-formhost-disableformsupdate-f-sys.md#disableFormsUpdate-1) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive updates from the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[disableFormsUpdate](arkts-formhost-disableformsupdate-f-sys.md#disableFormsUpdate-2) | Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive updates from the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[enableFormsUpdate](arkts-formhost-enableformsupdate-f-sys.md#enableFormsUpdate-1) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[enableFormsUpdate](arkts-formhost-enableformsupdate-f-sys.md#enableFormsUpdate-2) | Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[getAllFormsInfo](arkts-formhost-getallformsinfo-f-sys.md#getAllFormsInfo-1) | Obtains the widget information provided by all applications on the device. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[getAllFormsInfo](arkts-formhost-getallformsinfo-f-sys.md#getAllFormsInfo-2) | Obtains the widget information provided by all applications on the device. This API uses a promise to return the result. |
| <!--DelRow-->[getFormsInfo](arkts-formhost-getformsinfo-f-sys.md#getFormsInfo-1) | Obtains the widget information provided by a given application on the device. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[getFormsInfo](arkts-formhost-getformsinfo-f-sys.md#getFormsInfo-2) | Obtains the widget information provided by a given application on the device. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[getFormsInfo](arkts-formhost-getformsinfo-f-sys.md#getFormsInfo-3) | Obtains the widget information provided by a given application on the device. This API uses a promise to return the result. |
| <!--DelRow-->[isSystemReady](arkts-formhost-issystemready-f-sys.md#isSystemReady-1) | Checks whether the system is ready. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[isSystemReady](arkts-formhost-issystemready-f-sys.md#isSystemReady-2) | Checks whether the system is ready. This API uses a promise to return the result. |
| <!--DelRow-->[notifyFormsEnableUpdate](arkts-formhost-notifyformsenableupdate-f-sys.md#notifyFormsEnableUpdate-1) | Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyFormsEnableUpdate](arkts-formhost-notifyformsenableupdate-f-sys.md#notifyFormsEnableUpdate-2) | Instructs the widgets to enable or disable updates. This API uses a promise to return the result. |
| <!--DelRow-->[notifyFormsVisible](arkts-formhost-notifyformsvisible-f-sys.md#notifyFormsVisible-1) | Instructs the widgets to make themselves visible. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyFormsVisible](arkts-formhost-notifyformsvisible-f-sys.md#notifyFormsVisible-2) | Instructs the widgets to make themselves visible. This API uses a promise to return the result. |
| <!--DelRow-->[notifyInvisibleForms](arkts-formhost-notifyinvisibleforms-f-sys.md#notifyInvisibleForms-1) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyInvisibleForms](arkts-formhost-notifyinvisibleforms-f-sys.md#notifyInvisibleForms-2) | Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[notifyVisibleForms](arkts-formhost-notifyvisibleforms-f-sys.md#notifyVisibleForms-1) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[notifyVisibleForms](arkts-formhost-notifyvisibleforms-f-sys.md#notifyVisibleForms-2) | Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result. |
| <!--DelRow-->[off](arkts-formhost-off-f-sys.md#off-1) | Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled. |
| <!--DelRow-->[on](arkts-formhost-on-f-sys.md#on-1) | Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled. |
| <!--DelRow-->[releaseForm](arkts-formhost-releaseform-f-sys.md#releaseForm-1) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager still retains the widget cache and storage information. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[releaseForm](arkts-formhost-releaseform-f-sys.md#releaseForm-2) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[releaseForm](arkts-formhost-releaseform-f-sys.md#releaseForm-3) | Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager retains the storage information about the widget and retains or releases the cache information based on the setting. This API uses a promise to return the result. |
| <!--DelRow-->[requestForm](arkts-formhost-requestform-f-sys.md#requestForm-1) | Requests a widget update. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[requestForm](arkts-formhost-requestform-f-sys.md#requestForm-2) | Requests a widget update. This API uses a promise to return the result. |

