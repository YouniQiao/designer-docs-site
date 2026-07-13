# ServerResponse

Describes the parameters of a response send by the server to a specified read or write request.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## address

```TypeScript
address: string
```

Indicates the device address.
The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## requestId

```TypeScript
requestId: number
```

The request ID.
The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## value

```TypeScript
value: ArrayBuffer
```

Indicates the response data.

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

