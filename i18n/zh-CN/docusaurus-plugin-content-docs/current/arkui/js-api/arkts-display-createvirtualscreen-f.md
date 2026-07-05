# createVirtualScreen

## createVirtualScreen

```TypeScript
function createVirtualScreen(config: VirtualScreenConfig): Promise<long>
```

创建虚拟屏幕，使用Promise异步回调。

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_VIRTUAL_SCREEN

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | VirtualScreenConfig | 是 | 用于创建虚拟屏幕的参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise对象。返回创建的虚拟屏幕的ScreenId。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported.function createVirtualScreen can not work correctly due to  limited device capabilities. |
| 1400001 | Invalid display or screen. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class VirtualScreenConfig {
  name : string = '';
  width : number = 0;
  height : number = 0;
  density : number = 0;
  surfaceId : string = '';
  supportsFocus ?: boolean = true;
}

let config: VirtualScreenConfig = {
  name: 'screen01',
  width: 1080,
  height: 2340,
  density: 2,
  surfaceId: '',
  supportsFocus: false
};

display.createVirtualScreen(config).then((screenId: number) => {
  console.info(`Succeeded in creating the virtual screen. ScreenId: ${screenId}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to create the virtual screen. Code: ${err.code}, message: ${err.message}`);
});

```

