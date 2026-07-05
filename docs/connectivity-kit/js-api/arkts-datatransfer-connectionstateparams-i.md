# ConnectionStateParams

获取连接状态所需的参数。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## address

```TypeScript
address: string
```

连接的设备地址。 长度必须为17，由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## uuid

```TypeScript
uuid: string
```

服务UUID。 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。 <br>禁止使用星闪标准服务UUID。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

