# CliInfo

表示CLI（Command Line Interface，命令行界面）信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context,Permissions,PermissionRequestResult } from '@kit.AbilityKit';
```

## subCliName

```TypeScript
subCliName: string
```

CLI子命令名称。该字段可以为空，但长度不能超过256个字符。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## cliName

```TypeScript
cliName: string
```

CLI名称。该字段不能为空，且长度不能超过256个字符。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

