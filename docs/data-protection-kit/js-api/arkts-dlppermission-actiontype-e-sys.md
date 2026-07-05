# ActionType

```TypeScript
export enum ActionType
```

表示在文件设定的权限时间到期后所执行的动作枚举，默认为NOT_OPEN。

**Since:** 20

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## NOT_OPEN

```TypeScript
NOT_OPEN = 0
```

表示超过权限管控时间后，用户无权限打开DLP文件。

**Since:** 20

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## OPEN

```TypeScript
OPEN = 1
```

表示超过权限管控时间后，登录账号仍可打开DLP文件，且拥有编辑权限。

**Since:** 20

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

