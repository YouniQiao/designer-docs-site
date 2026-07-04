# @ohos.enterprise.telephonyManager

The **telephonyManager** module provides the telephony management capability. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a device administrator application that is enabled. For details, see > [MDM Kit Development](../../../../mdm/mdm-kit-guide.md). > > The global restriction policy is provided by **restrictions**. To disable telephony globally, see > [@ohos.enterprise.restrictions (Restrictions)](arkts-enterprise-restrictions.md#restrictions).

**Since:** 20

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { telephonyManager } from '@ohos.enterprise.telephonyManager';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [activeSim](arkts-mdm-activesim-f.md#activesim-1) | Activates the sim card. |
| [addIncomingCallPolicyNumbers](arkts-mdm-addincomingcallpolicynumbers-f.md#addincomingcallpolicynumbers-1) | Adds the trustlist or blocklist for incoming calls. If no list is set, all numbers can make incoming calls. Once a list is added, only numbers on the list are allowed (or blocked) from making incoming calls. A policy conflict is reported when this API is called in the following scenarios: 1. If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API, using this API to add an incoming call trustlist or blocklist will return error code 203. To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. 2. If an incoming call blocklist has been set via this API, using this API again to add an incoming call trustlist will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeIncomingCallPolicyNumbers](arkts-mdm-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers-1) API. 3. If an incoming call trustlist has been set via this API, using this API again to add an incoming call blocklist will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeIncomingCallPolicyNumbers](arkts-mdm-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers-1) API. |
| [addOutgoingCallPolicyNumbers](arkts-mdm-addoutgoingcallpolicynumbers-f.md#addoutgoingcallpolicynumbers-1) | Adds the trustlist or blocklist for outgoing calls. If no list is set, all numbers can make outgoing calls. Once a list is added, only numbers on the list are allowed (or blocked) from making outgoing calls. A policy conflict is reported when this API is called in the following scenarios: 1. If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API, using this API to add an outgoing call trustlist or blocklist will return error code 203. To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. 2. If an outgoing call blocklist has been set via this API, using this API again to add an outgoing call trustlist will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeOutgoingCallPolicyNumbers](arkts-mdm-removeoutgoingcallpolicynumbers-f.md#removeoutgoingcallpolicynumbers-1) API. 3. If an outgoing call trustlist has been set via this API, using this API again to add an outgoing call blocklist will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeOutgoingCallPolicyNumbers](arkts-mdm-removeoutgoingcallpolicynumbers-f.md#removeoutgoingcallpolicynumbers-1) API. |
| [deactiveSim](arkts-mdm-deactivesim-f.md#deactivesim-1) | Deactivates the sim card. |
| [getDefaultData](arkts-mdm-getdefaultdata-f.md#getdefaultdata-1) | Gets the default data traffic card. |
| [getIncomingCallPolicyNumbers](arkts-mdm-getincomingcallpolicynumbers-f.md#getincomingcallpolicynumbers-1) | Obtains the trustlist or blocklist for incoming calls. |
| [getOutgoingCallPolicyNumbers](arkts-mdm-getoutgoingcallpolicynumbers-f.md#getoutgoingcallpolicynumbers-1) | Obtains the trustlist or blocklist for outgoing calls. |
| [hangupCalling](arkts-mdm-hangupcalling-f.md#hangupcalling-1) | Ends the current call. Only carrier calls are supported, excluding MeeTime calls. |
| [isSimDisabled](arkts-mdm-issimdisabled-f.md#issimdisabled-1) | Checks whether the SIM card in a specified slot is disabled. |
| [removeIncomingCallPolicyNumbers](arkts-mdm-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers-1) | Removes the trustlist or blocklist for incoming calls. If the list is not set, the removal fails. A policy conflict is reported when this API is called in the following scenario: 1. If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API, using this API to remove an incoming call trustlist or blocklist will return error code 203. To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. |
| [removeOutgoingCallPolicyNumbers](arkts-mdm-removeoutgoingcallpolicynumbers-f.md#removeoutgoingcallpolicynumbers-1) | Removes the trustlist or blocklist for outgoing calls. If the list is not set, the removal fails. A policy conflict is reported when this API is called in the following scenario: If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API, using this API to remove an outgoing call trustlist or blocklist will return error code 203. To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. |
| [setDefaultData](arkts-mdm-setdefaultdata-f.md#setdefaultdata-1) | Sets the default data traffic card. |
| [setSimDisabled](arkts-mdm-setsimdisabled-f.md#setsimdisabled-1) | Disables the SIM card in a specified slot. |
| [setSimEnabled](arkts-mdm-setsimenabled-f.md#setsimenabled-1) | Enables the SIM card in a specified slot. After it has been disabled with **setSimDisabled**, the card must be turned back on manually in **Settings** &gt; **Mobile network** &gt; **SIM management**, as this **setSimEnabled** API cannot re-enable it directly. |

