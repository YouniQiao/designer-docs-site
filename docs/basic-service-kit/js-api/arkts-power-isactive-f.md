# isActive

## isActive

```TypeScript
function isActive(): boolean
```

检测当前设备是否处于活动状态。 - 有屏的设备亮屏时为活动状态，熄屏时为非活动状态。 - 无屏的设备非休眠时为活动状态，休眠时为非活动状态。

**Since:** 9

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 活动状态返回true，非活动状态返回false。 |

**Example**

```TypeScript
let isActive = power.isActive();
console.info('power is active: ' + isActive);

```

