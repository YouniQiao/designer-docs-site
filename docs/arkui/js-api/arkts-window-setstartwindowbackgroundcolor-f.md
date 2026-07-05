# setStartWindowBackgroundColor

## setStartWindowBackgroundColor

```TypeScript
function setStartWindowBackgroundColor(moduleName: string, abilityName: string, color: ColorMetrics): Promise<void>
```

设置同一应用包名下指定moduleName、abilityName对应UIAbility的启动页背景色，使用Promise异步回调。 该接口对同一应用包名下的所有进程生效，例如多实例或应用分身场景。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | 需要设置的UIAbility所属模块名，moduleName的长度范围为0-200字节，仅支持设置当前同一应用包名内的模块。模块名由开发者在  [module.json5配置文件](docroot://quick-start/module-configuration-file.md#配置文件标签)中的name字段指定。 |
| abilityName | string | Yes | 需要设置的UIAbility名字，abilityName的长度范围为0-200字节，仅支持设置当前同一应用包名内的abilityName。UIAbility名由开发者  在[module.json5配置文件abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)的name字段指定。 |
| color | ColorMetrics | Yes | 设置的启动页背景色。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setStartWindowBackgroundColor can not to work  correctly due to limited device capabilities. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |
| 1300016 | Parameter error. Possible cause: Parameter exceeds the allowed length. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { ColorMetrics, window } from '@kit.ArkUI';

try {
  let promise = window.setStartWindowBackgroundColor("entry", "EntryAbility", ColorMetrics.numeric(0xff000000));
  promise.then(() => {
    console.info('Succeeded in setting the starting window color.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set the starting window color. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to set the starting window color. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

