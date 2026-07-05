# offApplicationFocusStateChange

## offApplicationFocusStateChange

```TypeScript
function offApplicationFocusStateChange(callback?: Callback<boolean>): void
```

关闭应用进程获焦状态变化的监听。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | No |  |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

const callback = (bool: boolean) => {
  // ...
}
try {
  window.onApplicationFocusStateChange(callback);
  window.offApplicationFocusStateChange(callback);
  // Unregister all the callbacks that have been registered through on().
  window.offApplicationFocusStateChange(); 
} catch (exception) {
  console.error(`Failed to enable or disable the listener for application focus state changes. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

