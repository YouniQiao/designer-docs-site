# getDownloadableProfiles

## getDownloadableProfiles

```TypeScript
function getDownloadableProfiles(slotId: int, portIndex: int,
                                   forceDisableProfile: boolean): Promise<GetDownloadableProfilesResult>
```

Gets downloadable profile List which are available for download on this device.

**起始版本：** 18

**需要权限：** 

 ohos.permission.GET_TELEPHONY_ESIM_STATE

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number. |
| portIndex | int | 是 | Index of the port for the slot. |
| forceDisableProfile | boolean | 是 | If true, the active profile must be disabled in order to perform the  operation. Otherwise, the resultCode should return {@link RESULT_MUST_DISABLE_PROFILE} to allow  the user to agree to this operation first. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;GetDownloadableProfilesResult> | Return metadata for downloadableProfile which are  available for download on this device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

eSIM.getDownloadableProfiles(1, 0, true).then((data: eSIM.GetDownloadableProfilesResult) => {
    console.info(`getDownloadableProfiles, GetDownloadableProfilesResult: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError<void>) => {
    console.error(`getDownloadableProfiles, GetDownloadableProfilesResult: err->${JSON.stringify(err)}`);
});

```

