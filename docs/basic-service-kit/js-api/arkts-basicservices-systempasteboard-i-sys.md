# SystemPasteboard

Provides **SystemPasteboard** APIs.
Before calling any **SystemPasteboard** API, you must obtain a **SystemPasteboard** object using
[getSystemPasteboard](arkts-basicservices-getsystempasteboard-f.md#getsystempasteboard-1).

**Since:** 6

**System capability:** SystemCapability.MiscServices.Pasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## removeAppShareOptions

```TypeScript
removeAppShareOptions(): void
```

Deletes the global pasteable range of the application.

**Since:** 14

**Required permissions:** 
- API version 14+: ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION

**System capability:** SystemCapability.MiscServices.Pasteboard

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 12 - 13 |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have thepermission required to call the API.<br>**Applicable version:** 14 and later |

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

## setAppShareOptions

```TypeScript
setAppShareOptions(shareOptions: ShareOption): void
```

Sets pasteable range of PasteData for application.

**Since:** 14

**Required permissions:** 
- API version 14+: ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION

**System capability:** SystemCapability.MiscServices.Pasteboard

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shareOptions | ShareOption | Yes | Pasteable range. Only **pasteboard.ShareOption.INAPP** is allowed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 12 - 13 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [12900006](../../apis-basic-services-kit/errorcode-pasteboard.md#12900006-settings-already-exists) | Settings already exist. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have thepermission required to call the API.<br>**Applicable version:** 14 and later |

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

