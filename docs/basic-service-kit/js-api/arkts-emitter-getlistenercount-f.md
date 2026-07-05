# getListenerCount

## getListenerCount

```TypeScript
function getListenerCount(eventId: long | string): long
```

获取指定事件的订阅数。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | long \| string | Yes | 事件ID，string类型的eventId取值为长度不超过10240字节的自定义字符串，且不可为空字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 指定事件的订阅数。 |

**Example**

```TypeScript
let count: number = emitter.getListenerCount("eventId");

```

