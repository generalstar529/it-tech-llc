import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@shared/schema";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  Icon: LucideIcon;
}

export default function ServiceCard({ service, Icon }: ServiceCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <Icon className="h-10 w-10 text-primary mb-2" />
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}
