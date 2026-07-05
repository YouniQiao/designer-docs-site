# unregisterThermalLevelCallback

## unregisterThermalLevelCallback

```TypeScript
function unregisterThermalLevelCallback(callback?: Callback<void>): void
```

取消订阅热档位变化时的回调提醒。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.PowerManager.ThermalManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No | 可选参数，回调函数，无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types; |

**Example**

```TypeScript
try {
    thermal.unregisterThermalLevelCallback(() => {
        console.info('unsubscribe thermal level success.');
    });
    console.info('unregister thermal level callback success.');
} catch(err) {
    console.error('unregister thermal level callback failed, err: ' + err);
}

```

