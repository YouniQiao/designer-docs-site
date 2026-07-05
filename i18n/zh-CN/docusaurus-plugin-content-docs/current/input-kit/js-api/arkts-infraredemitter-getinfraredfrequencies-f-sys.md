# getInfraredFrequencies

## getInfraredFrequencies

```TypeScript
function getInfraredFrequencies(): Array<InfraredFrequency>
```

查询设备支持的红外信号的频率范围。

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INPUT_INFRARED_EMITTER

**系统能力：** SystemCapability.MultimodalInput.Input.InfraredEmitter

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;InfraredFrequency> | 红外信号的频率范围，包含多组最大和最小频率。 从API version 23开始，当设备不具有红外发射器，返回一组最大和最小频率，且均为0Hz。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. [since 12 - 14] |

**示例：**

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
            let frequencies = infraredEmitter.getInfraredFrequencies();
            console.info(`Succeeded in getting infrared frequencies, frequencies: ${JSON.stringify(frequencies)}.`);
          } catch (error) {
            console.error(`Failed to get infrared frequencies, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

