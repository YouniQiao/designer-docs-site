# Event

SSAP事件。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## parameter

```TypeScript
parameter?: ArrayBuffer
```

事件实例的参数。

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## eventUuid

```TypeScript
eventUuid: string
```

事件实例的UUID。 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。 <br>不允许使用NearLink标准UUID。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## serviceUuid

```TypeScript
serviceUuid: string
```

事件所属服务实例的UUID 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。 <br>禁止使用星闪标准服务UUID。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

