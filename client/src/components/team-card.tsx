import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { TeamMember } from "@shared/schema";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="text-center transition-all hover:shadow-lg">
      <CardHeader>
        <Avatar className="h-32 w-32 mx-auto">
          <AvatarImage src={member.imageUrl} alt={member.name} />
          <AvatarFallback>
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-2">{member.role}</p>
        <p className="text-muted-foreground text-sm">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
