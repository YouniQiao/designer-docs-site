# Service

SSAP服务。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## methods

```TypeScript
methods?: Method[]
```

属于此服务的方法。 <br>[addService]ssap.Server.addService方法中不支持此字段。

**Type:** Method[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## events

```TypeScript
events?: Event[]
```

属于此服务的事件。 <br>[addService]ssap.Server.addService方法中不支持该字段。

**Type:** Event[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## properties

```TypeScript
properties: Property[]
```

属于此服务的属性。

**Type:** Property[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## serviceUuid

```TypeScript
serviceUuid: string
```

服务的UUID。 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。 <br>禁止使用星闪标准服务UUID。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

