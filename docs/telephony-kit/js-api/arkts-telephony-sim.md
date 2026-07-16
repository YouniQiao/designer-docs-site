# @ohos.telephony.sim

Provides applications with APIs for obtaining SIM card status, card file information, and card specifications.
SIM cards include SIM, USIM, and CSIM cards.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getActiveSimAccountInfoList](arkts-telephony-getactivesimaccountinfolist-f.md#getactivesimaccountinfolist-1) | Get the list of active SIM card account information. |
| [getActiveSimAccountInfoList](arkts-telephony-getactivesimaccountinfolist-f.md#getactivesimaccountinfolist-2) | Get the list of active SIM card account information. |
| [getCardType](arkts-telephony-getcardtype-f.md#getcardtype-1) | Obtains the type of the SIM card installed in a specified slot. |
| [getCardType](arkts-telephony-getcardtype-f.md#getcardtype-2) | Obtains the type of the SIM card installed in a specified slot. |
| [getCardTypeSync](arkts-telephony-getcardtypesync-f.md#getcardtypesync-1) | Obtains the type of the SIM card inserted in a specified slot. |
| [getDefaultVoiceSimId](arkts-telephony-getdefaultvoicesimid-f.md#getdefaultvoicesimid-1) | Obtains the default SIM ID for the voice service. |
| [getDefaultVoiceSimId](arkts-telephony-getdefaultvoicesimid-f.md#getdefaultvoicesimid-2) | Obtains the default SIM ID for the voice service. |
| [getDefaultVoiceSlotId](arkts-telephony-getdefaultvoiceslotid-f.md#getdefaultvoiceslotid-1) | Obtains the default card slot for the voice service. |
| [getDefaultVoiceSlotId](arkts-telephony-getdefaultvoiceslotid-f.md#getdefaultvoiceslotid-2) | Obtains the default card slot for the voice service. |
| [getISOCountryCodeForSim](arkts-telephony-getisocountrycodeforsim-f.md#getisocountrycodeforsim-1) | Obtains the ISO country code of the SIM card in a specified slot. |
| [getISOCountryCodeForSim](arkts-telephony-getisocountrycodeforsim-f.md#getisocountrycodeforsim-2) | Obtains the ISO country code of the SIM card in a specified slot. |
| [getISOCountryCodeForSimSync](arkts-telephony-getisocountrycodeforsimsync-f.md#getisocountrycodeforsimsync-1) | Obtains the ISO country code of the SIM card in a specified slot. |
| [getMaxSimCount](arkts-telephony-getmaxsimcount-f.md#getmaxsimcount-1) | Obtains the maximum number of SIM cards that can be used simultaneously on the device,that is, the maximum number of SIM card slots. |
| [getOpKey](arkts-telephony-getopkey-f.md#getopkey-1) | Obtains the operator key of the SIM card in a specified slot. |
| [getOpKey](arkts-telephony-getopkey-f.md#getopkey-2) | Obtains the operator key of the SIM card in a specified slot. |
| [getOpKeySync](arkts-telephony-getopkeysync-f.md#getopkeysync-1) | Obtains the operator key of the SIM card in a specified slot. |
| [getOpName](arkts-telephony-getopname-f.md#getopname-1) | Obtains the operator name of the SIM card in a specified slot. |
| [getOpName](arkts-telephony-getopname-f.md#getopname-2) | Obtains the operator name of the SIM card in a specified slot. |
| [getOpNameSync](arkts-telephony-getopnamesync-f.md#getopnamesync-1) | Obtains the operator name of the SIM card in a specified slot. |
| [getSimAccountInfo](arkts-telephony-getsimaccountinfo-f.md#getsimaccountinfo-1) | Get account information of SIM card. |
| [getSimAccountInfo](arkts-telephony-getsimaccountinfo-f.md#getsimaccountinfo-2) | Get account information of SIM card. |
| [getSimLabel](arkts-telephony-getsimlabel-f.md#getsimlabel-1) | Obtains the SIM card label. |
| [getSimLabel](arkts-telephony-getsimlabel-f.md#getsimlabel-2) | Obtains the SIM card label. |
| [getSimLabelSync](arkts-telephony-getsimlabelsync-f.md#getsimlabelsync-1) | Obtains the SIM card label synchronously. |
| [getSimOperatorNumeric](arkts-telephony-getsimoperatornumeric-f.md#getsimoperatornumeric-1) | Obtains the home PLMN number of the SIM card in a specified slot.&lt;p&gt;The value is recorded in the SIM card and is irrelevant to the networkwith which the SIM card is currently registered. |
| [getSimOperatorNumeric](arkts-telephony-getsimoperatornumeric-f.md#getsimoperatornumeric-2) | Obtains the home PLMN number of the SIM card in a specified slot.&lt;p&gt;The value is recorded in the SIM card and is irrelevant to the networkwith which the SIM card is currently registered. |
| [getSimOperatorNumericSync](arkts-telephony-getsimoperatornumericsync-f.md#getsimoperatornumericsync-1) | Obtains the home PLMN number of the SIM card in a specified slot.&lt;p&gt;The value is recorded in the SIM card and is irrelevant to the networkwith which the SIM card is currently registered. |
| [getSimSpn](arkts-telephony-getsimspn-f.md#getsimspn-1) | Obtains the service provider name (SPN) of the SIM card in a specified slot.&lt;p&gt;The value is recorded in the EFSPN file of the SIM card and is irrelevant to the networkwith which the SIM card is currently registered. |
| [getSimSpn](arkts-telephony-getsimspn-f.md#getsimspn-2) | Obtains the service provider name (SPN) of the SIM card in a specified slot.&lt;p&gt;The value is recorded in the EFSPN file of the SIM card and is irrelevant to the networkwith which the SIM card is currently registered. |
| [getSimSpnSync](arkts-telephony-getsimspnsync-f.md#getsimspnsync-1) | Obtains the service provider name (SPN) of the SIM card in a specified slot.&lt;p&gt;The value is recorded in the EFSPN file of the SIM card and is irrelevant to the networkwith which the SIM card is currently registered. |
| [getSimState](arkts-telephony-getsimstate-f.md#getsimstate-1) | Obtains the state of the SIM card in a specified slot. |
| [getSimState](arkts-telephony-getsimstate-f.md#getsimstate-2) | Obtains the state of the SIM card in a specified slot. |
| [getSimStateSync](arkts-telephony-getsimstatesync-f.md#getsimstatesync-1) | Obtains the state of the SIM card in a specified slot. |
| [hasOperatorPrivileges](arkts-telephony-hasoperatorprivileges-f.md#hasoperatorprivileges-1) | Checks whether your application (the caller) has been granted the operator permissions. |
| [hasOperatorPrivileges](arkts-telephony-hasoperatorprivileges-f.md#hasoperatorprivileges-2) | Checks whether your application (the caller) has been granted the operator permissions. |
| [hasSimCard](arkts-telephony-hassimcard-f.md#hassimcard-1) | Checks whether a SIM card is inserted in a specified slot. |
| [hasSimCard](arkts-telephony-hassimcard-f.md#hassimcard-2) | Checks whether a SIM card is inserted in a specified slot. |
| [hasSimCardSync](arkts-telephony-hassimcardsync-f.md#hassimcardsync-1) | Checks whether a SIM card is inserted in a specified slot. |
| [isSimActive](arkts-telephony-issimactive-f.md#issimactive-1) | Checks whether the SIM card in a specified slot is activated. |
| [isSimActive](arkts-telephony-issimactive-f.md#issimactive-2) | Checks whether the SIM card in a specified slot is activated. |
| [isSimActiveSync](arkts-telephony-issimactivesync-f.md#issimactivesync-1) | Checks whether the SIM card in a specified slot is activated. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [activateSim](arkts-telephony-activatesim-f-sys.md#activatesim-1) | Activate the SIM card in the specified slot. |
| [activateSim](arkts-telephony-activatesim-f-sys.md#activatesim-2) | Activate the SIM card in the specified slot. |
| [addIccDiallingNumbers](arkts-telephony-addiccdiallingnumbers-f-sys.md#addiccdiallingnumbers-1) | Add dialing number information to SIM card. |
| [addIccDiallingNumbers](arkts-telephony-addiccdiallingnumbers-f-sys.md#addiccdiallingnumbers-2) | Add dialing number information to SIM card. |
| [alterPin](arkts-telephony-alterpin-f-sys.md#alterpin-1) | Change Pin Password. |
| [alterPin](arkts-telephony-alterpin-f-sys.md#alterpin-2) | Change Pin Password. |
| [alterPin2](arkts-telephony-alterpin2-f-sys.md#alterpin2-1) | Change Pin2 password. |
| [alterPin2](arkts-telephony-alterpin2-f-sys.md#alterpin2-2) | Change Pin2 password. |
| [deactivateSim](arkts-telephony-deactivatesim-f-sys.md#deactivatesim-1) | Disable SIM card in specified slot. |
| [deactivateSim](arkts-telephony-deactivatesim-f-sys.md#deactivatesim-2) | Disable SIM card in specified slot. |
| [delIccDiallingNumbers](arkts-telephony-deliccdiallingnumbers-f-sys.md#deliccdiallingnumbers-1) | Delete dialing number information on SIM card. |
| [delIccDiallingNumbers](arkts-telephony-deliccdiallingnumbers-f-sys.md#deliccdiallingnumbers-2) | Delete dialing number information on SIM card. |
| [getAllSimAccountInfoList](arkts-telephony-getallsimaccountinfolist-f-sys.md#getallsimaccountinfolist-1) | Get the list of all SIM card account information. |
| [getAllSimAccountInfoList](arkts-telephony-getallsimaccountinfolist-f-sys.md#getallsimaccountinfolist-2) | Get the list of all SIM card account information. |
| [getDsdsMode](arkts-telephony-getdsdsmode-f-sys.md#getdsdsmode-1) | Obtains the value of dsds mode. |
| [getDsdsMode](arkts-telephony-getdsdsmode-f-sys.md#getdsdsmode-2) | Obtains the value of dsds mode. |
| [getIMSI](arkts-telephony-getimsi-f-sys.md#getimsi-1) | Get the international mobile subscriber ID. |
| [getIMSI](arkts-telephony-getimsi-f-sys.md#getimsi-2) | Get the international mobile subscriber ID. |
| [getLockState](arkts-telephony-getlockstate-f-sys.md#getlockstate-1) | Get the lock status of the SIM card in the specified slot. |
| [getLockState](arkts-telephony-getlockstate-f-sys.md#getlockstate-2) | Get the lock status of the SIM card in the specified slot. |
| [getOperatorConfigs](arkts-telephony-getoperatorconfigs-f-sys.md#getoperatorconfigs-1) | Obtains the operatorconfigs of the SIM card in a specified slot. |
| [getOperatorConfigs](arkts-telephony-getoperatorconfigs-f-sys.md#getoperatorconfigs-2) | Obtains the operatorconfigs of the SIM card in a specified slot. |
| [getShowName](arkts-telephony-getshowname-f-sys.md#getshowname-1) | Gets the name of the SIM card in the specified slot. |
| [getShowName](arkts-telephony-getshowname-f-sys.md#getshowname-2) | Gets the name of the SIM card in the specified slot. |
| [getShowNumber](arkts-telephony-getshownumber-f-sys.md#getshownumber-1) | Get the SIM card number of the specified card slot. |
| [getShowNumber](arkts-telephony-getshownumber-f-sys.md#getshownumber-2) | Get the SIM card number of the specified card slot. |
| [getSimAuthentication](arkts-telephony-getsimauthentication-f-sys.md#getsimauthentication-1) | Performs SIM card authentication. |
| [getSimGid1](arkts-telephony-getsimgid1-f-sys.md#getsimgid1-1) | Obtains the Group Identifier Level 1 (GID1) of the SIM card in a specified slot.The GID1 is recorded in the EFGID1 file of the SIM card. |
| [getSimGid1](arkts-telephony-getsimgid1-f-sys.md#getsimgid1-2) | Obtains the Group Identifier Level 1 (GID1) of the SIM card in a specified slot.The GID1 is recorded in the EFGID1 file of the SIM card. |
| [getSimIccId](arkts-telephony-getsimiccid-f-sys.md#getsimiccid-1) | Obtains the ICCID of the SIM card in a specified slot.&lt;p&gt;The ICCID is a unique identifier of a SIM card. It consists of 20 digitsand is recorded in the EFICCID file of the SIM card. |
| [getSimIccId](arkts-telephony-getsimiccid-f-sys.md#getsimiccid-2) | Obtains the ICCID of the SIM card in a specified slot.&lt;p&gt;The ICCID is a unique identifier of a SIM card. It consists of 20 digitsand is recorded in the EFICCID file of the SIM card. |
| [getSimTelephoneNumber](arkts-telephony-getsimtelephonenumber-f-sys.md#getsimtelephonenumber-1) | Obtains the MSISDN of the SIM card in a specified slot.The MSISDN is recorded in the EFMSISDN file of the SIM card. |
| [getSimTelephoneNumber](arkts-telephony-getsimtelephonenumber-f-sys.md#getsimtelephonenumber-2) | Obtains the MSISDN of the SIM card in a specified slot.The MSISDN is recorded in the EFMSISDN file of the SIM card. |
| [getVoiceMailIdentifier](arkts-telephony-getvoicemailidentifier-f-sys.md#getvoicemailidentifier-1) | Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot. |
| [getVoiceMailIdentifier](arkts-telephony-getvoicemailidentifier-f-sys.md#getvoicemailidentifier-2) | Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot. |
| [getVoiceMailNumber](arkts-telephony-getvoicemailnumber-f-sys.md#getvoicemailnumber-1) | Obtains the voice mailbox number of the SIM card in a specified slot. |
| [getVoiceMailNumber](arkts-telephony-getvoicemailnumber-f-sys.md#getvoicemailnumber-2) | Obtains the voice mailbox number of the SIM card in a specified slot. |
| [isOperatorSimCard](arkts-telephony-isoperatorsimcard-f-sys.md#isoperatorsimcard-1) | Indicates whether the SIM card in a specified slot is a specified operator. |
| [queryIccDiallingNumbers](arkts-telephony-queryiccdiallingnumbers-f-sys.md#queryiccdiallingnumbers-1) | Query dialing number information on SIM card. |
| [queryIccDiallingNumbers](arkts-telephony-queryiccdiallingnumbers-f-sys.md#queryiccdiallingnumbers-2) | Query dialing number information on SIM card. |
| [sendEnvelopeCmd](arkts-telephony-sendenvelopecmd-f-sys.md#sendenvelopecmd-1) | Send envelope command to SIM card. |
| [sendEnvelopeCmd](arkts-telephony-sendenvelopecmd-f-sys.md#sendenvelopecmd-2) | Send envelope command to SIM card. |
| [sendTerminalResponseCmd](arkts-telephony-sendterminalresponsecmd-f-sys.md#sendterminalresponsecmd-1) | Send terminal response command to SIM card. |
| [sendTerminalResponseCmd](arkts-telephony-sendterminalresponsecmd-f-sys.md#sendterminalresponsecmd-2) | Send terminal response command to SIM card. |
| [setDefaultVoiceSlotId](arkts-telephony-setdefaultvoiceslotid-f-sys.md#setdefaultvoiceslotid-1) | Set the card slot ID of the default voice service. |
| [setDefaultVoiceSlotId](arkts-telephony-setdefaultvoiceslotid-f-sys.md#setdefaultvoiceslotid-2) | Set the card slot ID of the default voice service. |
| [setLockState](arkts-telephony-setlockstate-f-sys.md#setlockstate-1) | Set the lock status of the SIM card in the specified slot. |
| [setLockState](arkts-telephony-setlockstate-f-sys.md#setlockstate-2) | Set the lock status of the SIM card in the specified slot. |
| [setShowName](arkts-telephony-setshowname-f-sys.md#setshowname-1) | Set the SIM card display name of the specified card slot. |
| [setShowName](arkts-telephony-setshowname-f-sys.md#setshowname-2) | Set the SIM card display name of the specified card slot. |
| [setShowNumber](arkts-telephony-setshownumber-f-sys.md#setshownumber-1) | Set the SIM card number in the specified slot. |
| [setShowNumber](arkts-telephony-setshownumber-f-sys.md#setshownumber-2) | Set the SIM card number in the specified slot. |
| [setSimLabelIndex](arkts-telephony-setsimlabelindex-f-sys.md#setsimlabelindex-1) | Set the SIM card labelIndex. |
| [setVoiceMailInfo](arkts-telephony-setvoicemailinfo-f-sys.md#setvoicemailinfo-1) | Sets the voice mail information. |
| [setVoiceMailInfo](arkts-telephony-setvoicemailinfo-f-sys.md#setvoicemailinfo-2) | Sets the voice mail information. |
| [unlockPin](arkts-telephony-unlockpin-f-sys.md#unlockpin-1) | Unlock the SIM card password of the specified card slot. |
| [unlockPin](arkts-telephony-unlockpin-f-sys.md#unlockpin-2) | Unlock the SIM card password of the specified card slot. |
| [unlockPin2](arkts-telephony-unlockpin2-f-sys.md#unlockpin2-1) | Unlock the SIM card password of the specified card slot. |
| [unlockPin2](arkts-telephony-unlockpin2-f-sys.md#unlockpin2-2) | Unlock the SIM card password of the specified card slot. |
| [unlockPuk](arkts-telephony-unlockpuk-f-sys.md#unlockpuk-1) | Unlock the SIM card password in the specified card slot. |
| [unlockPuk](arkts-telephony-unlockpuk-f-sys.md#unlockpuk-2) | Unlock the SIM card password in the specified card slot. |
| [unlockPuk2](arkts-telephony-unlockpuk2-f-sys.md#unlockpuk2-1) | Unlock the SIM card password in the specified card slot. |
| [unlockPuk2](arkts-telephony-unlockpuk2-f-sys.md#unlockpuk2-2) | Unlock the SIM card password in the specified card slot. |
| [unlockSimLock](arkts-telephony-unlocksimlock-f-sys.md#unlocksimlock-1) | Unlock SIM card. |
| [unlockSimLock](arkts-telephony-unlocksimlock-f-sys.md#unlocksimlock-2) | Unlock SIM card. |
| [updateIccDiallingNumbers](arkts-telephony-updateiccdiallingnumbers-f-sys.md#updateiccdiallingnumbers-1) | Update dialing number information on SIM card. |
| [updateIccDiallingNumbers](arkts-telephony-updateiccdiallingnumbers-f-sys.md#updateiccdiallingnumbers-2) | Update dialing number information on SIM card. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [IccAccountInfo](arkts-telephony-iccaccountinfo-i.md) | Defines the ICC account information. |
| [SimLabel](arkts-telephony-simlabel-i.md) | Defines the SIM card label. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DiallingNumbersInfo](arkts-telephony-diallingnumbersinfo-i-sys.md) | Defines the contact number information. |
| [IccAccountInfo](arkts-telephony-iccaccountinfo-i-sys.md) | Defines the ICC account information. |
| [LockInfo](arkts-telephony-lockinfo-i-sys.md) | Defines the personalized lock information. |
| [LockStatusResponse](arkts-telephony-lockstatusresponse-i-sys.md) | Defines the personalized lock information. |
| [OperatorConfig](arkts-telephony-operatorconfig-i-sys.md) | Defines the carrier configuration. |
| [PersoLockInfo](arkts-telephony-persolockinfo-i-sys.md) | Defines the personalized lock information. |
| [SimAuthenticationResponse](arkts-telephony-simauthenticationresponse-i-sys.md) | Defines the SIM card authentication response. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [CardType](arkts-telephony-cardtype-e.md) | Indicates the SIM card types. |
| [SimState](arkts-telephony-simstate-e.md) | Indicates the SIM card states. |
| [SimType](arkts-telephony-simtype-e.md) | Indicates the SIM card type. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AuthType](arkts-telephony-authtype-e-sys.md) | Indicates the Authentication type |
| [ContactType](arkts-telephony-contacttype-e-sys.md) | Indicates the contact types. |
| [DsdsMode](arkts-telephony-dsdsmode-e-sys.md) | Indicates the Dsds Mode. |
| [LockState](arkts-telephony-lockstate-e-sys.md) | Indicates the lock states. |
| [LockType](arkts-telephony-locktype-e-sys.md) | Indicates the lock types. |
| [OperatorConfigKey](arkts-telephony-operatorconfigkey-e-sys.md) | Indicates the carrier configuration keys. |
| [OperatorSimCard](arkts-telephony-operatorsimcard-e-sys.md) | Indicates the operator of SIM. |
| [PersoLockType](arkts-telephony-persolocktype-e-sys.md) | Indicates the personalized lock types. |
<!--DelEnd-->

