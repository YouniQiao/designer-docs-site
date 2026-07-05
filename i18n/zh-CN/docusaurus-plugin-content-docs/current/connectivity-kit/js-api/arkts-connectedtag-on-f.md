# on

## on('notify')

```TypeScript
function on(type: 'notify', callback: Callback<number>): void
```

Subscribes NFC RF status change events.

**起始版本：** 8

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'notify' | 是 | The callback type. |
| callback | Callback&lt;number> | 是 | The callback function to be registered. |

