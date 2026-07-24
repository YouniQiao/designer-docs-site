# @ohos.enterprise.telephonyManager

The **telephonyManager** module provides the telephony management capability.
> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../mdm/mdm-kit-guide.md).  
>  
> The global restriction policy is provided by **restrictions**. To disable telephony globally, see  
> [@ohos.enterprise.restrictions (Restrictions)](arkts-enterprise-restrictions.md).

**Since:** 20

<!--Device-unnamed-declare namespace telephonyManager--><!--Device-unnamed-declare namespace telephonyManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { telephonyManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [activeSim](arkts-mdm-telephonymanager-activesim-f.md#activesim) | Activates the sim card. |
| [addIncomingCallPolicyNumbers](arkts-mdm-telephonymanager-addincomingcallpolicynumbers-f.md#addincomingcallpolicynumbers) | Adds the trustlist or blocklist for incoming calls. If no list is set, all numbers can make incoming calls. Once a list is added, only numbers on the list are allowed (or blocked) from making incoming calls.  A policy conflict is reported when this API is called in the following scenarios:  1. If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API, using this API to add an incoming call trustlist or blocklist will return error code 203.To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API.2. If an incoming call blocklist has been set via this API, using this API again to add an incoming call trustlist will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeIncomingCallPolicyNumbers](arkts-mdm-telephonymanager-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers) API.3. If an incoming call trustlist has been set via this API, using this API again to add an incoming call blocklist will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeIncomingCallPolicyNumbers](arkts-mdm-telephonymanager-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers) API. |
| [addOutgoingCallPolicyNumbers](arkts-mdm-telephonymanager-addoutgoingcallpolicynumbers-f.md#addoutgoingcallpolicynumbers) | Adds the trustlist or blocklist for outgoing calls. If no list is set, all numbers can make outgoing calls. Once a list is added, only numbers on the list are allowed (or blocked) from making outgoing calls.  A policy conflict is reported when this API is called in the following scenarios:  1. If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API, using this API to add an outgoing call trustlist or blocklist will return error code 203. To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API.2. If an outgoing call blocklist has been set via this API, using this API again to add an outgoing call trustlist will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeOutgoingCallPolicyNumbers](arkts-mdm-telephonymanager-removeoutgoingcallpolicynumbers-f.md#removeoutgoingcallpolicynumbers)API.3. If an outgoing call trustlist has been set via this API, using this API again to add an outgoing call blocklist will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeOutgoingCallPolicyNumbers](arkts-mdm-telephonymanager-removeoutgoingcallpolicynumbers-f.md#removeoutgoingcallpolicynumbers)API. |
| [deactiveSim](arkts-mdm-telephonymanager-deactivesim-f.md#deactivesim) | Deactivates the sim card. |
| [getDefaultData](arkts-mdm-telephonymanager-getdefaultdata-f.md#getdefaultdata) | Gets the default data traffic card. |
| [getIncomingCallPolicyNumbers](arkts-mdm-telephonymanager-getincomingcallpolicynumbers-f.md#getincomingcallpolicynumbers) | Obtains the trustlist or blocklist for incoming calls. |
| [getOutgoingCallPolicyNumbers](arkts-mdm-telephonymanager-getoutgoingcallpolicynumbers-f.md#getoutgoingcallpolicynumbers) | Obtains the trustlist or blocklist for outgoing calls. |
| [hangupCalling](arkts-mdm-telephonymanager-hangupcalling-f.md#hangupcalling) | Ends the current call. Only carrier calls are supported, excluding MeeTime calls. |
| [isSimDisabled](arkts-mdm-telephonymanager-issimdisabled-f.md#issimdisabled) | Checks whether the SIM card in a specified slot is disabled. |
| [removeIncomingCallPolicyNumbers](arkts-mdm-telephonymanager-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers) | Removes the trustlist or blocklist for incoming calls. If the list is not set, the removal fails.  A policy conflict is reported when this API is called in the following scenario:  1. If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API, using this API to remove an incoming call trustlist or blocklist will return error code 203. To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API. |
| [removeOutgoingCallPolicyNumbers](arkts-mdm-telephonymanager-removeoutgoingcallpolicynumbers-f.md#removeoutgoingcallpolicynumbers) | Removes the trustlist or blocklist for outgoing calls. If the list is not set, the removal fails.  A policy conflict is reported when this API is called in the following scenario:  If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API, using this API to remove an outgoing call trustlist or blocklist will return error code 203. To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API. |
| [setDefaultData](arkts-mdm-telephonymanager-setdefaultdata-f.md#setdefaultdata) | Sets the default data traffic card. |
| [setSimDisabled](arkts-mdm-telephonymanager-setsimdisabled-f.md#setsimdisabled) | Disables the SIM card in a specified slot. |
| [setSimEnabled](arkts-mdm-telephonymanager-setsimenabled-f.md#setsimenabled) | Enables the SIM card in a specified slot. After it has been disabled with **setSimDisabled**, the card must be turned back on manually in **Settings** > **Mobile network** > **SIM management**, as this **setSimEnabled** API cannot re-enable it directly. |

