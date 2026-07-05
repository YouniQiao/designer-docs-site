# ResourceType

```TypeScript
export enum ResourceType
```

The type of exemption resources requested by the application.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

## NETWORK

```TypeScript
NETWORK = 1
```

The resource for non-standby network access.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

## RUNNING_LOCK

```TypeScript
RUNNING_LOCK = 1 << 1
```

The resource for non-standby cpu running-lock.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

## TIMER

```TypeScript
TIMER = 1 << 2
```

The resource for non-standby timer.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

## WORK_SCHEDULER

```TypeScript
WORK_SCHEDULER = 1 << 3
```

The resource for non-standby workscheduler.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

## AUTO_SYNC

```TypeScript
AUTO_SYNC = 1 << 4
```

The resource for non-standby automatic synchronization.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

## PUSH

```TypeScript
PUSH = 1 << 5
```

The resource for non-standby push-kit.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

## FREEZE

```TypeScript
FREEZE = 1 << 6
```

The resource for non-standby freezing application.

**起始版本：** 10

**系统能力：** SystemCapability.ResourceSchedule.DeviceStandby

**系统接口：** 此接口为系统接口。

