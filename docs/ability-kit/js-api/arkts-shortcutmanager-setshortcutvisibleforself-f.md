# setShortcutVisibleForSelf

## setShortcutVisibleForSelf

```TypeScript
function setShortcutVisibleForSelf(id: string, visible: boolean): Promise<void>
```

设置当前应用指定的快捷方式是否显示。使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 快捷方式的ID，通过[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的shortcuts标  签下的shortcutId字段获取，取值为长度不超过63字节的字符串。 |
| visible | boolean | Yes | 快捷方式是否显示。true：快捷方式显示；false：快捷方式不显示。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700070 | The specified shortcut id is not exist. |

**Example**

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Replace it with the shortcutId field under the shortcuts tag of the module.json5 file.
shortcutManager.setShortcutVisibleForSelf("shortcut_id", false)
  .then(() => {
    console.info('setShortcutVisibleForSelf success');
  }).catch((err: BusinessError) => {
  console.error(`setShortcutVisibleForSelf errData is errCode:${err.code}  message:${err.message}`);
});

```

