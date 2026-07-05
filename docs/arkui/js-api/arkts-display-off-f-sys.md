# off

## off('privateModeChange')

```TypeScript
function off(type: 'privateModeChange', callback?: Callback<boolean>): void
```

关闭屏幕隐私模式变化的监听。当屏幕前台有隐私窗口，则屏幕处于隐私模式，屏幕中的隐私窗口内容无法被截屏或录屏。

**Since:** 10

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'privateModeChange' | Yes | 监听事件，固定为'privateModeChange'，表示屏幕隐私模式状态发生变化。 |
| callback | Callback&lt;boolean> | No | 需要取消注册的回调函数。表示屏幕隐私模式是否改变。true表示屏幕由非隐私窗口模式变为隐私模式，false表示屏幕由隐私模式变为非隐私模式。若无此参数  ，则取消注册屏幕隐私模式变化监听的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

**Example**

```TypeScript
try {
  // Unregister the callback for listening to privacy mode changes.
  display.off('privateModeChange');
} catch (exception) {
  console.error(`Failed to unregister callback. Code: ${exception.code}, message: ${exception.message}`);
}

```

