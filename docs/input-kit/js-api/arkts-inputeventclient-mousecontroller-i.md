# MouseController

提供模拟鼠标操作的功能。模拟鼠标操作序列必须满足以下要求： 1. 鼠标按键只能在抬起状态下被按下。 2. 鼠标按键只能在被按下后才能抬起。 3. 有效的轴事件序列必须先调用beginAxis开始事件，然后调用零次或多次updateAxis更新事件，最后调用endAxis结束事件。 4. 同一时间只能有一个进行中的轴事件序列。

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## beginAxis

```TypeScript
beginAxis(axis: Axis, value: int): Promise<void>
```

开始轴事件。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | Axis | Yes | 轴类型。 |
| value | int | Yes | 轴值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300001 | The axis event in progress. |
| 3800001 | Input service exception. |

**Example**

```TypeScript
import { inputEventClient, Axis } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          inputEventClient.createMouseController()
            .then((mouseController: inputEventClient.MouseController) => {
              mouseController.beginAxis(Axis.SCROLL_VERTICAL, 10);
              return mouseController;
            })
            .then((mouseController: inputEventClient.MouseController) => {
              mouseController.updateAxis(Axis.SCROLL_VERTICAL, 20);
              return mouseController;
            })
            .then((mouseController: inputEventClient.MouseController) => {
              mouseController.endAxis(Axis.SCROLL_VERTICAL);
            })
            .then(() => {
              console.info('Succeeded in ending axis event');
            })
            .catch((error: BusinessError) => {
              console.error(`Failed to end axis event. Code: ${error.code}, message: ${error.message}.`);
            });
        })
    }
  }
}

```

## endAxis

```TypeScript
endAxis(axis: Axis): Promise<void>
```

结束轴事件。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | Axis | Yes | 轴类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300001 | The axis event is not in progress. |
| 3800001 | Input service exception. |

## moveTo

```TypeScript
moveTo(displayId: int, displayX: int, displayY: int): Promise<void>
```

将鼠标光标移动到指定的显示器坐标。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | int | Yes | 目标显示器ID。 |
| displayX | int | Yes | 目标位置相对于显示器左边缘的X坐标，单位为像素（px）。若超出显示器有效范围，则实际坐标值会规约到有效范围[0, 显示器宽度-1]。 |
| displayY | int | Yes | 目标位置相对于显示器上边缘的Y坐标，单位为像素（px）。若超出显示器有效范围，则实际坐标值会规约到有效范围[0, 显示器高度-1]。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300002 | The display does not exist. |
| 3800001 | Input service exception. |

**Example**

```TypeScript
import { inputEventClient } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          inputEventClient.createMouseController()
            .then(mouseController => {
              return mouseController.moveTo(0, 100, 200);
            })
            .then(() => {
              console.info('Succeeded in moving mouse');
            })
            .catch((error: BusinessError) => {
              console.error(`Failed to move mouse. Code: ${error.code}, message: ${error.message}.`);
            });
        })
    }
  }
}

```

## pressButton

```TypeScript
pressButton(button: Button): Promise<void>
```

按下鼠标按键。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| button | Button | Yes | 要按下的鼠标按键。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300001 | The mouse button is already pressed. |
| 3800001 | Input service exception. |

**Example**

```TypeScript
import { inputEventClient, Button } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          inputEventClient.createMouseController()
            .then((mouseController: inputEventClient.MouseController) => {
              mouseController.pressButton(Button.LEFT);
              return mouseController;
            })
            .then((mouseController: inputEventClient.MouseController) => {
              mouseController.releaseButton(Button.LEFT);
            })
            .then(() => {
              console.info('Succeeded in releasing mouse button');
            })
            .catch((error: BusinessError) => {
              console.error(`Failed to release mouse button. Code: ${error.code}, message: ${error.message}.`);
            });
        })
    }
  }
}

```

## releaseButton

```TypeScript
releaseButton(button: Button): Promise<void>
```

抬起鼠标按键。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| button | Button | Yes | 要抬起的鼠标按键。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300001 | The mouse button is not pressed. |
| 3800001 | Input service exception. |

## updateAxis

```TypeScript
updateAxis(axis: Axis, value: int): Promise<void>
```

更新轴事件。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | Axis | Yes | 轴类型。 |
| value | int | Yes | 轴值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 4300001 | The axis event is not in progress. |
| 3800001 | Input service exception. |

