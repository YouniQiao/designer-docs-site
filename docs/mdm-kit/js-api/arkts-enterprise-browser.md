# @ohos.enterprise.browser

The **browser** module provides browser management, including setting, canceling, and obtaining browser policies.

Browser policies are a collection of rules and settings that govern how a browser behaves, ensuring security,compliance, performance optimization, and a consistent user experience.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace browser--><!--Device-unnamed-declare namespace browser-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { browser } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getManagedBrowserPolicy](arkts-mdm-browser-getmanagedbrowserpolicy-f.md#getmanagedbrowserpolicy-1) | Obtains the browser policy by application bundle name. |
| [getPoliciesSync](arkts-mdm-browser-getpoliciessync-f.md#getpoliciessync-1) | Obtains the browser policy by app ID. |
| [getSelfManagedBrowserPolicy](arkts-mdm-browser-getselfmanagedbrowserpolicy-f.md#getselfmanagedbrowserpolicy-1) | Obtains the browser policy of the current device. |
| [getSelfManagedBrowserPolicyVersion](arkts-mdm-browser-getselfmanagedbrowserpolicyversion-f.md#getselfmanagedbrowserpolicyversion-1) | Obtains the policy version of a specified browser. |
| [setManagedBrowserPolicy](arkts-mdm-browser-setmanagedbrowserpolicy-f.md#setmanagedbrowserpolicy-1) | Sets the browser policy. After the setting is successful, the system common event [COMMON_EVENT_MANAGED_BROWSER_POLICY_CHANGED](../../../../reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_managed_browser_policy_changed)is released. |
| [setPolicySync](arkts-mdm-browser-setpolicysync-f.md#setpolicysync-1) | Sets the sub-policy for a specified browser. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getPolicies](arkts-mdm-browser-getpolicies-f-sys.md#getpolicies-1) | Obtains the policy of the specified browser. This API uses an asynchronous callback to return the result. |
| [getPolicies](arkts-mdm-browser-getpolicies-f-sys.md#getpolicies-2) | Obtains the policy of the specified browser. This API uses a promise to return the result. |
| [setPolicies](arkts-mdm-browser-setpolicies-f-sys.md#setpolicies-1) | Sets the browsing policy for a specified browser. This API uses an asynchronous callback to return the result. |
| [setPolicies](arkts-mdm-browser-setpolicies-f-sys.md#setpolicies-2) | Sets the browsing policy for a specified browser. This API uses a promise to return the result. |
<!--DelEnd-->

