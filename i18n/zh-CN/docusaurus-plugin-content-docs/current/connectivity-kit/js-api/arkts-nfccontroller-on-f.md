# on

## on('nfcStateChange')

```TypeScript
function on(type: 'nfcStateChange', callback: Callback<NfcState>): void
```

register nfc state changed event.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'nfcStateChange' | 是 | The type to register. |
| callback | Callback&lt;NfcState> | 是 | Callback used to listen to the nfc state changed event. |

