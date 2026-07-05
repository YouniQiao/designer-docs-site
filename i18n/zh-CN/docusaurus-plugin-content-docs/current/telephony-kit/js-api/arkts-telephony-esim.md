# @ohos.telephony.esim

This indicates that the eSIM card performs the profile management operation synchronously. Includes methods defined by GSMA Spec (SGP.22) and customized methods.

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

## 导入模块

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addProfile](arkts-esim-addprofile-f.md#addProfile-1) | Starts a page through an ability, on which users can touch the button to download a profile. |
| <!--DelRow-->[cancelSession](arkts-esim-cancelsession-f-sys.md#cancelSession-1) | Cancel session can be used in the 1.after the response to "ES9+.AuthenticateClient" 2.after the response to "ES9+.GetBoundProfilePackage" |
| <!--DelRow-->[deleteProfile](arkts-esim-deleteprofile-f-sys.md#deleteProfile-1) | Deletes the given profile from eUICC. |
| <!--DelRow-->[downloadProfile](arkts-esim-downloadprofile-f-sys.md#downloadProfile-1) | Attempt to download the given downloadable Profile. |
| <!--DelRow-->[getContractInfo](arkts-esim-getcontractinfo-f-sys.md#getContractInfo-1) | Get contract info |
| <!--DelRow-->[getDefaultSmdpAddress](arkts-esim-getdefaultsmdpaddress-f-sys.md#getDefaultSmdpAddress-1) | Gets the default SM-DP+ address stored in an eUICC. |
| <!--DelRow-->[getDownloadableProfileMetadata](arkts-esim-getdownloadableprofilemetadata-f-sys.md#getDownloadableProfileMetadata-1) | Fills in and gets the metadata for a downloadable profile. |
| <!--DelRow-->[getDownloadableProfiles](arkts-esim-getdownloadableprofiles-f-sys.md#getDownloadableProfiles-1) | Gets downloadable profile List which are available for download on this device. |
| <!--DelRow-->[getEid](arkts-esim-geteid-f-sys.md#getEid-1) | Returns the EID identifying for the eUICC hardware. |
| <!--DelRow-->[getEsimFreeStorage](arkts-esim-getesimfreestorage-f-sys.md#getEsimFreeStorage-1) | Returns the remaining storage space in KB for the eUICC hardware. |
| <!--DelRow-->[getEuiccInfo](arkts-esim-geteuiccinfo-f-sys.md#getEuiccInfo-1) | Returns the eUICC Information. |
| <!--DelRow-->[getEuiccProfileInfoList](arkts-esim-geteuiccprofileinfolist-f-sys.md#getEuiccProfileInfoList-1) | Returns a list of all eUICC profile information. |
| <!--DelRow-->[getOsuStatus](arkts-esim-getosustatus-f-sys.md#getOsuStatus-1) | Returns the current status of eUICC OS upgrade. |
| <!--DelRow-->[getSupportedPkids](arkts-esim-getsupportedpkids-f-sys.md#getSupportedPkids-1) | Get supported pkids |
| [isSupported](arkts-esim-issupported-f.md#isSupported-1) | Whether embedded subscriptions are currently supported. |
| <!--DelRow-->[reserveProfilesForFactoryRestore](arkts-esim-reserveprofilesforfactoryrestore-f-sys.md#reserveProfilesForFactoryRestore-1) | Ensure that profiles will be retained on the next factory reset. |
| <!--DelRow-->[resetMemory](arkts-esim-resetmemory-f-sys.md#resetMemory-1) | Erase all specific profiles and reset the eUICC. |
| <!--DelRow-->[setDefaultSmdpAddress](arkts-esim-setdefaultsmdpaddress-f-sys.md#setDefaultSmdpAddress-1) | Set or update the default SM-DP+ address stored in an eUICC. |
| <!--DelRow-->[setProfileNickname](arkts-esim-setprofilenickname-f-sys.md#setProfileNickname-1) | Adds or updates the given profile nickname. |
| <!--DelRow-->[startOsu](arkts-esim-startosu-f-sys.md#startOsu-1) | Execute OS upgrade if current OS upgrade is not the latest one. |
| <!--DelRow-->[switchToProfile](arkts-esim-switchtoprofile-f-sys.md#switchToProfile-1) | Switch to (enable) the given profile on the eUICC. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AccessRule](arkts-esim-accessrule-i.md) | Establishes a single UICC access rule pursuant to the GlobalPlatform Secure Element Access Control specification. |
| <!--DelRow-->[ContractRequestData](arkts-esim-contractrequestdata-i-sys.md) | Contract request data |
| [DownloadableProfile](arkts-esim-downloadableprofile-i.md) | Information about a profile which is downloadable to an eUICC using. |
| <!--DelRow-->[DownloadConfiguration](arkts-esim-downloadconfiguration-i-sys.md) | Specifies the download configuration. |
| <!--DelRow-->[DownloadProfileResult](arkts-esim-downloadprofileresult-i-sys.md) | Result of the given downloadable Profile. |
| <!--DelRow-->[EuiccInfo](arkts-esim-euiccinfo-i-sys.md) | Information related to eUICC chips/devices. |
| <!--DelRow-->[EuiccProfile](arkts-esim-euiccprofile-i-sys.md) | Information about an embedded profile (subscription) on an eUICC. |
| <!--DelRow-->[GetDownloadableProfileMetadataResult](arkts-esim-getdownloadableprofilemetadataresult-i-sys.md) | Result the metadata for a downloadableProfile. |
| <!--DelRow-->[GetDownloadableProfilesResult](arkts-esim-getdownloadableprofilesresult-i-sys.md) | Result of downloadable Profile list. |
| <!--DelRow-->[GetEuiccProfileInfoListResult](arkts-esim-geteuiccprofileinfolistresult-i-sys.md) | Result of all eUICC profile information. |
| <!--DelRow-->[OperatorId](arkts-esim-operatorid-i-sys.md) | Information about the eUICC chip/device. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CancelReason](arkts-esim-cancelreason-e-sys.md) | The reason for canceling a profile download session. |
| <!--DelRow-->[OsuStatus](arkts-esim-osustatus-e-sys.md) | Euicc OS upgrade status. |
| <!--DelRow-->[PolicyRules](arkts-esim-policyrules-e-sys.md) | The policy rules of the profile. |
| <!--DelRow-->[ProfileClass](arkts-esim-profileclass-e-sys.md) | The Profile class. |
| <!--DelRow-->[ProfileState](arkts-esim-profilestate-e-sys.md) | The profile state. |
| <!--DelRow-->[ResetOption](arkts-esim-resetoption-e-sys.md) | Options for resetting eUICC memory. |
| <!--DelRow-->[ResultCode](arkts-esim-resultcode-e-sys.md) | Result state. |
| <!--DelRow-->[SolvableErrors](arkts-esim-solvableerrors-e-sys.md) | The solvable errors. |

