# SystemPasteboard

Provides **SystemPasteboard** APIs.Before calling any **SystemPasteboard** API, you must obtain a **SystemPasteboard** object using [getSystemPasteboard](arkts-basicservices-pasteboard-getsystempasteboard-f.md#getsystempasteboard-1).

**Since:** 6

<!--Device-pasteboard-interface SystemPasteboard--><!--Device-pasteboard-interface SystemPasteboard-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

<a id="removeappshareoptions"></a>
## removeAppShareOptions

```TypeScript
removeAppShareOptions(): void
```

Deletes the global pasteable range of the application.

**Since:** 14

**Required permissions:** 
- API version 14+: ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION

<!--Device-SystemPasteboard-removeAppShareOptions(): void--><!--Device-SystemPasteboard-removeAppShareOptions(): void-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 12 - 13 |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API.<br>**Applicable version:** 14 and later |

**Example**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
  systemPasteboard.removeAppShareOptions();
  console.info('Remove app share options success.');
} catch (error) {
  console.error(`Remove app share options failed, errorCode: ${error.code}, errorMessage: ${error.message}.`);
}

```

<a id="setappshareoptions"></a>
## setAppShareOptions

```TypeScript
setAppShareOptions(shareOptions: ShareOption): void
```

Sets pasteable range of PasteData for application.

**Since:** 14

**Required permissions:** 
- API version 14+: ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION

<!--Device-SystemPasteboard-setAppShareOptions(shareOptions: ShareOption): void--><!--Device-SystemPasteboard-setAppShareOptions(shareOptions: ShareOption): void-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shareOptions | [ShareOption](arkts-basicservices-pasteboard-shareoption-e.md) | Yes | Pasteable range. Only **pasteboard.ShareOption.INAPP** is allowed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 12 - 13 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [12900006](../../apis-basic-services-kit/errorcode-pasteboard.md#12900006-settings-already-exists) | Settings already exist. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API.<br>**Applicable version:** 14 and later |

**Example**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
  systemPasteboard.setAppShareOptions(pasteboard.ShareOption.INAPP);
  console.info('Set app share options success.');
} catch (error) {
  console.error(`Set app share options failed, errorCode: ${error.code}, errorMessage: ${error.message}.`);
}

```

