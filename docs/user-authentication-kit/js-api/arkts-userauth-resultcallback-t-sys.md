# ResultCallback

```TypeScript
type ResultCallback = (challenge: Uint8Array, result: UserAuthResult) => void
```

调用返回认证结果。如果鉴权成功。 UserAuthResult中包含token信息。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| challenge | Uint8Array | Yes | 挑战值，可以以Uint8Array([])格式传递。 |
| result | UserAuthResult | Yes | 身份认证结果。 |

