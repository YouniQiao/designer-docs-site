# @ohos.net.policy

Provides interfaces to manage network policy rules.

**Since:** 10

<!--Device-unnamed-declare namespace policy--><!--Device-unnamed-declare namespace policy-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getNetAccessPolicy](arkts-network-policy-getnetaccesspolicy-f.md#getnetaccesspolicy-1) | Query the network access policy of the calling application. |
| [showAppNetPolicySettings](arkts-network-policy-showappnetpolicysettings-f.md#showappnetpolicysettings-1) | Open the network settings interface of the application, which is presented in a semi-modal form and can be used to configure the network connection method. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getBackgroundPolicyByUid](arkts-network-policy-getbackgroundpolicybyuid-f-sys.md#getbackgroundpolicybyuid-1) | Get the background network policy for the specified uid. |
| [getBackgroundPolicyByUid](arkts-network-policy-getbackgroundpolicybyuid-f-sys.md#getbackgroundpolicybyuid-2) | Get the background network policy for the specified uid. |
| [getDeviceIdleTrustlist](arkts-network-policy-getdeviceidletrustlist-f-sys.md#getdeviceidletrustlist-1) | Obtain the list of uids that are allowed to access the Internet in hibernation mode. |
| [getDeviceIdleTrustlist](arkts-network-policy-getdeviceidletrustlist-f-sys.md#getdeviceidletrustlist-2) | Obtain the list of uids that are allowed to access the Internet in hibernation mode. |
| [getNetQuotaPolicies](arkts-network-policy-getnetquotapolicies-f-sys.md#getnetquotapolicies-1) | Get metered network quota policies. |
| [getNetQuotaPolicies](arkts-network-policy-getnetquotapolicies-f-sys.md#getnetquotapolicies-2) | Get metered network quota policies. |
| [getNetworkAccessPolicy](arkts-network-policy-getnetworkaccesspolicy-f-sys.md#getnetworkaccesspolicy-1) | Query the network access policy of the specified application. |
| [getNetworkAccessPolicy](arkts-network-policy-getnetworkaccesspolicy-f-sys.md#getnetworkaccesspolicy-2) | Query the network access policy of all applications. |
| [getPolicyByUid](arkts-network-policy-getpolicybyuid-f-sys.md#getpolicybyuid-1) | Query the policy of the specified UID. |
| [getPolicyByUid](arkts-network-policy-getpolicybyuid-f-sys.md#getpolicybyuid-2) | Query the policy of the specified UID. |
| [getPowerSaveTrustlist](arkts-network-policy-getpowersavetrustlist-f-sys.md#getpowersavetrustlist-1) | Obtain the list of uids that are allowed to access the Internet in power saving mode. |
| [getPowerSaveTrustlist](arkts-network-policy-getpowersavetrustlist-f-sys.md#getpowersavetrustlist-2) | Obtain the list of uids that are allowed to access the Internet in power saving mode. |
| [getUidsByPolicy](arkts-network-policy-getuidsbypolicy-f-sys.md#getuidsbypolicy-1) | Query the application UIDs of the specified policy. |
| [getUidsByPolicy](arkts-network-policy-getuidsbypolicy-f-sys.md#getuidsbypolicy-2) | Query the application UIDs of the specified policy. |
| [isBackgroundAllowed](arkts-network-policy-isbackgroundallowed-f-sys.md#isbackgroundallowed-1) | Get the status if applications can use data on background. |
| [isBackgroundAllowed](arkts-network-policy-isbackgroundallowed-f-sys.md#isbackgroundallowed-2) | Get the status if applications can use data on background. |
| [isUidNetAllowed](arkts-network-policy-isuidnetallowed-f-sys.md#isuidnetallowed-1) | Get the status whether the uid app can access the metered network or non-metered network. |
| [isUidNetAllowed](arkts-network-policy-isuidnetallowed-f-sys.md#isuidnetallowed-2) | Get the status whether the uid app can access the metered network or non-metered network. |
| [isUidNetAllowed](arkts-network-policy-isuidnetallowed-f-sys.md#isuidnetallowed-3) | Get the status of whether the specified uid can access the specified network. |
| [isUidNetAllowed](arkts-network-policy-isuidnetallowed-f-sys.md#isuidnetallowed-4) | Get the status of whether the specified uid can access the specified network. |
| [off](arkts-network-policy-off-f-sys.md#off-1) | Unregister uid policy change listener. |
| [off](arkts-network-policy-off-f-sys.md#off-2) | Unregister uid rule change listener. |
| [off](arkts-network-policy-off-f-sys.md#off-3) | Unregister metered ifaces change listener. |
| [off](arkts-network-policy-off-f-sys.md#off-4) | Unregister quota policies change listener. |
| [off](arkts-network-policy-off-f-sys.md#off-5) | Unregister network background policy change listener. |
| [on](arkts-network-policy-on-f-sys.md#on-1) | Register uid policy change listener. |
| [on](arkts-network-policy-on-f-sys.md#on-2) | Register uid rule change listener. |
| [on](arkts-network-policy-on-f-sys.md#on-3) | Register metered ifaces change listener. |
| [on](arkts-network-policy-on-f-sys.md#on-4) | Register quota policies change listener. |
| [on](arkts-network-policy-on-f-sys.md#on-5) | Register network background policy change listener. |
| [resetPolicies](arkts-network-policy-resetpolicies-f-sys.md#resetpolicies-1) | Reset network policies\rules\quota policies\firewall rules. |
| [resetPolicies](arkts-network-policy-resetpolicies-f-sys.md#resetpolicies-2) | Reset network policies\rules\quota policies\firewall rules. |
| [restoreAllPolicies](arkts-network-policy-restoreallpolicies-f-sys.md#restoreallpolicies-1) | Reset the specified network management policy. |
| [setBackgroundAllowed](arkts-network-policy-setbackgroundallowed-f-sys.md#setbackgroundallowed-1) | Control if applications can use data on background. |
| [setBackgroundAllowed](arkts-network-policy-setbackgroundallowed-f-sys.md#setbackgroundallowed-2) | Control if applications can use data on background. |
| [setDeviceIdleTrustlist](arkts-network-policy-setdeviceidletrustlist-f-sys.md#setdeviceidletrustlist-1) | Set the list of uids that are allowed to access the Internet in hibernation mode. |
| [setDeviceIdleTrustlist](arkts-network-policy-setdeviceidletrustlist-f-sys.md#setdeviceidletrustlist-2) | Set the list of uids that are allowed to access the Internet in hibernation mode. |
| [setNetQuotaPolicies](arkts-network-policy-setnetquotapolicies-f-sys.md#setnetquotapolicies-1) | Set metered network quota policies. |
| [setNetQuotaPolicies](arkts-network-policy-setnetquotapolicies-f-sys.md#setnetquotapolicies-2) | Set metered network quota policies. |
| [setNetworkAccessPolicy](arkts-network-policy-setnetworkaccesspolicy-f-sys.md#setnetworkaccesspolicy-1) | Set the policy to access the network of the specified application. |
| [setPolicyByUid](arkts-network-policy-setpolicybyuid-f-sys.md#setpolicybyuid-1) | Set the policy for the specified UID. |
| [setPolicyByUid](arkts-network-policy-setpolicybyuid-f-sys.md#setpolicybyuid-2) | Set the policy for the specified UID. |
| [setPowerSaveTrustlist](arkts-network-policy-setpowersavetrustlist-f-sys.md#setpowersavetrustlist-1) | Set the list of uids that are allowed to access the Internet in power saving mode. |
| [setPowerSaveTrustlist](arkts-network-policy-setpowersavetrustlist-f-sys.md#setpowersavetrustlist-2) | Set the list of uids that are allowed to access the Internet in power saving mode. |
| [updateRemindPolicy](arkts-network-policy-updateremindpolicy-f-sys.md#updateremindpolicy-1) | Update the policy when the quota reaches the upper limit. |
| [updateRemindPolicy](arkts-network-policy-updateremindpolicy-f-sys.md#updateremindpolicy-2) | Update the policy when the quota reaches the upper limit. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [NetAccessPolicy](arkts-network-policy-netaccesspolicy-i.md) | Network policies that limit the specified UID of application to access the network. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [NetQuotaPolicy](arkts-network-policy-netquotapolicy-i-sys.md) | Net quota policies, including matching network rule usage periods, restrictions, and warnings. |
| [NetUidPolicyInfo](arkts-network-policy-netuidpolicyinfo-i-sys.md) | Callback function for registering network UID policy changes. |
| [NetUidRuleInfo](arkts-network-policy-netuidruleinfo-i-sys.md) | The interface is used to generate network unique identifiers. |
| [NetworkAccessPolicy](arkts-network-policy-networkaccesspolicy-i-sys.md) | Network policies that limit the specified UID of application to access the network. |
| [NetworkMatchRule](arkts-network-policy-networkmatchrule-i-sys.md) | The matching rules of network quota policies. |
| [QuotaPolicy](arkts-network-policy-quotapolicy-i-sys.md) | Policies that limit network quota. |
| [UidNetworkAccessPolicy](arkts-network-policy-uidnetworkaccesspolicy-i-sys.md) | Provides the container definition for network access policy key-value pairs. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [LimitAction](arkts-network-policy-limitaction-e-sys.md) | The action when quota policy hit the limit. |
| [NetBackgroundPolicy](arkts-network-policy-netbackgroundpolicy-e-sys.md) | Indicate whether the application can use metered networks in background. |
| [NetUidPolicy](arkts-network-policy-netuidpolicy-e-sys.md) | Uid Specifies the Internet access policy in background mode. |
| [NetUidRule](arkts-network-policy-netuidrule-e-sys.md) | Rules whether an uid can access to a metered or non-metered network. |
| [RemindType](arkts-network-policy-remindtype-e-sys.md) | Specify the remind type, see {@link updateRemindPolicy}. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [NetBearType](arkts-network-policy-netbeartype-t.md) | Get network bear type. |

