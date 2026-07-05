# findWindow

## findWindow

```TypeScript
function findWindow(name: string): Window
```

查找指定名称对应的窗口。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 窗口名称。查找子窗口或系统窗口时使用[Configuration](arkts-window-configuration-i.md#Configuration)中的窗口名称；查找主窗口时使用  [getWindowName](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getwindowname12)获取当前实例的窗口名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Window | 当前查找的窗口对象。如果查找指定名称对应的窗口不存在，会抛出1300002错误码 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. Possible cause: The window is not created or destroyed. |

**Example**

```TypeScript
let windowClass: window.Window | undefined = undefined;
try {
  windowClass = window.findWindow('test');
} catch (exception) {
  console.error(`Failed to find the Window. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

