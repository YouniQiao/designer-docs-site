# NetUidRule

```TypeScript
export enum NetUidRule
```

Rules whether an uid can access to a metered or non-metered network.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## NET_RULE_NONE

```TypeScript
NET_RULE_NONE = 0
```

Default uid rule.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## NET_RULE_ALLOW_METERED_FOREGROUND

```TypeScript
NET_RULE_ALLOW_METERED_FOREGROUND = 1 << 0
```

Allow traffic on metered networks while app is foreground.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## NET_RULE_ALLOW_METERED

```TypeScript
NET_RULE_ALLOW_METERED = 1 << 1
```

Allow traffic on metered network.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## NET_RULE_REJECT_METERED

```TypeScript
NET_RULE_REJECT_METERED = 1 << 2
```

Reject traffic on metered network.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## NET_RULE_ALLOW_ALL

```TypeScript
NET_RULE_ALLOW_ALL = 1 << 5
```

Allow traffic on all network (metered or non-metered).

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

## NET_RULE_REJECT_ALL

```TypeScript
NET_RULE_REJECT_ALL = 1 << 6
```

Reject traffic on all network.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

