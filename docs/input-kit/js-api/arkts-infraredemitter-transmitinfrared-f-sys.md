# transmitInfrared

## transmitInfrared

```TypeScript
function transmitInfrared(infraredFrequency: long, pattern: Array<long>): void
```

产生特定频率和特定电平大小的红外信号。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_INPUT_INFRARED_EMITTER

**System capability:** SystemCapability.MultimodalInput.Input.InfraredEmitter

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| infraredFrequency | long | Yes | 红外频率，单位：Hz。 |
| pattern | Array&lt;long> | Yes | 红外电平信号，单位为微秒（μs）。电平信号的数量取值范围为[0,1024]，取值为0时，接口调用不生效。电平信号的取值需大于0。 比如  [100,200,300,400]该电平信号数组，其中100μs为高电平信号、200μs为低电平信号、300μs为高电平信号、400μs为低电平信号。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. [since 12 - 14] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { infraredEmitter } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Set the infrared carrier frequency and infrared level signal mode
            infraredEmitter.transmitInfrared(38000, [100, 200, 300, 400]);
          } catch (error) {
            console.error(`Failed to set infrared frequencies, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

