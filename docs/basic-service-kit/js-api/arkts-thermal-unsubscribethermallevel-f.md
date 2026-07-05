# unsubscribeThermalLevel

## unsubscribeThermalLevel

```TypeScript
function unsubscribeThermalLevel(callback?: AsyncCallback<void>): void
```

取消订阅热档位变化时的回调提醒。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** thermal.unregisterThermalLevelCallback

**System capability:** SystemCapability.PowerManager.ThermalManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | No | 回调函数，无返回值。不填该参数则取消所有回调。 |

**Example**

```TypeScript
thermal.unsubscribeThermalLevel(() => {
    console.info('unsubscribe thermal level success.');
});

```

