# isScreenOn

## isScreenOn

```TypeScript
function isScreenOn(callback: AsyncCallback<boolean>): void
```

检测当前设备的亮灭屏状态。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** power.isActive

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。当检测成功，err为undefined，data为获取到的亮灭屏状态，返回true表示亮屏，返回false表示灭屏；否则为错误对象  。 |

**Example**

```TypeScript
power.isScreenOn((err: Error, data: boolean) => {
    if (typeof err === 'undefined') {
        console.info('screen on status is ' + data);
    } else {
        console.error('check screen status failed, err: ' + err);
    }
})

```

## isScreenOn

```TypeScript
function isScreenOn(): Promise<boolean>
```

检测当前设备的亮灭屏状态。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** power.isActive

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示亮屏；返回false表示灭屏。 |

**Example**

```TypeScript
power.isScreenOn()
.then((data: boolean) => {
    console.info('screen on status is ' + data);
})
.catch((err: Error) => {
    console.error('check screen status failed, err: ' + err);
})

```

