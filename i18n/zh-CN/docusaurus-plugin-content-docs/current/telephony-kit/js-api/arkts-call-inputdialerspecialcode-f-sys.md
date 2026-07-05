# inputDialerSpecialCode

## inputDialerSpecialCode

```TypeScript
function inputDialerSpecialCode(inputCode: string, callback: AsyncCallback<void>): void
```

Enters the special code on the keypad.

**起始版本：** 10

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputCode | string | 是 | Indicates the special code to enter. |
| callback | AsyncCallback&lt;void> | 是 | The callback of inputDialerSpecialCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.inputDialerSpecialCode('*#*#2846579#*#*', (err: BusinessError) => {
    if (err) {
        console.error(`inputDialerSpecialCode fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`inputDialerSpecialCode success`);
    }
});

```

## inputDialerSpecialCode

```TypeScript
function inputDialerSpecialCode(inputCode: string): Promise<void>
```

Enters the special code on the keypad.

**起始版本：** 10

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputCode | string | 是 | Indicates the special code to enter. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the inputDialerSpecialCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    call.inputDialerSpecialCode('*#*#2846579#*#*');
    console.info(`inputDialerSpecialCode success`);
} catch (error) {
    console.error(`inputDialerSpecialCode fail, promise: err->${JSON.stringify(error)}`);
}

```

