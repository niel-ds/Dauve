import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockCommunityPosts } from '@/data/mockData';
import { Send, MessageCircle, Heart, User, Briefcase } from 'lucide-react';

export function Community() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Comunidade Dauvest</h1>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Input 
              placeholder="Tem alguma dúvida sobre finanças?" 
              className="flex-1"
            />
            <Button size="icon" variant="default">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {mockCommunityPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  {post.avatar === 'fas fa-user-tie' ? (
                    <Briefcase className="h-5 w-5 text-primary-foreground" />
                  ) : (
                    <User className="h-5 w-5 text-primary-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">{post.author}</p>
                    <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                  </div>
                  <p className="text-sm mb-3">{post.content}</p>
                  <div className="flex space-x-4 text-xs text-muted-foreground">
                    <Button variant="ghost" size="sm" className="h-auto p-1">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-1">
                      <Heart className="h-3 w-3 mr-1" />
                      {post.likes}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}