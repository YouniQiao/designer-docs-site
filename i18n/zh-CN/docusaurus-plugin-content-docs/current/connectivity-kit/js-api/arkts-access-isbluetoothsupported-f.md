# isBluetoothSupported

## isBluetoothSupported

```TypeScript
function isBluetoothSupported(): boolean
```

Check whether Bluetooth is available.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if Bluetooth is available, returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
try {
    let isSupported: boolean = access.isBluetoothSupported();
    console.info("isSupported: " + isSupported);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

