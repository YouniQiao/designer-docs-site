# addProfile

## addProfile

```TypeScript
function addProfile(profile: DownloadableProfile): Promise<boolean>
```

Starts a page through an ability, on which users can touch the button to download a profile.

**Since:** 18

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_ESIM_STATE_OPEN

**System capability:** SystemCapability.Telephony.CoreService.Esim

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profile | DownloadableProfile | Yes | Bound profile package data returned by the SM-DP+ server. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if the profile is added successfully;  returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

let profile: eSIM.DownloadableProfile = {
  activationCode:'1',
  confirmationCode:'1',
  carrierName:'test',
  accessRules:[{
    certificateHashHexStr:'test',
    packageName:'com.example.testcoreservice',
    accessType:0
  }]
};

eSIM.addProfile(profile).then(() => {
    console.info(`addProfile invoking succeeded.`);
}).catch((err: BusinessError<void>) => {
    console.error(`addProfile, promise: err->${JSON.stringify(err)}`);
});

```

