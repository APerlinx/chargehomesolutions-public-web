import {
  MessageSquare,
  Check,
  Clock,
  Zap,
  BatteryCharging,
  LayoutPanelLeft,
  Wrench,
  Home,
  Plug,
  ShieldCheck,
  Building2,
  BadgeCheck,
  Globe,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react"

const map: Record<string, LucideIcon> = {
  message: MessageSquare,
  check: Check,
  clock: Clock,
  zap: Zap,
  battery: BatteryCharging,
  panel: LayoutPanelLeft,
  wrench: Wrench,
  home: Home,
  plug: Plug,
  shield: ShieldCheck,
  building: Building2,
  badge: BadgeCheck,
  globe: Globe,
  monitor: MonitorSmartphone,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Zap
  return <Cmp className={className} aria-hidden="true" />
}
