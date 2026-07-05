# ConnectErrorCode

```TypeScript
export enum ConnectErrorCode
```

Enumerates connection error codes.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## CONNECTED_SESSION_EXISTS

```TypeScript
CONNECTED_SESSION_EXISTS = 0
```

A session already exists between applications.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## PEER_APP_REJECTED

```TypeScript
PEER_APP_REJECTED = 1
```

The peer application rejects the collaboration request.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## LOCAL_WIFI_NOT_OPEN

```TypeScript
LOCAL_WIFI_NOT_OPEN = 2
```

Wi-Fi is disabled at the local end.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## PEER_WIFI_NOT_OPEN

```TypeScript
PEER_WIFI_NOT_OPEN = 3
```

Wi-Fi is disabled at the peer end.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## PEER_ABILITY_NO_ONCOLLABORATE

```TypeScript
PEER_ABILITY_NO_ONCOLLABORATE = 4
```

The **onCollaborate** callback is not implemented.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## SYSTEM_INTERNAL_ERROR

```TypeScript
SYSTEM_INTERNAL_ERROR = 5
```

An internal system error occurs.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

