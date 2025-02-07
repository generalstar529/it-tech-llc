import ServiceCard from "@/components/service-card";
import type { Service } from "@shared/schema";
import {
  MonitorCheck,
  Shield,
  Cpu,
  Cloud,
  Database,
  Network,
  Phone,
  Code,
} from "lucide-react";

const services: (Service & { Icon: any })[] = [
  {
    id: 1,
    title: "IT Consulting",
    description:
      "Strategic technology planning and digital transformation services to align IT with business goals.",
    icon: "monitor",
    Icon: MonitorCheck,
  },
  {
    id: 2,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions including threat detection, prevention, and incident response.",
    icon: "shield",
    Icon: Shield,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Cloud migration, management, and optimization services for scalable infrastructure.",
    icon: "cloud",
    Icon: Cloud,
  },
  {
    id: 4,
    title: "Infrastructure Management",
    description:
      "End-to-end infrastructure solutions including setup, maintenance, and optimization.",
    icon: "database",
    Icon: Database,
  },
  {
    id: 5,
    title: "Network Solutions",
    description:
      "Design, implementation, and management of secure and efficient networks.",
    icon: "network",
    Icon: Network,
  },
  {
    id: 6,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your specific business needs.",
    icon: "code",
    Icon: Code,
  },
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive IT solutions to drive your business forward
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} Icon={service.Icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
