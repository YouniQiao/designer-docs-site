# onApplicationFocusStateChange

## onApplicationFocusStateChange

```TypeScript
function onApplicationFocusStateChange(callback: Callback<boolean>): void
```

开启应用进程获焦状态变化的监听。此监听针对应用间的获焦状态变化，若同应用内窗口间的获焦状态发生变化，则不会触发回调函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | Yes | 回调函数。返回当前应用进程获焦状态的变化。true表示当前应用进程变为获焦状态；false表示当前应用进程变为失焦状态。 |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

try {
  window.onApplicationFocusStateChange((data) =>{
      console.info(`Succeeded in enabling the listener for application focus state changes. Data: ${data}`);
  })
} catch(exception){
  console.error(`Failed to enable the listener for application focus state changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

