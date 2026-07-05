# @ohos.telephony.sim

Provides applications with APIs for obtaining SIM card status, card file information, and card specifications. SIM cards include SIM, USIM, and CSIM cards.

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
| <!--DelRow-->[activateSim](arkts-sim-activatesim-f-sys.md#activateSim-1) | Activate the SIM card in the specified slot. |
| <!--DelRow-->[activateSim](arkts-sim-activatesim-f-sys.md#activateSim-2) | Activate the SIM card in the specified slot. |
| <!--DelRow-->[addIccDiallingNumbers](arkts-sim-addiccdiallingnumbers-f-sys.md#addIccDiallingNumbers-1) | Add dialing number information to SIM card. |
| <!--DelRow-->[addIccDiallingNumbers](arkts-sim-addiccdiallingnumbers-f-sys.md#addIccDiallingNumbers-2) | Add dialing number information to SIM card. |
| <!--DelRow-->[alterPin](arkts-sim-alterpin-f-sys.md#alterPin-1) | Change Pin Password. |
| <!--DelRow-->[alterPin](arkts-sim-alterpin-f-sys.md#alterPin-2) | Change Pin Password. |
| <!--DelRow-->[alterPin2](arkts-sim-alterpin2-f-sys.md#alterPin2-1) | Change Pin2 password. |
| <!--DelRow-->[alterPin2](arkts-sim-alterpin2-f-sys.md#alterPin2-2) | Change Pin2 password. |
| <!--DelRow-->[deactivateSim](arkts-sim-deactivatesim-f-sys.md#deactivateSim-1) | Disable SIM card in specified slot. |
| <!--DelRow-->[deactivateSim](arkts-sim-deactivatesim-f-sys.md#deactivateSim-2) | Disable SIM card in specified slot. |
| <!--DelRow-->[delIccDiallingNumbers](arkts-sim-deliccdiallingnumbers-f-sys.md#delIccDiallingNumbers-1) | Delete dialing number information on SIM card. |
| <!--DelRow-->[delIccDiallingNumbers](arkts-sim-deliccdiallingnumbers-f-sys.md#delIccDiallingNumbers-2) | Delete dialing number information on SIM card. |
| [getActiveSimAccountInfoList](arkts-sim-getactivesimaccountinfolist-f.md#getActiveSimAccountInfoList-1) | Get the list of active SIM card account information. |
| [getActiveSimAccountInfoList](arkts-sim-getactivesimaccountinfolist-f.md#getActiveSimAccountInfoList-2) | Get the list of active SIM card account information. |
| <!--DelRow-->[getAllSimAccountInfoList](arkts-sim-getallsimaccountinfolist-f-sys.md#getAllSimAccountInfoList-1) | Get the list of all SIM card account information. |
| <!--DelRow-->[getAllSimAccountInfoList](arkts-sim-getallsimaccountinfolist-f-sys.md#getAllSimAccountInfoList-2) | Get the list of all SIM card account information. |
| [getCardType](arkts-sim-getcardtype-f.md#getCardType-1) | Obtains the type of the SIM card installed in a specified slot. |
| [getCardType](arkts-sim-getcardtype-f.md#getCardType-2) | Obtains the type of the SIM card installed in a specified slot. |
| [getCardTypeSync](arkts-sim-getcardtypesync-f.md#getCardTypeSync-1) | Obtains the type of the SIM card inserted in a specified slot. |
| [getDefaultVoiceSimId](arkts-sim-getdefaultvoicesimid-f.md#getDefaultVoiceSimId-1) | Obtains the default SIM ID for the voice service. |
| [getDefaultVoiceSimId](arkts-sim-getdefaultvoicesimid-f.md#getDefaultVoiceSimId-2) | Obtains the default SIM ID for the voice service. |
| [getDefaultVoiceSlotId](arkts-sim-getdefaultvoiceslotid-f.md#getDefaultVoiceSlotId-1) | Obtains the default card slot for the voice service. |
| [getDefaultVoiceSlotId](arkts-sim-getdefaultvoiceslotid-f.md#getDefaultVoiceSlotId-2) | Obtains the default card slot for the voice service. |
| <!--DelRow-->[getDsdsMode](arkts-sim-getdsdsmode-f-sys.md#getDsdsMode-1) | Obtains the value of dsds mode. |
| <!--DelRow-->[getDsdsMode](arkts-sim-getdsdsmode-f-sys.md#getDsdsMode-2) | Obtains the value of dsds mode. |
| <!--DelRow-->[getIMSI](arkts-sim-getimsi-f-sys.md#getIMSI-1) | Get the international mobile subscriber ID. |
| <!--DelRow-->[getIMSI](arkts-sim-getimsi-f-sys.md#getIMSI-2) | Get the international mobile subscriber ID. |
| [getISOCountryCodeForSim](arkts-sim-getisocountrycodeforsim-f.md#getISOCountryCodeForSim-1) | Obtains the ISO country code of the SIM card in a specified slot. |
| [getISOCountryCodeForSim](arkts-sim-getisocountrycodeforsim-f.md#getISOCountryCodeForSim-2) | Obtains the ISO country code of the SIM card in a specified slot. |
| [getISOCountryCodeForSimSync](arkts-sim-getisocountrycodeforsimsync-f.md#getISOCountryCodeForSimSync-1) | Obtains the ISO country code of the SIM card in a specified slot. |
| <!--DelRow-->[getLockState](arkts-sim-getlockstate-f-sys.md#getLockState-1) | Get the lock status of the SIM card in the specified slot. |
| <!--DelRow-->[getLockState](arkts-sim-getlockstate-f-sys.md#getLockState-2) | Get the lock status of the SIM card in the specified slot. |
| [getMaxSimCount](arkts-sim-getmaxsimcount-f.md#getMaxSimCount-1) | Obtains the maximum number of SIM cards that can be used simultaneously on the device, that is, the maximum number of SIM card slots. |
| [getOpKey](arkts-sim-getopkey-f.md#getOpKey-1) | Obtains the operator key of the SIM card in a specified slot. |
| [getOpKey](arkts-sim-getopkey-f.md#getOpKey-2) | Obtains the operator key of the SIM card in a specified slot. |
| [getOpKeySync](arkts-sim-getopkeysync-f.md#getOpKeySync-1) | Obtains the operator key of the SIM card in a specified slot. |
| [getOpName](arkts-sim-getopname-f.md#getOpName-1) | Obtains the operator name of the SIM card in a specified slot. |
| [getOpName](arkts-sim-getopname-f.md#getOpName-2) | Obtains the operator name of the SIM card in a specified slot. |
| [getOpNameSync](arkts-sim-getopnamesync-f.md#getOpNameSync-1) | Obtains the operator name of the SIM card in a specified slot. |
| <!--DelRow-->[getOperatorConfigs](arkts-sim-getoperatorconfigs-f-sys.md#getOperatorConfigs-1) | Obtains the operatorconfigs of the SIM card in a specified slot. |
| <!--DelRow-->[getOperatorConfigs](arkts-sim-getoperatorconfigs-f-sys.md#getOperatorConfigs-2) | Obtains the operatorconfigs of the SIM card in a specified slot. |
| <!--DelRow-->[getShowName](arkts-sim-getshowname-f-sys.md#getShowName-1) | Gets the name of the SIM card in the specified slot. |
| <!--DelRow-->[getShowName](arkts-sim-getshowname-f-sys.md#getShowName-2) | Gets the name of the SIM card in the specified slot. |
| <!--DelRow-->[getShowNumber](arkts-sim-getshownumber-f-sys.md#getShowNumber-1) | Get the SIM card number of the specified card slot. |
| <!--DelRow-->[getShowNumber](arkts-sim-getshownumber-f-sys.md#getShowNumber-2) | Get the SIM card number of the specified card slot. |
| [getSimAccountInfo](arkts-sim-getsimaccountinfo-f.md#getSimAccountInfo-1) | Get account information of SIM card. |
| [getSimAccountInfo](arkts-sim-getsimaccountinfo-f.md#getSimAccountInfo-2) | Get account information of SIM card. |
| <!--DelRow-->[getSimAuthentication](arkts-sim-getsimauthentication-f-sys.md#getSimAuthentication-1) | Performs SIM card authentication. |
| <!--DelRow-->[getSimGid1](arkts-sim-getsimgid1-f-sys.md#getSimGid1-1) | Obtains the Group Identifier Level 1 (GID1) of the SIM card in a specified slot. The GID1 is recorded in the EFGID1 file of the SIM card. |
| <!--DelRow-->[getSimGid1](arkts-sim-getsimgid1-f-sys.md#getSimGid1-2) | Obtains the Group Identifier Level 1 (GID1) of the SIM card in a specified slot. The GID1 is recorded in the EFGID1 file of the SIM card. |
| <!--DelRow-->[getSimIccId](arkts-sim-getsimiccid-f-sys.md#getSimIccId-1) | Obtains the ICCID of the SIM card in a specified slot. <p>The ICCID is a unique identifier of a SIM card. It consists of 20 digits and is recorded in the EFICCID file of the SIM card. |
| <!--DelRow-->[getSimIccId](arkts-sim-getsimiccid-f-sys.md#getSimIccId-2) | Obtains the ICCID of the SIM card in a specified slot. <p>The ICCID is a unique identifier of a SIM card. It consists of 20 digits and is recorded in the EFICCID file of the SIM card. |
| [getSimLabel](arkts-sim-getsimlabel-f.md#getSimLabel-1) | Obtains the SIM card label. |
| [getSimLabel](arkts-sim-getsimlabel-f.md#getSimLabel-2) | Obtains the SIM card label. |
| [getSimLabelSync](arkts-sim-getsimlabelsync-f.md#getSimLabelSync-1) | Obtains the SIM card label synchronously. |
| [getSimOperatorNumeric](arkts-sim-getsimoperatornumeric-f.md#getSimOperatorNumeric-1) | Obtains the home PLMN number of the SIM card in a specified slot. <p>The value is recorded in the SIM card and is irrelevant to the network with which the SIM card is currently registered. |
| [getSimOperatorNumeric](arkts-sim-getsimoperatornumeric-f.md#getSimOperatorNumeric-2) | Obtains the home PLMN number of the SIM card in a specified slot. <p>The value is recorded in the SIM card and is irrelevant to the network with which the SIM card is currently registered. |
| [getSimOperatorNumericSync](arkts-sim-getsimoperatornumericsync-f.md#getSimOperatorNumericSync-1) | Obtains the home PLMN number of the SIM card in a specified slot. <p>The value is recorded in the SIM card and is irrelevant to the network with which the SIM card is currently registered. |
| [getSimSpn](arkts-sim-getsimspn-f.md#getSimSpn-1) | Obtains the service provider name (SPN) of the SIM card in a specified slot. <p>The value is recorded in the EFSPN file of the SIM card and is irrelevant to the network with which the SIM card is currently registered. |
| [getSimSpn](arkts-sim-getsimspn-f.md#getSimSpn-2) | Obtains the service provider name (SPN) of the SIM card in a specified slot. <p>The value is recorded in the EFSPN file of the SIM card and is irrelevant to the network with which the SIM card is currently registered. |
| [getSimSpnSync](arkts-sim-getsimspnsync-f.md#getSimSpnSync-1) | Obtains the service provider name (SPN) of the SIM card in a specified slot. <p>The value is recorded in the EFSPN file of the SIM card and is irrelevant to the network with which the SIM card is currently registered. |
| [getSimState](arkts-sim-getsimstate-f.md#getSimState-1) | Obtains the state of the SIM card in a specified slot. |
| [getSimState](arkts-sim-getsimstate-f.md#getSimState-2) | Obtains the state of the SIM card in a specified slot. |
| [getSimStateSync](arkts-sim-getsimstatesync-f.md#getSimStateSync-1) | Obtains the state of the SIM card in a specified slot. |
| <!--DelRow-->[getSimTelephoneNumber](arkts-sim-getsimtelephonenumber-f-sys.md#getSimTelephoneNumber-1) | Obtains the MSISDN of the SIM card in a specified slot. The MSISDN is recorded in the EFMSISDN file of the SIM card. |
| <!--DelRow-->[getSimTelephoneNumber](arkts-sim-getsimtelephonenumber-f-sys.md#getSimTelephoneNumber-2) | Obtains the MSISDN of the SIM card in a specified slot. The MSISDN is recorded in the EFMSISDN file of the SIM card. |
| <!--DelRow-->[getVoiceMailIdentifier](arkts-sim-getvoicemailidentifier-f-sys.md#getVoiceMailIdentifier-1) | Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot. |
| <!--DelRow-->[getVoiceMailIdentifier](arkts-sim-getvoicemailidentifier-f-sys.md#getVoiceMailIdentifier-2) | Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot. |
| <!--DelRow-->[getVoiceMailNumber](arkts-sim-getvoicemailnumber-f-sys.md#getVoiceMailNumber-1) | Obtains the voice mailbox number of the SIM card in a specified slot. |
| <!--DelRow-->[getVoiceMailNumber](arkts-sim-getvoicemailnumber-f-sys.md#getVoiceMailNumber-2) | Obtains the voice mailbox number of the SIM card in a specified slot. |
| [hasOperatorPrivileges](arkts-sim-hasoperatorprivileges-f.md#hasOperatorPrivileges-1) | Checks whether your application (the caller) has been granted the operator permissions. |
| [hasOperatorPrivileges](arkts-sim-hasoperatorprivileges-f.md#hasOperatorPrivileges-2) | Checks whether your application (the caller) has been granted the operator permissions. |
| [hasSimCard](arkts-sim-hassimcard-f.md#hasSimCard-1) | Checks whether a SIM card is inserted in a specified slot. |
| [hasSimCard](arkts-sim-hassimcard-f.md#hasSimCard-2) | Checks whether a SIM card is inserted in a specified slot. |
| [hasSimCardSync](arkts-sim-hassimcardsync-f.md#hasSimCardSync-1) | Checks whether a SIM card is inserted in a specified slot. |
| <!--DelRow-->[isOperatorSimCard](arkts-sim-isoperatorsimcard-f-sys.md#isOperatorSimCard-1) | Indicates whether the SIM card in a specified slot is a specified operator. |
| [isSimActive](arkts-sim-issimactive-f.md#isSimActive-1) | Checks whether the SIM card in a specified slot is activated. |
| [isSimActive](arkts-sim-issimactive-f.md#isSimActive-2) | Checks whether the SIM card in a specified slot is activated. |
| [isSimActiveSync](arkts-sim-issimactivesync-f.md#isSimActiveSync-1) | Checks whether the SIM card in a specified slot is activated. |
| <!--DelRow-->[queryIccDiallingNumbers](arkts-sim-queryiccdiallingnumbers-f-sys.md#queryIccDiallingNumbers-1) | Query dialing number information on SIM card. |
| <!--DelRow-->[queryIccDiallingNumbers](arkts-sim-queryiccdiallingnumbers-f-sys.md#queryIccDiallingNumbers-2) | Query dialing number information on SIM card. |
| <!--DelRow-->[sendEnvelopeCmd](arkts-sim-sendenvelopecmd-f-sys.md#sendEnvelopeCmd-1) | Send envelope command to SIM card. |
| <!--DelRow-->[sendEnvelopeCmd](arkts-sim-sendenvelopecmd-f-sys.md#sendEnvelopeCmd-2) | Send envelope command to SIM card. |
| <!--DelRow-->[sendTerminalResponseCmd](arkts-sim-sendterminalresponsecmd-f-sys.md#sendTerminalResponseCmd-1) | Send terminal response command to SIM card. |
| <!--DelRow-->[sendTerminalResponseCmd](arkts-sim-sendterminalresponsecmd-f-sys.md#sendTerminalResponseCmd-2) | Send terminal response command to SIM card. |
| <!--DelRow-->[setDefaultVoiceSlotId](arkts-sim-setdefaultvoiceslotid-f-sys.md#setDefaultVoiceSlotId-1) | Set the card slot ID of the default voice service. |
| <!--DelRow-->[setDefaultVoiceSlotId](arkts-sim-setdefaultvoiceslotid-f-sys.md#setDefaultVoiceSlotId-2) | Set the card slot ID of the default voice service. |
| <!--DelRow-->[setLockState](arkts-sim-setlockstate-f-sys.md#setLockState-1) | Set the lock status of the SIM card in the specified slot. |
| <!--DelRow-->[setLockState](arkts-sim-setlockstate-f-sys.md#setLockState-2) | Set the lock status of the SIM card in the specified slot. |
| <!--DelRow-->[setShowName](arkts-sim-setshowname-f-sys.md#setShowName-1) | Set the SIM card display name of the specified card slot. |
| <!--DelRow-->[setShowName](arkts-sim-setshowname-f-sys.md#setShowName-2) | Set the SIM card display name of the specified card slot. |
| <!--DelRow-->[setShowNumber](arkts-sim-setshownumber-f-sys.md#setShowNumber-1) | Set the SIM card number in the specified slot. |
| <!--DelRow-->[setShowNumber](arkts-sim-setshownumber-f-sys.md#setShowNumber-2) | Set the SIM card number in the specified slot. |
| <!--DelRow-->[setSimLabelIndex](arkts-sim-setsimlabelindex-f-sys.md#setSimLabelIndex-1) | Set the SIM card labelIndex. |
| <!--DelRow-->[setVoiceMailInfo](arkts-sim-setvoicemailinfo-f-sys.md#setVoiceMailInfo-1) | Sets the voice mail information. |
| <!--DelRow-->[setVoiceMailInfo](arkts-sim-setvoicemailinfo-f-sys.md#setVoiceMailInfo-2) | Sets the voice mail information. |
| <!--DelRow-->[unlockPin](arkts-sim-unlockpin-f-sys.md#unlockPin-1) | Unlock the SIM card password of the specified card slot. |
| <!--DelRow-->[unlockPin](arkts-sim-unlockpin-f-sys.md#unlockPin-2) | Unlock the SIM card password of the specified card slot. |
| <!--DelRow-->[unlockPin2](arkts-sim-unlockpin2-f-sys.md#unlockPin2-1) | Unlock the SIM card password of the specified card slot. |
| <!--DelRow-->[unlockPin2](arkts-sim-unlockpin2-f-sys.md#unlockPin2-2) | Unlock the SIM card password of the specified card slot. |
| <!--DelRow-->[unlockPuk](arkts-sim-unlockpuk-f-sys.md#unlockPuk-1) | Unlock the SIM card password in the specified card slot. |
| <!--DelRow-->[unlockPuk](arkts-sim-unlockpuk-f-sys.md#unlockPuk-2) | Unlock the SIM card password in the specified card slot. |
| <!--DelRow-->[unlockPuk2](arkts-sim-unlockpuk2-f-sys.md#unlockPuk2-1) | Unlock the SIM card password in the specified card slot. |
| <!--DelRow-->[unlockPuk2](arkts-sim-unlockpuk2-f-sys.md#unlockPuk2-2) | Unlock the SIM card password in the specified card slot. |
| <!--DelRow-->[unlockSimLock](arkts-sim-unlocksimlock-f-sys.md#unlockSimLock-1) | Unlock SIM card. |
| <!--DelRow-->[unlockSimLock](arkts-sim-unlocksimlock-f-sys.md#unlockSimLock-2) | Unlock SIM card. |
| <!--DelRow-->[updateIccDiallingNumbers](arkts-sim-updateiccdiallingnumbers-f-sys.md#updateIccDiallingNumbers-1) | Update dialing number information on SIM card. |
| <!--DelRow-->[updateIccDiallingNumbers](arkts-sim-updateiccdiallingnumbers-f-sys.md#updateIccDiallingNumbers-2) | Update dialing number information on SIM card. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[DiallingNumbersInfo](arkts-sim-diallingnumbersinfo-i-sys.md) | Defines the contact number information. |
| [IccAccountInfo](arkts-sim-iccaccountinfo-i.md) | Defines the ICC account information. |
| <!--DelRow-->[LockInfo](arkts-sim-lockinfo-i-sys.md) | Defines the personalized lock information. |
| <!--DelRow-->[LockStatusResponse](arkts-sim-lockstatusresponse-i-sys.md) | Defines the personalized lock information. |
| <!--DelRow-->[OperatorConfig](arkts-sim-operatorconfig-i-sys.md) | Defines the carrier configuration. |
| <!--DelRow-->[PersoLockInfo](arkts-sim-persolockinfo-i-sys.md) | Defines the personalized lock information. |
| <!--DelRow-->[SimAuthenticationResponse](arkts-sim-simauthenticationresponse-i-sys.md) | Defines the SIM card authentication response. |
| [SimLabel](arkts-sim-simlabel-i.md) | Defines the SIM card label. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[AuthType](arkts-sim-authtype-e-sys.md) | Indicates the Authentication type |
| [CardType](arkts-sim-cardtype-e.md) | Indicates the SIM card types. |
| <!--DelRow-->[ContactType](arkts-sim-contacttype-e-sys.md) | Indicates the contact types. |
| <!--DelRow-->[DsdsMode](arkts-sim-dsdsmode-e-sys.md) | Indicates the Dsds Mode. |
| <!--DelRow-->[LockState](arkts-sim-lockstate-e-sys.md) | Indicates the lock states. |
| <!--DelRow-->[LockType](arkts-sim-locktype-e-sys.md) | Indicates the lock types. |
| <!--DelRow-->[OperatorConfigKey](arkts-sim-operatorconfigkey-e-sys.md) | Indicates the carrier configuration keys. |
| <!--DelRow-->[OperatorSimCard](arkts-sim-operatorsimcard-e-sys.md) | Indicates the operator of SIM. |
| <!--DelRow-->[PersoLockType](arkts-sim-persolocktype-e-sys.md) | Indicates the personalized lock types. |
| [SimState](arkts-sim-simstate-e.md) | Indicates the SIM card states. |
| [SimType](arkts-sim-simtype-e.md) | Indicates the SIM card type. |

