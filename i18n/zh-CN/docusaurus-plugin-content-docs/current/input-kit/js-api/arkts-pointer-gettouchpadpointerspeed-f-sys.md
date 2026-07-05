# getTouchpadPointerSpeed

## getTouchpadPointerSpeed

```TypeScript
function getTouchpadPointerSpeed(callback: AsyncCallback<int>): void
```

获取触控板光标移动速度，使用callback异步回调。

**起始版本：** 10

**系统能力：** SystemCapability.MultimodalInput.Input.Pointer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | 是 | 回调函数。当获取触控板光标移动速度成功，err为undefined，number是获取的触控板光标移动速度；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // 获取触摸板指针速度
            pointer.getTouchpadPointerSpeed((error: BusinessError, speed: number) => {
              if (error) {
                console.error(`Failed to get touchpad pointer speed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
              } else {
                console.info(`Succeeded in getting touchpad pointer speed, speed: ${JSON.stringify(speed)}.`);
              }
            });
          } catch (error) {
            console.error(`Failed to get touchpad pointer speed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## getTouchpadPointerSpeed

```TypeScript
function getTouchpadPointerSpeed(): Promise<int>
```

获取触控板光标移动速度，使用Promise异步回调。

**起始版本：** 10

**系统能力：** SystemCapability.MultimodalInput.Input.Pointer

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise对象，返回触控板光标移动速度，speed取值范围[1,11]。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { pointer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // 获取触摸板指针速度
            pointer.getTouchpadPointerSpeed().then((speed: number) => {
              console.info(`Succeeded in getting touchpad pointer speed, speed: ${JSON.stringify(speed)}.`);
            }).catch((error: BusinessError) => {
              console.error(`Failed to get touchpad pointer speed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
            })
          } catch (error) {
            console.error(`Failed to get touchpad pointer speed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

