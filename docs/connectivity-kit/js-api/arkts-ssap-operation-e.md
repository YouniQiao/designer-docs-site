# Operation

```TypeScript
enum Operation
```

属性操作指示的枚举。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## READABLE

```TypeScript
READABLE = 0x01
```

当该比特置位后，属性值可被读取。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## WRITE_NO_RESPONSE

```TypeScript
WRITE_NO_RESPONSE = 0x02
```

当该比特置位后，属性值可被写入，写入后无反馈。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## WRITE_WITH_RESPONSE

```TypeScript
WRITE_WITH_RESPONSE = 0x04
```

当该比特置位后，属性值可被写入，写入后产生反 馈给客户端。 写操作完成后，会反馈给客户端。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## NOTIFY

```TypeScript
NOTIFY = 0x08
```

当该比特置位后，属性值通过通知方式传递给客户 端。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

