"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/PostCard";

const mockPosts = [
  {
    id: 1,
    title: "Next.js 15 foi lançado com melhorias em Server Components",
    content: "A Vercel lançou o Next.js 15 com incríveis melhorias em Server Components e um novo sistema de cache. Compartilhando minhas impressões iniciais...",
    author: "techguru",
    community: "nextjs",
    timePosted: "2h",
    votes: 243,
    commentCount: 48,
  },
  {
    id: 2,
    title: "Como eu implementei autenticação com OAuth 2.0 no meu projeto React",
    content: "Depois de muitas tentativas, finalmente consegui implementar autenticação com OAuth 2.0 no meu projeto React. Vou compartilhar o processo e os desafios que enfrentei...",
    author: "webdev123",
    community: "reactjs",
    timePosted: "5h",
    votes: 159,
    commentCount: 23,
  },
  {
    id: 3,
    title: "Tailwind CSS 4.0 - Vale a pena migrar?",
    content: "O Tailwind CSS 4.0 foi lançado com várias melhorias de performance e novos recursos. Estou em dúvida se vale a pena migrar meu projeto atual. Alguém já fez a migração?",
    author: "cssmaster",
    community: "webdev",
    timePosted: "8h",
    votes: 87,
    commentCount: 35,
  },
];

export function Feed() {
  return (
    <div className="container max-w-3xl">
      <Tabs defaultValue="trending" className="mb-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="trending">Em alta</TabsTrigger>
          <TabsTrigger value="new">Novos</TabsTrigger>
          <TabsTrigger value="top">Melhores</TabsTrigger>
          <TabsTrigger value="following">Seguindo</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="mb-4 p-4">
        <CardContent className="p-0 flex items-center gap-4">
          <Button className="flex-1">Criar Post</Button>
          <Button className="flex-1" variant="outline">Compartilhar Link</Button>
        </CardContent>
      </Card>

      <div>
        {mockPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}