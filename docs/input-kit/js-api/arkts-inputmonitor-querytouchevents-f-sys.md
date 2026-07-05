# queryTouchEvents

## queryTouchEvents

```TypeScript
function queryTouchEvents(count: int) : Promise<Array<TouchEvent>>
```

查询最近的触屏输入事件，最多支持查询100条事件，从API版本26.0.0开始，最多支持查询60条事件，使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | int | Yes | 需要查询的触屏输入事件数量，取值范围为0到100的整数。小于0时取值为0、大于100时取值为100。从API版本26.0.0开始，大于60时取值为60。如果实际触屏输入事件只有30个，  但该参数取值为50 ，则仅支持查询到30个触屏输入事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;TouchEvent>> | Promise对象，返回查询到的触屏输入事件。包含以下有效信息，其余均为无效信息： - actionTime：触屏输入事件发生的时间，表示系统  启动运行至今逝去的微秒数，单位为微秒（μs）。 - [SourceType](arkts-sourcetype-e.md#SourceType)：触摸来源的设备类型。 -  [isInject](arkts-touchevent-i.md#TouchEvent)：表示该触屏输入事件是否为注入事件。 - pressure：压力值，取值范围是  [0.0, 1.0]，0.0表示不支持。 - tiltX：相对YZ平面的角度，取值的范围[-90, 90]，其中正值是向右倾斜。 - tiltY：相对XZ平面的角度，取值的范围[-90, 90]，其中正值是  向下倾斜。 从API version 23开始，可以额外获取以下有效信息： - [Action](arkts-action-e.md#Action)：触屏输入事件类  型。 - screenX：相对于屏幕左上角的X轴坐标，单位为像素，取值范围[0, 屏幕宽度]，向右递增。仅限指定应用获取。 - screenY：相对于屏幕左上角的Y轴坐标，单位为像素，取值范围  [0, 屏幕高度]，向下递增。仅限指定应用获取。 从API版本26.0.0开始，最多支持查询60条事件，且不会返回MOVE和PULL_MOVE类型的事件。screenX和screenY不再限制指定应用获取，所有系统  应用均可获取。同时可以额外获取以下有效信息： - screenId：目标屏幕ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |

**Example**

```TypeScript
import { inputMonitor, TouchEvent } from '@kit.InputKit'
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Querying the Number of Touchscreen Events
  inputMonitor.queryTouchEvents(10).then((events: Array<TouchEvent>) => {
    events.forEach((event, index) => {
      console.info(`Succeeded in querying touch event ${index}, actionTime=${event.actionTime}, sourceType=${event.sourceType}.`);
    });
  }).catch((error: BusinessError) => {
    console.error(`Failed to query touch events promise, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
  });
} catch (error) {
  const code = (error as BusinessError).code;
  const message = (error as BusinessError).message;
  console.error(`Failed to query touch events, Code: ${code}, message: ${message}.`);
}

```

