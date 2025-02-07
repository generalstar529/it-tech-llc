import TeamCard from "@/components/team-card";
import type { TeamMember } from "@shared/schema";

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
  {
    id: 4,
    name: "Emily Brown",
    role: "Solutions Architect",
    bio: "Leads complex enterprise software implementations.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=emily",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Security Lead",
    bio: "CISSP certified expert in cybersecurity and compliance.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=david",
  },
  {
    id: 6,
    name: "Lisa Martinez",
    role: "Client Success Manager",
    bio: "Ensures seamless delivery of IT solutions to clients.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=lisa",
  },
];

export default function Team() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Meet our experienced professionals dedicated to your success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
