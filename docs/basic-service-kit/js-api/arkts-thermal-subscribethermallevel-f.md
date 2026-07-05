# subscribeThermalLevel

## subscribeThermalLevel

```TypeScript
function subscribeThermalLevel(callback: AsyncCallback<ThermalLevel>): void
```

订阅热档位变化时的回调提醒。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** thermal.registerThermalLevelCallback

**System capability:** SystemCapability.PowerManager.ThermalManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ThermalLevel> | Yes | 回调函数，返回变化后的热档位；该参数是一个函数类型。 |

**Example**

```TypeScript
thermal.subscribeThermalLevel((err: Error, level: thermal.ThermalLevel) => {
    console.info('thermal level is: ' + level);
});

```

