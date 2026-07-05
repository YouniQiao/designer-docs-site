# ConnectionEvent

```TypeScript
type ConnectionEvent = (state: ConnectionState, device: OutputDeviceInfo) => void
```

The connection event supplied by system to indicate device state and information.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | ConnectionState | 是 | device connection state |
| device | OutputDeviceInfo | 是 | device information |

