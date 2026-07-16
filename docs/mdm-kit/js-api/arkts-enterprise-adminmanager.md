# @ohos.enterprise.adminManager

The **adminManager** module provides administrator permission management capabilities for enterprise MDM applications
, including enabling or disabling administrator permissions, subscribing to events, delegating applications, and
granting permissions.

> **NOTE**
>
> The APIs of this module can be called only by a device administrator application. For details, see
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 9

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { adminManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [disableAdmin](arkts-mdm-disableadmin-f.md#disableadmin-3) | Disables a device administrator application for the specified user. This API uses a promise to return the result. |
| [disableDeviceAdmin](arkts-mdm-disabledeviceadmin-f.md#disabledeviceadmin-1) | Allows a [super device administrator application](../../../../mdm/mdm-kit-term.md#sda) to disable other[device administrator applications](../../../../mdm/mdm-kit-term.md#da). This API uses a promise to return theresult. This API can be called only by super device administrator applications. |
| [enableDeviceAdmin](arkts-mdm-enabledeviceadmin-f.md#enabledeviceadmin-1) | Allows a [super device administrator application](../../../../mdm/mdm-kit-term.md#sda) to enable other[device administrator applications](../../../../mdm/mdm-kit-term.md#da). This API uses a promise to return theresult. This API can be called only by super device administrator applications. |
| [enableSelfDeviceAdmin](arkts-mdm-enableselfdeviceadmin-f.md#enableselfdeviceadmin-1) | Enables self as a device administrator. |
| [getDelegatedBundleNames](arkts-mdm-getdelegatedbundlenames-f.md#getdelegatedbundlenames-1) | Queries the delegated applications that can access a delegation policy and output the list of delegatedapplications. |
| [getDelegatedPolicies](arkts-mdm-getdelegatedpolicies-f.md#getdelegatedpolicies-1) | Queries the list of policies that can be accessed by the delegated application. |
| [isByodAdmin](arkts-mdm-isbyodadmin-f.md#isbyodadmin-1) | Checks whether the current application is activated as a BYOD device administrator application based on the**EnterpriseAdminExtensionAbility** component. |
| [setDelegatedPolicies](arkts-mdm-setdelegatedpolicies-f.md#setdelegatedpolicies-1) | Delegates other applications to set device management policies. The applications must request the permissionsrequired. |
| [startAdminProvision](arkts-mdm-startadminprovision-f.md#startadminprovision-1) | Enables the device administrator application to open a page for the BYOD administrator to perform activation. |
| [subscribeManagedEventSync](arkts-mdm-subscribemanagedeventsync-f.md#subscribemanagedeventsync-1) | Subscribes to system management events. |
| [unsubscribeManagedEventSync](arkts-mdm-unsubscribemanagedeventsync-f.md#unsubscribemanagedeventsync-1) | Unsubscribes from system management events. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [authorizeAdmin](arkts-mdm-authorizeadmin-f-sys.md#authorizeadmin-1) | Authorizes the administrator permission to a specified application. This API uses an asynchronous callback toreturn the result. |
| [authorizeAdmin](arkts-mdm-authorizeadmin-f-sys.md#authorizeadmin-2) | Authorizes the administrator permission to a specified application. This API uses a promise to return the result. |
| [disableAdmin](arkts-mdm-disableadmin-f-sys.md#disableadmin-1) | Disables a common device administrator application for the current user. This API uses an asynchronous callback toreturn the result. |
| [disableAdmin](arkts-mdm-disableadmin-f-sys.md#disableadmin-2) | Disables a common device administrator application for the user specified by **userId**. This API uses anasynchronous callback to return the result. |
| [disableSuperAdmin](arkts-mdm-disablesuperadmin-f-sys.md#disablesuperadmin-1) | Disables a super device administrator application based on **bundleName**. This API uses an asynchronous callbackto return the result. |
| [disableSuperAdmin](arkts-mdm-disablesuperadmin-f-sys.md#disablesuperadmin-2) | Disables a super device administrator application based on **bundleName**. This API uses a promise to return theresult. |
| [enableAdmin](arkts-mdm-enableadmin-f-sys.md#enableadmin-1) | Enables a device administrator application. The super device administrator application can be activated only by theadministrator. After the application is enabled, it cannot be uninstalled. The[EnterpriseAdminExtensionAbility](../../../../mdm/mdm-kit-term.md#enterpriseadminextensionability) component of theapplication will automatically start upon device startup and user switching. This API uses an asynchronous callbackto return the result. |
| [enableAdmin](arkts-mdm-enableadmin-f-sys.md#enableadmin-2) | Enables a device administrator application for the specified user. The super device administrator application canbe activated only by the administrator. This API uses an asynchronous callback to return the result. |
| [enableAdmin](arkts-mdm-enableadmin-f-sys.md#enableadmin-3) | Enables a device administrator application for the current or specified user. The super device administratorapplication can be activated only by the administrator. This API uses a promise to return the result. |
| [getAdmins](arkts-mdm-getadmins-f-sys.md#getadmins-1) | Queries all device administrator applications of the current user. This API uses a promise to return the result. |
| [getEnterpriseInfo](arkts-mdm-getenterpriseinfo-f-sys.md#getenterpriseinfo-1) | Obtains the enterprise information of the device administrator application. This API uses an asynchronous callbackto return the result. |
| [getEnterpriseInfo](arkts-mdm-getenterpriseinfo-f-sys.md#getenterpriseinfo-2) | Obtains the enterprise information of the device administrator application. This API uses a promise to return theresult. |
| [getEnterpriseManagedTips](arkts-mdm-getenterprisemanagedtips-f-sys.md#getenterprisemanagedtips-1) | Gets enterprise message tips. |
| [getSuperAdmin](arkts-mdm-getsuperadmin-f-sys.md#getsuperadmin-1) | Obtains the super device administrator application of this administrator. This API uses a promise to return theresult. |
| [isAdminEnabled](arkts-mdm-isadminenabled-f-sys.md#isadminenabled-1) | Checks whether a device administrator application of the current user is enabled. This API uses an asynchronouscallback to return the result. |
| [isAdminEnabled](arkts-mdm-isadminenabled-f-sys.md#isadminenabled-2) | Checks whether a device administrator application of the specified user is enabled. This API uses an asynchronouscallback to return the result. |
| [isAdminEnabled](arkts-mdm-isadminenabled-f-sys.md#isadminenabled-3) | Checks whether a device administrator application of the current or specified user is enabled. This API uses apromise to return the result. |
| [isSuperAdmin](arkts-mdm-issuperadmin-f-sys.md#issuperadmin-1) | Checks whether a super device administrator application is enabled based on **bundleName**. This API uses anasynchronous callback to return the result. |
| [isSuperAdmin](arkts-mdm-issuperadmin-f-sys.md#issuperadmin-2) | Checks whether a super device administrator application is enabled based on **bundleName**. This API uses a promiseto return the result. |
| [replaceSuperAdmin](arkts-mdm-replacesuperadmin-f-sys.md#replacesuperadmin-1) | Replaces a specified application with a super device administrator application. |
| [setAdminRunningMode](arkts-mdm-setadminrunningmode-f-sys.md#setadminrunningmode-1) | Sets the running mode of the device management application. |
| [setDelegatedPolicies](arkts-mdm-setdelegatedpolicies-f-sys.md#setdelegatedpolicies-2) | Delegates other applications to set device management policies. The applications must request the permissionsrequired. |
| [setEnterpriseInfo](arkts-mdm-setenterpriseinfo-f-sys.md#setenterpriseinfo-1) | Sets the enterprise information of the device administrator application. This API uses an asynchronous callback toreturn the result. |
| [setEnterpriseInfo](arkts-mdm-setenterpriseinfo-f-sys.md#setenterpriseinfo-2) | Sets the enterprise information of the device administrator application. This API uses a promise to return theresult. |
| [subscribeManagedEvent](arkts-mdm-subscribemanagedevent-f-sys.md#subscribemanagedevent-1) | Subscribes to system management events. This API uses an asynchronous callback to return the result. |
| [subscribeManagedEvent](arkts-mdm-subscribemanagedevent-f-sys.md#subscribemanagedevent-2) | Subscribes to system management events. This API uses a promise to return the result. |
| [unsubscribeManagedEvent](arkts-mdm-unsubscribemanagedevent-f-sys.md#unsubscribemanagedevent-1) | Unsubscribes from system management events. This API uses an asynchronous callback to return the result. |
| [unsubscribeManagedEvent](arkts-mdm-unsubscribemanagedevent-f-sys.md#unsubscribemanagedevent-2) | Unsubscribes from system management events. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [EnterpriseInfo](arkts-mdm-enterpriseinfo-i-sys.md) | Represents the enterprise information of a device administrator application. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AdminType](arkts-mdm-admintype-e.md) | Enumerates the types of device administrator applications. |
| [ManagedEvent](arkts-mdm-managedevent-e.md) | Enumerates the system management events that can be subscribed to. |
| [Policy](arkts-mdm-policy-e.md) | Defines the policy type for the trustlist or blocklist. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AdminType](arkts-mdm-admintype-e-sys.md) | Enumerates the types of device administrator applications. |
| [RunningMode](arkts-mdm-runningmode-e-sys.md) | Represents the running mode of a device administrator application. |
<!--DelEnd-->

