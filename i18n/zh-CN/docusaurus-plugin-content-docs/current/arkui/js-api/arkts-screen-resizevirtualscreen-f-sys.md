# resizeVirtualScreen

## resizeVirtualScreen

```TypeScript
function resizeVirtualScreen(screenId:long, width: long, height: long): Promise<void>
```

修改指定虚拟屏的尺寸，使用Promise异步回调。

**起始版本：** 24

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| screenId | long | 是 | 要修改的虚拟屏的屏幕ID，取值范围为[1000, 2147483647]的正整数，超出有效范围时返回错误码1400004。 |
| width | long | 是 | 虚拟屏的新宽度，单位为px，取值范围为[1, 65536]的正整数，超出有效范围时返回错误码1400004。 |
| height | long | 是 | 虚拟屏的新高度，单位为px，取值范围为[1, 65536]的正整数，超出有效范围时返回错误码1400004。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Function can not work because the current device does  not support this ability. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |
| 1400004 | Parameter error. Possible cause: 1. Invalid parameter range. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 虚拟屏ID需从createVirtualScreen()返回值获取
let screenId: number = 1000; // 虚拟屏ID
let width: number = 1920;
let height: number = 1080;
// 修改虚拟屏的尺寸
screen.resizeVirtualScreen(screenId, width, height).then(() => {
  console.info(`Succeeded in resizing virtual screen: screenId=${screenId}, width=${width}, height=${height}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to set screen area mirroring. Code: ${err.code}, message: ${err.message}`);
});

```

