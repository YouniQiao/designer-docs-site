# UIElementInfo

提供UI事件的信息。

**起始版本：** 10

**系统能力：** SystemCapability.Test.UiTest

## bundleName

```TypeScript
readonly bundleName: string
```

应用的包名。

**类型：** string

**起始版本：** 10

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## componentEventType

```TypeScript
readonly componentEventType?: ComponentEventType
```

组件操作事件类型。 如果不是组件操作事件，返回{@link ComponentEventType.COMPONENT_UNDEFINED}。

**类型：** ComponentEventType

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## componentId

```TypeScript
readonly componentId?: string
```

组件ID。如果不是组件操作事件，返回空字符串。

**类型：** string

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## componentRect

```TypeScript
readonly componentRect?: Rect
```

组件的矩形区域，如果是窗口则将rect的所有属性设为0。

**类型：** Rect

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## text

```TypeScript
readonly text: string
```

组件或窗口的文本信息。

**类型：** string

**起始版本：** 10

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## type

```TypeScript
readonly type: string
```

组件或窗口类型。

**类型：** string

**起始版本：** 10

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## windowChangeType

```TypeScript
readonly windowChangeType?: WindowChangeType
```

窗口变更事件类型。 如果不是窗口变更事件，返回{@link WindowChangeType.WINDOW_UNDEFINED}。

**类型：** WindowChangeType

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## windowId

```TypeScript
readonly windowId?: number
```

组件所属窗口的ID。

**类型：** number

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

