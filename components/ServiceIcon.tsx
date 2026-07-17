import {
  IconCompass,
  IconGraduation,
  IconDocument,
  IconTrophy,
  IconPlane,
  IconHeadset,
  IconResearch,
} from "./Icons";
import type { Service } from "@/lib/content";

const map = {
  compass: IconCompass,
  graduation: IconGraduation,
  document: IconDocument,
  trophy: IconTrophy,
  plane: IconPlane,
  headset: IconHeadset,
  research: IconResearch,
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
