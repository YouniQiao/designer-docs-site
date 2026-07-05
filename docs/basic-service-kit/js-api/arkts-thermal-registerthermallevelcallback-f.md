# registerThermalLevelCallback

## registerThermalLevelCallback

```TypeScript
function registerThermalLevelCallback(callback: Callback<ThermalLevel>): void
```

订阅热档位变化时的回调提醒。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.PowerManager.ThermalManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ThermalLevel> | Yes | 回调函数，返回变化后的热档位；该参数是一个函数类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types; |

**Example**

```TypeScript
try {
    thermal.registerThermalLevelCallback((level: thermal.ThermalLevel) => {
        console.info('thermal level is: ' + level);
    });
    console.info('register thermal level callback success.');
} catch(err) {
    console.error('register thermal level callback failed, err: ' + err);
}

```

