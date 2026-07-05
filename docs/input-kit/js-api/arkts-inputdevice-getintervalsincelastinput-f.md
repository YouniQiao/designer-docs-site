# getIntervalSinceLastInput

## getIntervalSinceLastInput

```TypeScript
function getIntervalSinceLastInput(): Promise<long>
```

获取距离上次系统输入事件的时间间隔（包含设备休眠时间），使用Promise异步回调。

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回距离上次系统输入事件的时间间隔，单位为微秒（μs）。 |

**Example**

```TypeScript
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
           try {
            // Obtain the time interval since the last input
            inputDevice.getIntervalSinceLastInput().then((timeInterval: number) => {
              console.info(`Succeeded in getting interval since last input: ${JSON.stringify(timeInterval)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get interval since last input, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to get interval since last input, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

