# openNetworkManagerSettings

## openNetworkManagerSettings

```TypeScript
function openNetworkManagerSettings(context: Context): Promise<boolean>
```

Open the network manager settings page.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. Only UIAbilityContext and UIExtensionContext are supported. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800000 | Parameter error. |
| 14800010 | Original service error.  @atomicservice |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 跳转网络管理器设置页面。
// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
settings.openNetworkManagerSettings(context).then((status) => {
  console.info(`callback:return whether settings is open.`);
});

```

