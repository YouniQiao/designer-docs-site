# convertUuid

## convertUuid

```TypeScript
function convertUuid(uuid: string): string
```

Convert 2-byte and 4-byte UUID strings to the 16-byte UUID string standard used in Bluetooth.

**起始版本：** 22

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uuid | string | 是 | 2-byte, 4-byte, 16-byte UUID string data. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return the converted 16-byte UUID string. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let inputUuid: string = '1801';
    let convertedUuid: string = access.convertUuid(inputUuid);
    console.info("convertedUuid: " + convertedUuid);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

