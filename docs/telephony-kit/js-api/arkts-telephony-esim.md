# @ohos.telephony.esim

This indicates that the eSIM card performs the profile management operation synchronously. Includes methods defined by GSMA Spec (SGP.22) and customized methods.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addProfile](arkts-telephony-addprofile-f.md#addprofile-1) | Starts a page through an ability, on which users can touch the button to download a profile. |
| [isSupported](arkts-telephony-issupported-f.md#issupported-1) | Whether embedded subscriptions are currently supported. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [cancelSession](arkts-telephony-cancelsession-f-sys.md#cancelsession-1) | Cancel session can be used in the 1.after the response to "ES9+.AuthenticateClient" 2.after the response to "ES9+.GetBoundProfilePackage" |
| [deleteProfile](arkts-telephony-deleteprofile-f-sys.md#deleteprofile-1) | Deletes the given profile from eUICC. |
| [downloadProfile](arkts-telephony-downloadprofile-f-sys.md#downloadprofile-1) | Attempt to download the given downloadable Profile. |
| [getContractInfo](arkts-telephony-getcontractinfo-f-sys.md#getcontractinfo-1) | Get contract info |
| [getDefaultSmdpAddress](arkts-telephony-getdefaultsmdpaddress-f-sys.md#getdefaultsmdpaddress-1) | Gets the default SM-DP+ address stored in an eUICC. |
| [getDownloadableProfileMetadata](arkts-telephony-getdownloadableprofilemetadata-f-sys.md#getdownloadableprofilemetadata-1) | Fills in and gets the metadata for a downloadable profile. |
| [getDownloadableProfiles](arkts-telephony-getdownloadableprofiles-f-sys.md#getdownloadableprofiles-1) | Gets downloadable profile List which are available for download on this device. |
| [getEid](arkts-telephony-geteid-f-sys.md#geteid-1) | Returns the EID identifying for the eUICC hardware. |
| [getEsimFreeStorage](arkts-telephony-getesimfreestorage-f-sys.md#getesimfreestorage-1) | Returns the remaining storage space in KB for the eUICC hardware. |
| [getEuiccInfo](arkts-telephony-geteuiccinfo-f-sys.md#geteuiccinfo-1) | Returns the eUICC Information. |
| [getEuiccProfileInfoList](arkts-telephony-geteuiccprofileinfolist-f-sys.md#geteuiccprofileinfolist-1) | Returns a list of all eUICC profile information. |
| [getOsuStatus](arkts-telephony-getosustatus-f-sys.md#getosustatus-1) | Returns the current status of eUICC OS upgrade. |
| [getSupportedPkids](arkts-telephony-getsupportedpkids-f-sys.md#getsupportedpkids-1) | Get supported pkids |
| [reserveProfilesForFactoryRestore](arkts-telephony-reserveprofilesforfactoryrestore-f-sys.md#reserveprofilesforfactoryrestore-1) | Ensure that profiles will be retained on the next factory reset. |
| [resetMemory](arkts-telephony-resetmemory-f-sys.md#resetmemory-1) | Erase all specific profiles and reset the eUICC. |
| [setDefaultSmdpAddress](arkts-telephony-setdefaultsmdpaddress-f-sys.md#setdefaultsmdpaddress-1) | Set or update the default SM-DP+ address stored in an eUICC. |
| [setProfileNickname](arkts-telephony-setprofilenickname-f-sys.md#setprofilenickname-1) | Adds or updates the given profile nickname. |
| [startOsu](arkts-telephony-startosu-f-sys.md#startosu-1) | Execute OS upgrade if current OS upgrade is not the latest one. |
| [switchToProfile](arkts-telephony-switchtoprofile-f-sys.md#switchtoprofile-1) | Switch to (enable) the given profile on the eUICC. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AccessRule](arkts-telephony-accessrule-i.md) | Establishes a single UICC access rule pursuant to the GlobalPlatform Secure Element Access Control specification. |
| [DownloadableProfile](arkts-telephony-downloadableprofile-i.md) | Information about a profile which is downloadable to an eUICC using. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ContractRequestData](arkts-telephony-contractrequestdata-i-sys.md) | Contract request data |
| [DownloadConfiguration](arkts-telephony-downloadconfiguration-i-sys.md) | Specifies the download configuration. |
| [DownloadProfileResult](arkts-telephony-downloadprofileresult-i-sys.md) | Result of the given downloadable Profile. |
| [EuiccInfo](arkts-telephony-euiccinfo-i-sys.md) | Information related to eUICC chips/devices. |
| [EuiccProfile](arkts-telephony-euiccprofile-i-sys.md) | Information about an embedded profile (subscription) on an eUICC. |
| [GetDownloadableProfileMetadataResult](arkts-telephony-getdownloadableprofilemetadataresult-i-sys.md) | Result the metadata for a downloadableProfile. |
| [GetDownloadableProfilesResult](arkts-telephony-getdownloadableprofilesresult-i-sys.md) | Result of downloadable Profile list. |
| [GetEuiccProfileInfoListResult](arkts-telephony-geteuiccprofileinfolistresult-i-sys.md) | Result of all eUICC profile information. |
| [OperatorId](arkts-telephony-operatorid-i-sys.md) | Information about the eUICC chip/device. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [CancelReason](arkts-telephony-cancelreason-e-sys.md) | The reason for canceling a profile download session. |
| [OsuStatus](arkts-telephony-osustatus-e-sys.md) | Euicc OS upgrade status. |
| [PolicyRules](arkts-telephony-policyrules-e-sys.md) | The policy rules of the profile. |
| [ProfileClass](arkts-telephony-profileclass-e-sys.md) | The Profile class. |
| [ProfileState](arkts-telephony-profilestate-e-sys.md) | The profile state. |
| [ResetOption](arkts-telephony-resetoption-e-sys.md) | Options for resetting eUICC memory. |
| [ResultCode](arkts-telephony-resultcode-e-sys.md) | Result state. |
| [SolvableErrors](arkts-telephony-solvableerrors-e-sys.md) | The solvable errors. |
<!--DelEnd-->

