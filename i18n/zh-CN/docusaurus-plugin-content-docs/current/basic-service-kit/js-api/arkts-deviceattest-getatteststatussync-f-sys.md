# getAttestStatusSync

## getAttestStatusSync

```TypeScript
function getAttestStatusSync(): AttestResultInfo
```

Obtains the AttestResultInfo object.

**起始版本：** 9

**系统能力：** SystemCapability.XTS.DeviceAttest

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AttestResultInfo | Obtains the AttestResultInfo object synchronously. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | This api is system api, Please use the system application to call this api. |
| 401 | Input parameters wrong, the number of parameters is incorrect, or the type of parameters is incorrect. |
| 20000001 | System service exception, please try again or reboot your device. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let value: deviceAttest.AttestResultInfo = deviceAttest.getAttestStatusSync();
    console.info("auth:" + value.authResult + " software:" + value.softwareResult + " ticket:" + value.ticket);
    console.info("versionIdResult:" + value.softwareResultDetail[0],
    " patchLevelResult:" + value.softwareResultDetail[1],
    " rootHashResult:" + value.softwareResultDetail[2],
    " PCIDResult:" + value.softwareResultDetail[3],
    " reserved:" + value.softwareResultDetail[4]);
} catch (error) {
    let code: number = (error as BusinessError).code;
    let message: string = (error as BusinessError).message;
    console.error("error code:" + code + " message:" + message);
}

```

