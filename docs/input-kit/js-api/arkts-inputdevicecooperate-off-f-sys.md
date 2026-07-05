# off

## off('cooperation')

```TypeScript
function off(type: 'cooperation', callback?: AsyncCallback<void>): void
```

关闭监听键鼠穿越状态，使用callback异步回调。 > **说明：** > > 从 API version 9开始支持，从API version 23开始废弃。建议使用 > [cooperate.off](../../apis-distributed-service-kit/arkts-apis/arkts-cooperate-off-f-sys.md#off-2) > 替代。

**Since:** 9

**Deprecated since:** 23

**Substitute:** ohos.cooperate/cooperate#off

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cooperation' | Yes | 注册类型，取值“cooperation”。 |
| callback | AsyncCallback&lt;void> | No | 回调函数。当取消注册成功，err为undefined，否则为错误对象。若无此参数，则取消当前应用注册的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

**Example**

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Unregister a single callback.
          let callbackOn = (msg: object) => {
            console.info(`Succeeded in monitoring cooperation, msg: ${JSON.stringify(msg)}.`);
            return false;
          }
          try {
            inputDeviceCooperate.on('cooperation', callbackOn);
            inputDeviceCooperate.off("cooperation", callbackOn);
          } catch (error) {
            console.error(`Failed to unregister callback function, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputDeviceCooperate } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Unregister all callbacks.
          let callback = (msg: object) => {
            console.info(`Succeeded in monitoring cooperation, msg: ${JSON.stringify(msg)}.`);
            return false;
          }
          try {
            inputDeviceCooperate.on('cooperation', callback);
            inputDeviceCooperate.off("cooperation");
          } catch (error) {
            console.error(`Failed to unregister callback function, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

