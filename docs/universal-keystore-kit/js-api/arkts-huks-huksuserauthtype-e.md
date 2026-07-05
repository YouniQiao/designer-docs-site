# HuksUserAuthType

```TypeScript
export enum HuksUserAuthType
```

表示用户认证类型。

**Since:** 9

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_USER_AUTH_TYPE_FINGERPRINT

```TypeScript
HUKS_USER_AUTH_TYPE_FINGERPRINT = 1 << 0
```

表示用户认证类型为指纹。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_USER_AUTH_TYPE_FACE

```TypeScript
HUKS_USER_AUTH_TYPE_FACE = 1 << 1
```

表示用户认证类型为人脸。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_USER_AUTH_TYPE_PIN

```TypeScript
HUKS_USER_AUTH_TYPE_PIN = 1 << 2
```

表示用户认证类型为PIN码。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_USER_AUTH_TYPE_TUI_PIN

```TypeScript
HUKS_USER_AUTH_TYPE_TUI_PIN = 1 << 5
```

表示用户认证类型为TUI PIN码。<!--Del-->（暂不支持）<!--DelEnd--> **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。

**Since:** 20

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

