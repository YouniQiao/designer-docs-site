# destroyVirtualScreen

## destroyVirtualScreen

```TypeScript
function destroyVirtualScreen(screenId: long): Promise<void>
```

销毁虚拟屏幕，使用Promise异步回调。

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_VIRTUAL_SCREEN

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| screenId | long | 是 | 屏幕ID，与创建的虚拟屏幕ID保持一致，即使用[createVirtualScreen()]display.createVirtualScreen接口成功创建对  应虚拟屏幕时的返回值，该参数仅支持整数输入。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported.function destroyVirtualScreen can not work correctly due  to limited device capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let screenId: number = 1;
// 销毁虚拟屏幕
display.destroyVirtualScreen(screenId).then(() => {
  console.info('Succeeded in destroying the virtual screen.');
}).catch((err: BusinessError) => {
  console.error(`Failed to destroy the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

