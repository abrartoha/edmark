import {
  IconCompass,
  IconGraduation,
  IconDocument,
  IconTrophy,
  IconPlane,
  IconHeadset,
} from "./Icons";
import type { Service } from "@/lib/content";

const map = {
  compass: IconCompass,
  graduation: IconGraduation,
  document: IconDocument,
  trophy: IconTrophy,
  plane: IconPlane,
  headset: IconHeadset,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Cmp = map[name];
  return <Cmp className={className} />;
}
