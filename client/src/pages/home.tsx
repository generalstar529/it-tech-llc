import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost, Service, TeamMember } from "@shared/schema";
import ServiceCard from "@/components/service-card";
import TeamCard from "@/components/team-card";
import BlogPostCard from "@/components/blog-post-card";
import { ContactForm } from "@/components/contact-form";
import {
  MonitorCheck,
  Shield,
  Cloud,
  ArrowRight,
  Users,
  Award,
  Building,
  Database,
  Network,
  Code,
  Monitor,
  Code2,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services: (Service & { Icon: any })[] = [
  {
    id: 1,
    title: "IT Consulting",
    description:
      "Strategic technology planning and digital transformation services.",
    icon: "monitor",
    Icon: MonitorCheck,
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business.",
    icon: "shield",
    Icon: Shield,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Cloud migration and management services.",
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

const team: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO & Founder",
    bio: "20+ years of experience in IT consulting and digital transformation.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=john",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Expert in cloud architecture and cybersecurity solutions.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=sarah",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Technical Director",
    bio: "Specializes in infrastructure optimization and DevOps practices.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=michael",
  },
];

const stats = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "200+", label: "Clients Served", icon: Building },
  { value: "50+", label: "Team Members", icon: Users },
];

const portfolio = [
  {
    title: "Cloud Migration for Enterprise",
    description:
      "Successfully migrated a Fortune 500 company's infrastructure to AWS, reducing operational costs by 40%.",
    icon: Cloud,
    category: "Cloud Solutions",
  },
  {
    title: "Security Infrastructure Upgrade",
    description:
      "Implemented comprehensive cybersecurity measures for a banking network, achieving zero breaches.",
    icon: Shield,
    category: "Cybersecurity",
  },
  {
    title: "Global Network Implementation",
    description:
      "Designed and deployed a global network infrastructure for a multinational corporation.",
    icon: Globe,
    category: "Network Solutions",
  },
  {
    title: "Custom ERP Development",
    description:
      "Built a tailored ERP solution for a manufacturing company, improving efficiency by 60%.",
    icon: Code2,
    category: "Software Development",
  },
  {
    title: "IT Infrastructure Modernization",
    description:
      "Modernized legacy systems for a healthcare provider, enhancing performance and security.",
    icon: Monitor,
    category: "Infrastructure",
  },
  {
    title: "Database Optimization Project",
    description:
      "Optimized database performance for an e-commerce platform, reducing query times by 80%.",
    icon: Database,
    category: "Database Management",
  },
];

export default function Home() {
  const { data: posts, isLoading: isLoadingPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        {/* Background with modern gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background">
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.07)_0.89%,transparent_10.12%)] backdrop-blur-[1px]"
            style={{ backgroundSize: "24px 24px" }}
          ></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent animate-gradient">
              Empowering Your Business Through Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We deliver cutting-edge IT solutions to help your business thrive
              in the digital age.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions to drive your business forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                Icon={service.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-muted-foreground">
              Delivering exceptional results through innovative technology
              solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <project.icon className="h-12 w-12 text-primary mb-4" />
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet our experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">IT Insights Blog</h2>
            <p className="text-xl text-muted-foreground">
              Expert insights and analysis on the latest IT trends and
              technologies
            </p>
          </div>
          {isLoadingPosts ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-[300px] bg-muted animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posts?.slice(0, 4).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team for any inquiries
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
