"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share, Bookmark, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  community: string;
  timePosted: string;
  votes: number;
  commentCount: number;
}

export function PostCard({
  title,
  content,
  author,
  community,
  timePosted,
  votes: initialVotes,
  commentCount,
}: PostCardProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleVote = (direction: "up" | "down") => {
    if (userVote === direction) {
      // Remove vote
      setVotes(votes + (direction === "up" ? -1 : 1));
      setUserVote(null);
    } else {
      // Add/change vote
      const prevVote = userVote ? (userVote === "up" ? 1 : -1) : 0;
      const newVote = direction === "up" ? 1 : -1;
      setVotes(votes - prevVote + newVote);
      setUserVote(direction);
    }
  };

  return (
    <Card className="mb-4 overflow-hidden">
      <div className="flex">
        {/* Vote buttons */}
        <div className="flex flex-col items-center p-2 bg-muted/50 gap-1">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => handleVote("up")}
            className={userVote === "up" ? "text-primary" : ""}
          >
            <ArrowBigUp className="h-5 w-5" />
          </Button>
          <span className="text-sm font-medium">{votes}</span>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => handleVote("down")}
            className={userVote === "down" ? "text-destructive" : ""}
          >
            <ArrowBigDown className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1">
          <div className="p-4 pb-2">
            <div className="flex items-center mb-2 text-sm text-muted-foreground">
              <Link href={`/r/${community}`} className="font-medium hover:underline">
                r/{community}
              </Link>
              <span className="mx-1">•</span>
              <span>Postado por</span>
              <Link href={`/u/${author}`} className="ml-1 hover:underline">
                u/{author}
              </Link>
              <span className="mx-1">•</span>
              <span>{timePosted}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
          </div>

          <CardContent className="pb-2">
            <p>{content}</p>
          </CardContent>
          
          <CardFooter className="p-2 border-t">
            <div className="flex space-x-2 text-sm">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <MessageSquare className="mr-1 h-4 w-4" />
                {commentCount} Comentários
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share className="mr-1 h-4 w-4" />
                Compartilhar
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Bookmark className="mr-1 h-4 w-4" />
                Salvar
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Denunciar</DropdownMenuItem>
                  <DropdownMenuItem>Bloquear usuário</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}