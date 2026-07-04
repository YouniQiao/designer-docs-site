# Operation

Enum of property operation indication.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## READABLE

```TypeScript
READABLE = 0x01
```

When this bit is set, the property value can be read.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## WRITE_NO_RESPONSE

```TypeScript
WRITE_NO_RESPONSE = 0x02
```

When this bit is set, the property value can be written without response after writing.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## WRITE_WITH_RESPONSE

```TypeScript
WRITE_WITH_RESPONSE = 0x04
```

When this bit is set, the property value can be written, and a response is generated for the client.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## NOTIFY

```TypeScript
NOTIFY = 0x08
```

When this bit is set, the property value is delivered to the client via notification.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

