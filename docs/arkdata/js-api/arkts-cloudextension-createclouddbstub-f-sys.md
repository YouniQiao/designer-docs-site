# createCloudDBStub

## createCloudDBStub

```TypeScript
function createCloudDBStub(instance: CloudDB): Promise<rpc.RemoteObject>
```

根据CloudDB类的实例创建对应的RemoteObject对象，系统内部通过该对象调用CloudDB的实现接口，使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instance | CloudDB | Yes | CloudDB类的实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject> | Promise对象，返回CloudDB的rpc.RemoteObject对象。 |

