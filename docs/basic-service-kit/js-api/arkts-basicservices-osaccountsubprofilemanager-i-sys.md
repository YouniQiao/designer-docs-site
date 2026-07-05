# OsAccountSubProfileManager (System API)

Defines the OS account sub-profile manager class.

**Since:** 26.0.0

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## createOsAccountSubProfile

```TypeScript
createOsAccountSubProfile(osAccountLocalId: number): Promise<OsAccountSubProfile>
```

Creates an OS account sub-profile.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| osAccountLocalId | number | Yes | Local ID of the target OS account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountSubProfile&gt; | Promise used to return the created sub-profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | The OS account not found. |
| [12300008](../../apis-basic-services-kit/errorcode-account.md#12300008-restricted-account) | Restricted OS account. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Service busy. Possible causes: The target OS account is beingoperated. |
| [12300402](../../apis-basic-services-kit/errorcode-account.md#12300402-number-of-os-account-subprofiles-has-reached-the-upper-limit) | The number of sub-profiles under the OS account has reached limit. |

**Example**

Create an OS account sub-profile whose ID is 100.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let osAccountLocalId: number = 100;
try {
  subProfileManager.createOsAccountSubProfile(osAccountLocalId).then((subProfile: osAccount.OsAccountSubProfile) => {
    console.info('createOsAccountSubProfile successfully, subProfileId: ' + subProfile.id);
  }).catch((err: BusinessError) => {
    console.error(`createOsAccountSubProfile failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createOsAccountSubProfile exception: code is ${err.code}, message is ${err.message}`);
}

```

## deleteOsAccountSubProfile

```TypeScript
deleteOsAccountSubProfile(osAccountLocalId: number, subProfileId: number): Promise<void>
```

Deletes an OS account sub-profile.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| osAccountLocalId | number | Yes | Local ID of the target OS account. |
| subProfileId | number | Yes | ID of the sub-profile. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Service busy. Possible causes: The OS account or sub-profile is beingoperated. |
| [12300401](../../apis-basic-services-kit/errorcode-account.md#12300401-os-account-subprofile-not-found) | Sub-profile not found. |
| [12300403](../../apis-basic-services-kit/errorcode-account.md#12300403-restricted-os-account-subprofile) | Restricted sub-profile cannot be deleted. |
| [12300404](../../apis-basic-services-kit/errorcode-account.md#12300404-foreground-subprofile-of-the-os-account-cannot-be-deleted) | The foreground sub-profile cannot be deleted. |

**Example**

Delete the sub-profile whose ID is 100001 from OS account 100.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let osAccountLocalId: number = 100;
let subProfileId: number = 100001;
try {
  subProfileManager.deleteOsAccountSubProfile(osAccountLocalId, subProfileId).then(() => {
    console.info('deleteOsAccountSubProfile successfully');
  }).catch((err: BusinessError) => {
    console.error(`deleteOsAccountSubProfile failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`deleteOsAccountSubProfile exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountForegroundSubProfileId

```TypeScript
getOsAccountForegroundSubProfileId(): Promise<number>
```

Gets the foreground sub-profile ID of the OS account to which the caller belongs.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the id of the OS account foreground sub-profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300401](../../apis-basic-services-kit/errorcode-account.md#12300401-os-account-subprofile-not-found) | Sub-profile not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
try {
  subProfileManager.getOsAccountForegroundSubProfileId().then((subProfileId: number) => {
    console.info('getOsAccountForegroundSubProfileId successfully, subProfileId: ' + subProfileId);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountForegroundSubProfileId failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountForegroundSubProfileId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountForegroundSubProfileId

```TypeScript
getOsAccountForegroundSubProfileId(osAccountLocalId: number): Promise<number>
```

Gets the foreground sub-profile ID of a specified OS account.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| osAccountLocalId | number | Yes | Local ID of the OS account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the id of the OS account foreground sub-profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | OS account not found. |
| [12300401](../../apis-basic-services-kit/errorcode-account.md#12300401-os-account-subprofile-not-found) | The foreground sub-profile not found. |

**Example**

Obtain the foreground sub-profile ID of OS account 100.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let osAccountLocalId: number = 100;
try {
  subProfileManager.getOsAccountForegroundSubProfileId(osAccountLocalId).then((subProfileId: number) => {
    console.info('getOsAccountForegroundSubProfileId successfully, subProfileId: ' + subProfileId);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountForegroundSubProfileId failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountForegroundSubProfileId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdForSubProfile

```TypeScript
getOsAccountLocalIdForSubProfile(subProfileId: number): Promise<number>
```

Obtains the local ID of the OS account to which a sub-profile belongs.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subProfileId | number | Yes | ID of the sub-profile. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the local ID of the OS account to which a sub-profile belongs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300401](../../apis-basic-services-kit/errorcode-account.md#12300401-os-account-subprofile-not-found) | Sub-profile not found. |

**Example**

Obtains the local ID of the OS account of the sub-profile whose ID is 100001.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let subProfileId: number = 100001;
try {
  subProfileManager.getOsAccountLocalIdForSubProfile(subProfileId).then((osAccountLocalId: number) => {
    console.info('getOsAccountLocalIdForSubProfile successfully, osAccountLocalId: ' + osAccountLocalId);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountLocalIdForSubProfile failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIdForSubProfile exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountSubProfile

```TypeScript
getOsAccountSubProfile(subProfileId: number): Promise<OsAccountSubProfile>
```

Gets the sub-profile object information of the OS account to which the caller belongs.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subProfileId | number | Yes | ID of the sub-profile. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountSubProfile&gt; | Promise used to return the sub-profile object information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300401](../../apis-basic-services-kit/errorcode-account.md#12300401-os-account-subprofile-not-found) | Sub-profile not found. |

**Example**

Obtains the sub-profile whose ID is 100001.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let subProfileId: number = 100001;
try {
  subProfileManager.getOsAccountSubProfile(subProfileId).then((subProfile: osAccount.OsAccountSubProfile) => {
    console.info('getOsAccountSubProfile successfully, subProfile: ' + JSON.stringify(subProfile));
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountSubProfile failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountSubProfile exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountSubProfile

```TypeScript
getOsAccountSubProfile(osAccountLocalId: number, subProfileId: number): Promise<OsAccountSubProfile>
```

Gets the sub-profile object information of the specified OS account.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_LOCAL_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| osAccountLocalId | number | Yes | Local ID of the OS account. |
| subProfileId | number | Yes | ID of the sub-profile. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountSubProfile&gt; | Promise used to return the sub-profile object information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300401](../../apis-basic-services-kit/errorcode-account.md#12300401-os-account-subprofile-not-found) | Sub-profile not found. |

**Example**

Obtain the sub-profile whose ID is 100001 of OS account 100.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let osAccountLocalId: number = 100;
let subProfileId: number = 100001;
try {
  subProfileManager.getOsAccountSubProfile(osAccountLocalId, subProfileId).then((subProfile: osAccount.OsAccountSubProfile) => {
    console.info('getOsAccountSubProfile successfully, subProfile: ' + JSON.stringify(subProfile));
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountSubProfile failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountSubProfile exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountSubProfileIds

```TypeScript
getOsAccountSubProfileIds(): Promise<number[]>
```

Gets the ID list of sub-profile of the OS account to which the caller belongs.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number[]&gt; | Promise used to return the ID list of sub-profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
try {
  subProfileManager.getOsAccountSubProfileIds().then((subProfileIds: number[]) => {
    console.info('getOsAccountSubProfileIds successfully, subProfileIds: ' + subProfileIds);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountSubProfileIds failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountSubProfileIds exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountSubProfileIds

```TypeScript
getOsAccountSubProfileIds(osAccountLocalId: number): Promise<number[]>
```

Gets the ID list of sub-profile of a specified OS account.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| osAccountLocalId | number | Yes | Local ID of the OS account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number[]&gt; | Promise used to return the ID list of sub-profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | OS account not found. |

**Example**

Obtain the sub-profile IDs of OS account 100.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let osAccountLocalId: number = 100;
try {
  subProfileManager.getOsAccountSubProfileIds(osAccountLocalId).then((subProfileIds: number[]) => {
    console.info('getOsAccountSubProfileIds successfully, subProfileIds: ' + subProfileIds);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountSubProfileIds failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountSubProfileIds exception: code is ${err.code}, message is ${err.message}`);
}

```

## offOsAccountSubProfileEvent

```TypeScript
offOsAccountSubProfileEvent(callback?: Callback<OsAccountSubProfileEventData>): void
```

Unsubscribes from OS account sub-profile events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OsAccountSubProfileEventData&gt; | No | Callback to be unsubscribed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
try {
  subProfileManager.offOsAccountSubProfileEvent();
} catch (e) {
  const err = e as BusinessError;
  console.error(`offOsAccountSubProfileEvent failed, code is ${err.code}, message is ${err.message}`);
}

```

## onOsAccountSubProfileEvent

```TypeScript
onOsAccountSubProfileEvent(
      events: OsAccountSubProfileEvent[],
      callback: Callback<OsAccountSubProfileEventData>): void
```

Subscribes to OS account sub-profile events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| events | OsAccountSubProfileEvent[] | Yes | Array of events to be subscribed |
| callback | Callback&lt;OsAccountSubProfileEventData&gt; | Yes | Callback invoked when an event occurs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid event. |

**Example**

Subscribe to an OS account sub-profile creation event.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let events: osAccount.OsAccountSubProfileEvent[] = [osAccount.OsAccountSubProfileEvent.CREATED];
try {
  subProfileManager.onOsAccountSubProfileEvent(events, (data: osAccount.OsAccountSubProfileEventData) => {
    console.info('onOsAccountSubProfileEvent, event: ' + data.event + ', localId: ' + data.osAccountLocalId);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`onOsAccountSubProfileEvent failed, code is ${err.code}, message is ${err.message}`);
}

```

## switchOsAccountSubProfile

```TypeScript
switchOsAccountSubProfile(osAccountLocalId: number, subProfileId: number): Promise<void>
```

Switches to an OS account sub-profile.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| osAccountLocalId | number | Yes | Local ID of the OS account. |
| subProfileId | number | Yes | ID of the sub-profile. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Service busy. Possible causes: The OS account or sub-profile is beingoperated. |
| [12300401](../../apis-basic-services-kit/errorcode-account.md#12300401-os-account-subprofile-not-found) | Sub-profile not found. |
| [12300403](../../apis-basic-services-kit/errorcode-account.md#12300403-restricted-os-account-subprofile) | Restricted sub-profile cannot be switched to foreground. |
| [12300405](../../apis-basic-services-kit/errorcode-account.md#12300405-foreground-subprofile-with-a-loggedin-distributed-account-cannot-be-directly-switched-to-the-background) | The foreground sub-profile bound with a logged-in distributed accountcannot be directly switched to background. |

**Example**

Switch from the current sub-profile of OS account 100 to the sub-profile whose ID is 100001.

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();
let osAccountLocalId: number = 100;
let subProfileId: number = 100001;
try {
  subProfileManager.switchOsAccountSubProfile(osAccountLocalId, subProfileId).then(() => {
    console.info('switchOsAccountSubProfile successfully');
  }).catch((err: BusinessError) => {
    console.error(`switchOsAccountSubProfile failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`switchOsAccountSubProfile exception: code is ${err.code}, message is ${err.message}`);
}

```

