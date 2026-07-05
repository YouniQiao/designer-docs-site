# off

## off('notify')

```TypeScript
function off(type: 'notify', callback?: Callback<number>): void
```

Unsubscribes NFC RF status change events. <p>All callback functions will be unregistered If there is no specific callback parameter.</p>

**起始版本：** 8

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.ConnectedTag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'notify' | 是 | The callback type. |
| callback | Callback&lt;number> | 否 | The callback function to be unregistered. |

