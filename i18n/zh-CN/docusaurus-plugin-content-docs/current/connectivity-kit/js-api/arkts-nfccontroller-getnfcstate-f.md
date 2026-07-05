# getNfcState

## getNfcState

```TypeScript
function getNfcState(): NfcState
```

Obtains the NFC status. <p>The NFC status can be any of the following: <ul><li>{@link #STATE_OFF}: Indicates that NFC is disabled. <li>{@link #STATE_TURNING_ON}: Indicates that NFC is being enabled. <li>{@link #STATE_ON}: Indicates that NFC is enabled. <li>{@link #STATE_TURNING_OFF}: Indicates that NFC is being disabled.</ul>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NfcState | Returns the NFC status. |

