# @ohos.net.policy

Provides interfaces to manage network policy rules.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getBackgroundPolicyByUid](arkts-policy-getbackgroundpolicybyuid-f-sys.md#getBackgroundPolicyByUid-1) | Get the background network policy for the specified uid. |
| <!--DelRow-->[getBackgroundPolicyByUid](arkts-policy-getbackgroundpolicybyuid-f-sys.md#getBackgroundPolicyByUid-2) | Get the background network policy for the specified uid. |
| <!--DelRow-->[getDeviceIdleTrustlist](arkts-policy-getdeviceidletrustlist-f-sys.md#getDeviceIdleTrustlist-1) | Obtain the list of uids that are allowed to access the Internet in hibernation mode. |
| <!--DelRow-->[getDeviceIdleTrustlist](arkts-policy-getdeviceidletrustlist-f-sys.md#getDeviceIdleTrustlist-2) | Obtain the list of uids that are allowed to access the Internet in hibernation mode. |
| [getNetAccessPolicy](arkts-policy-getnetaccesspolicy-f.md#getNetAccessPolicy-1) | Query the network access policy of the calling application. |
| <!--DelRow-->[getNetQuotaPolicies](arkts-policy-getnetquotapolicies-f-sys.md#getNetQuotaPolicies-1) | Get metered network quota policies. |
| <!--DelRow-->[getNetQuotaPolicies](arkts-policy-getnetquotapolicies-f-sys.md#getNetQuotaPolicies-2) | Get metered network quota policies. |
| <!--DelRow-->[getNetworkAccessPolicy](arkts-policy-getnetworkaccesspolicy-f-sys.md#getNetworkAccessPolicy-1) | Query the network access policy of the specified application. |
| <!--DelRow-->[getNetworkAccessPolicy](arkts-policy-getnetworkaccesspolicy-f-sys.md#getNetworkAccessPolicy-2) | Query the network access policy of all applications. |
| <!--DelRow-->[getPolicyByUid](arkts-policy-getpolicybyuid-f-sys.md#getPolicyByUid-1) | Query the policy of the specified UID. |
| <!--DelRow-->[getPolicyByUid](arkts-policy-getpolicybyuid-f-sys.md#getPolicyByUid-2) | Query the policy of the specified UID. |
| <!--DelRow-->[getPowerSaveTrustlist](arkts-policy-getpowersavetrustlist-f-sys.md#getPowerSaveTrustlist-1) | Obtain the list of uids that are allowed to access the Internet in power saving mode. |
| <!--DelRow-->[getPowerSaveTrustlist](arkts-policy-getpowersavetrustlist-f-sys.md#getPowerSaveTrustlist-2) | Obtain the list of uids that are allowed to access the Internet in power saving mode. |
| <!--DelRow-->[getUidsByPolicy](arkts-policy-getuidsbypolicy-f-sys.md#getUidsByPolicy-1) | Query the application UIDs of the specified policy. |
| <!--DelRow-->[getUidsByPolicy](arkts-policy-getuidsbypolicy-f-sys.md#getUidsByPolicy-2) | Query the application UIDs of the specified policy. |
| <!--DelRow-->[isBackgroundAllowed](arkts-policy-isbackgroundallowed-f-sys.md#isBackgroundAllowed-1) | Get the status if applications can use data on background. |
| <!--DelRow-->[isBackgroundAllowed](arkts-policy-isbackgroundallowed-f-sys.md#isBackgroundAllowed-2) | Get the status if applications can use data on background. |
| <!--DelRow-->[isUidNetAllowed](arkts-policy-isuidnetallowed-f-sys.md#isUidNetAllowed-1) | Get the status whether the uid app can access the metered network or non-metered network. |
| <!--DelRow-->[isUidNetAllowed](arkts-policy-isuidnetallowed-f-sys.md#isUidNetAllowed-2) | Get the status whether the uid app can access the metered network or non-metered network. |
| <!--DelRow-->[isUidNetAllowed](arkts-policy-isuidnetallowed-f-sys.md#isUidNetAllowed-3) | Get the status of whether the specified uid can access the specified network. |
| <!--DelRow-->[isUidNetAllowed](arkts-policy-isuidnetallowed-f-sys.md#isUidNetAllowed-4) | Get the status of whether the specified uid can access the specified network. |
| <!--DelRow-->[off](arkts-policy-off-f-sys.md#off-1) | Unregister uid policy change listener. |
| <!--DelRow-->[off](arkts-policy-off-f-sys.md#off-2) | Unregister uid rule change listener. |
| <!--DelRow-->[off](arkts-policy-off-f-sys.md#off-3) | Unregister metered ifaces change listener. |
| <!--DelRow-->[off](arkts-policy-off-f-sys.md#off-4) | Unregister quota policies change listener. |
| <!--DelRow-->[off](arkts-policy-off-f-sys.md#off-5) | Unregister network background policy change listener. |
| <!--DelRow-->[on](arkts-policy-on-f-sys.md#on-1) | Register uid policy change listener. |
| <!--DelRow-->[on](arkts-policy-on-f-sys.md#on-2) | Register uid rule change listener. |
| <!--DelRow-->[on](arkts-policy-on-f-sys.md#on-3) | Register metered ifaces change listener. |
| <!--DelRow-->[on](arkts-policy-on-f-sys.md#on-4) | Register quota policies change listener. |
| <!--DelRow-->[on](arkts-policy-on-f-sys.md#on-5) | Register network background policy change listener. |
| <!--DelRow-->[resetPolicies](arkts-policy-resetpolicies-f-sys.md#resetPolicies-1) | Reset network policies\rules\quota policies\firewall rules. |
| <!--DelRow-->[resetPolicies](arkts-policy-resetpolicies-f-sys.md#resetPolicies-2) | Reset network policies\rules\quota policies\firewall rules. |
| <!--DelRow-->[restoreAllPolicies](arkts-policy-restoreallpolicies-f-sys.md#restoreAllPolicies-1) | Reset the specified network management policy. |
| <!--DelRow-->[setBackgroundAllowed](arkts-policy-setbackgroundallowed-f-sys.md#setBackgroundAllowed-1) | Control if applications can use data on background. |
| <!--DelRow-->[setBackgroundAllowed](arkts-policy-setbackgroundallowed-f-sys.md#setBackgroundAllowed-2) | Control if applications can use data on background. |
| <!--DelRow-->[setDeviceIdleTrustlist](arkts-policy-setdeviceidletrustlist-f-sys.md#setDeviceIdleTrustlist-1) | Set the list of uids that are allowed to access the Internet in hibernation mode. |
| <!--DelRow-->[setDeviceIdleTrustlist](arkts-policy-setdeviceidletrustlist-f-sys.md#setDeviceIdleTrustlist-2) | Set the list of uids that are allowed to access the Internet in hibernation mode. |
| <!--DelRow-->[setNetQuotaPolicies](arkts-policy-setnetquotapolicies-f-sys.md#setNetQuotaPolicies-1) | Set metered network quota policies. |
| <!--DelRow-->[setNetQuotaPolicies](arkts-policy-setnetquotapolicies-f-sys.md#setNetQuotaPolicies-2) | Set metered network quota policies. |
| <!--DelRow-->[setNetworkAccessPolicy](arkts-policy-setnetworkaccesspolicy-f-sys.md#setNetworkAccessPolicy-1) | Set the policy to access the network of the specified application. |
| <!--DelRow-->[setPolicyByUid](arkts-policy-setpolicybyuid-f-sys.md#setPolicyByUid-1) | Set the policy for the specified UID. |
| <!--DelRow-->[setPolicyByUid](arkts-policy-setpolicybyuid-f-sys.md#setPolicyByUid-2) | Set the policy for the specified UID. |
| <!--DelRow-->[setPowerSaveTrustlist](arkts-policy-setpowersavetrustlist-f-sys.md#setPowerSaveTrustlist-1) | Set the list of uids that are allowed to access the Internet in power saving mode. |
| <!--DelRow-->[setPowerSaveTrustlist](arkts-policy-setpowersavetrustlist-f-sys.md#setPowerSaveTrustlist-2) | Set the list of uids that are allowed to access the Internet in power saving mode. |
| [showAppNetPolicySettings](arkts-policy-showappnetpolicysettings-f.md#showAppNetPolicySettings-1) | Open the network settings interface of the application, which is presented in a semi-modal form and can be used to configure the network connection method. This API uses a promise to return the result. |
| <!--DelRow-->[updateRemindPolicy](arkts-policy-updateremindpolicy-f-sys.md#updateRemindPolicy-1) | Update the policy when the quota reaches the upper limit. |
| <!--DelRow-->[updateRemindPolicy](arkts-policy-updateremindpolicy-f-sys.md#updateRemindPolicy-2) | Update the policy when the quota reaches the upper limit. |

### Interfaces

| Name | Description |
| --- | --- |
| [NetAccessPolicy](arkts-policy-netaccesspolicy-i.md) | Network policies that limit the specified UID of application to access the network. |
| <!--DelRow-->[NetQuotaPolicy](arkts-policy-netquotapolicy-i-sys.md) | Net quota policies, including matching network rule usage periods, restrictions, and warnings. |
| <!--DelRow-->[NetUidPolicyInfo](arkts-policy-netuidpolicyinfo-i-sys.md) | Callback function for registering network UID policy changes. |
| <!--DelRow-->[NetUidRuleInfo](arkts-policy-netuidruleinfo-i-sys.md) | The interface is used to generate network unique identifiers. |
| <!--DelRow-->[NetworkAccessPolicy](arkts-policy-networkaccesspolicy-i-sys.md) | Network policies that limit the specified UID of application to access the network. |
| <!--DelRow-->[NetworkMatchRule](arkts-policy-networkmatchrule-i-sys.md) | The matching rules of network quota policies. |
| <!--DelRow-->[QuotaPolicy](arkts-policy-quotapolicy-i-sys.md) | Policies that limit network quota. |
| <!--DelRow-->[UidNetworkAccessPolicy](arkts-policy-uidnetworkaccesspolicy-i-sys.md) | Provides the container definition for network access policy key-value pairs. |

### Types

| Name | Description |
| --- | --- |
| [NetBearType](arkts-policy-netbeartype-t.md) | Get network bear type. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[LimitAction](arkts-policy-limitaction-e-sys.md) | The action when quota policy hit the limit. |
| <!--DelRow-->[NetBackgroundPolicy](arkts-policy-netbackgroundpolicy-e-sys.md) | Indicate whether the application can use metered networks in background. |
| <!--DelRow-->[NetUidPolicy](arkts-policy-netuidpolicy-e-sys.md) | Uid Specifies the Internet access policy in background mode. |
| <!--DelRow-->[NetUidRule](arkts-policy-netuidrule-e-sys.md) | Rules whether an uid can access to a metered or non-metered network. |
| <!--DelRow-->[RemindType](arkts-policy-remindtype-e-sys.md) | Specify the remind type, see {@link updateRemindPolicy}. |

